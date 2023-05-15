import payload from "payload";
import { CreateQueueCommand, DeleteMessageCommandInput, ReceiveMessageCommandInput, SendMessageCommand } from "@aws-sdk/client-sqs";
import { httpClient } from "../../../services/httpApi";
import {
    ReceiveMessageCommand,
    DeleteMessageCommand,
  } from  "@aws-sdk/client-sqs";
import { sqsClient } from "../../../services/sqsClient";

const receiveMessageParams: ReceiveMessageCommandInput = {
    QueueUrl: process.env.QUEUE_NAME,
    MaxNumberOfMessages: 10, 
};

let messagesProcessed = 0;

async function getMarca(marcaId: any): Promise<any>{
    try {
      const { data } = await httpClient({
        method: "GET",
        url: `${process.env.FIPE_URI}/carros/marcas/${marcaId}`,
        headers: null,
      });
      return data;
    } catch (error) {
      console.error("Erro ao obter dados de marca:", error);
      return Promise.reject(error);
    }
  }

async function processMessages() {
    try {
        const receiveMessageResponse = await sqsClient.send(new ReceiveMessageCommand(receiveMessageParams));
        const messages = receiveMessageResponse.Messages;
  
        if (messages && messages.length > 0) {
            for (const message of messages) {
                let marca;
                try {
                  marca = JSON.parse(message.Body);
                  await payload.create({
                    collection: "marcas", 
                    data:{
                      nome: marca.nome,
                      codigo: marca.codigo
                    }
                  })
                } catch (error) {
                  console.error("Erro ao fazer parse da mensagem:", error);
                  continue;
                }

                try {
                    messagesProcessed++;

                    // Remover a mensagem da fila após processar a marca
                    const deleteMessageParams: DeleteMessageCommandInput = {
                        QueueUrl: receiveMessageParams.QueueUrl,
                        ReceiptHandle: message.ReceiptHandle,
                    };
                    await sqsClient.send(new DeleteMessageCommand(deleteMessageParams));
                    console.log("Mensagem removida da fila com sucesso");
                } catch (error) {
                    console.error("Erro ao processar a marca:", error);
                }
                
            }
            await processMessages();
        } else {
            console.log(`Todas as mensagens da fila foram processadas. Total de mensagens processadas: ${messagesProcessed}`);
        }
    } catch (error) {
      console.error("Erro ao ler mensagens da fila:", error);
    }
}

const subscribeEndpoint = async (req, res) => {
  try {
    await processMessages()    
    res.status(200).json("200");
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

export default subscribeEndpoint;
