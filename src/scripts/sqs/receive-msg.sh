# bash scripts/sqs/receive-msg.sh
aws  \
   sqs receive-message  \
   --endpoint-url http://localhost:4566  \
   --queue-url http://localhost:4566/000000000000/mihafila  \
   --attribute-names All  \
   --message-attribute-names All   \
