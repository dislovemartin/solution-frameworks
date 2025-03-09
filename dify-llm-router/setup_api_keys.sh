#!/bin/bash
# Script to update API keys in the llm-router-config.yaml file

# Check if the API key is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <api_key>"
  echo "Example: $0 sk-your-openai-api-key"
  exit 1
fi

API_KEY=$1

# Replace placeholder API keys in the config file
sed -i "s/your-openai-api-key/$API_KEY/g" llm-router-config.yaml

echo "API keys updated in llm-router-config.yaml"
echo "You can now start the services with: docker-compose up -d"