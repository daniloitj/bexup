# bash scripts/sqs/create-queue.sh minha-fila
aws \
    --endpoint-url=http://localhost:4566 sqs create-queue --queue-name mihafila 

aws \
    sqs list-queues --endpoint-url http://localhost:4566 

