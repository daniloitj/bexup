# bash scripts/sqs/send-msg-queue.sh
aws \
    sqs send-message \
    --endpoint-url http://localhost:4566 \
    --queue-url http://localhost:4566/000000000000/mihafila \
    --message-body "Mensagem de Teste" \