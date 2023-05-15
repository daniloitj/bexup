# bash scripts/sqs/delete.sh
aws \
    --endpoint-url=http://localhost:4566 \
    sqs delete-queue  \
    --queue-url http://localhost:4566/000000000000/mihafila