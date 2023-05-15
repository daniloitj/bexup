import payload from "payload";
import { SendMessageCommandInput, SendMessageCommand } from "@aws-sdk/client-sqs";
import { httpClient } from "../../../services/httpApi";
import { sqsClient } from "../../../services/sqsClient";

let messagesProcessed = 0;

async function getMarcas(): Promise<any>{
  try {
    const { data } = await httpClient({
      method: "GET",
      url: `${process.env.FIPE_URI}/carros/marcas`,
      headers: null,
    });
    return data;
  } catch (error) {
    console.error("Erro ao obter dados de marcas:", error);
    return Promise.reject(error);
  }
}

async function publishQueueMarcas(marcas: any){
  for (const marca of marcas) {
    const sendMessageParams: SendMessageCommandInput = {
      QueueUrl: process.env.QUEUE_NAME, 
      MessageBody: JSON.stringify(marca), 
    };
    
    try {
      const sendMessageResponse = await sqsClient.send(new SendMessageCommand(sendMessageParams));
      console.log("Mensagem enviada com sucesso:", sendMessageResponse.MessageId);
      messagesProcessed++;
    } catch (error) {
      console.error("Erro ao enviar mensagem para fila:", error);
    }
  }
  console.log(`Total de marcas inseridas: ${messagesProcessed}`);
}

const loadEndpoint = async (req, res) => {
  const marcas = await getMarcas()  
  if(marcas){
    try {
      publishQueueMarcas(marcas)
      res.status(200).json(marcas);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }     
  }
};

export default loadEndpoint;
