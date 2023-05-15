# bash scripts/sqs/list-queue.sh
aws \
    sqs list-queues --endpoint-url http://localhost:4566 

