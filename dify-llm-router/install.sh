#!/bin/bash
# Installation script for Dify with LLM Router

echo "Setting up Dify with LLM Router..."

# Create necessary directories
mkdir -p volumes/app/storage volumes/db/data volumes/redis/data volumes/weaviate

# Ask for API key
read -p "Enter your OpenAI API key (sk-...): " API_KEY

if [ -z "$API_KEY" ]; then
  echo "API key is required. Please run the script again with a valid API key."
  exit 1
fi

# Update the configuration with the API key
./setup_api_keys.sh "$API_KEY"

echo "Configuration updated. Starting services..."

# Start the services
docker-compose up -d

echo "==================================================="
echo "Dify with LLM Router setup complete!"
echo "==================================================="
echo ""
echo "You can access Dify at: http://localhost"
echo ""
echo "Initial setup:"
echo "1. Follow the setup wizard to create your admin account"
echo "2. Configure LLM Router as a provider in Dify settings"
echo ""
echo "To test the LLM Router directly, run:"
echo "python test_router.py"
echo ""
echo "For more information, see the README.md file."