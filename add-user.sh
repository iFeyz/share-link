#!/bin/bash

# Set the URL of your Next.js server
SERVER_URL="http://localhost:3000"

# Set the admin setup key (should match your environment variable)
SETUP_KEY="setupsecretkey123"

# User details
EMAIL="admin@example.com"
NAME="Administrator"
PASSWORD="Admin123!"
ROLE="superadmin" # Options: user, admin, superadmin

# Create the JSON payload
JSON_PAYLOAD="{\"email\":\"$EMAIL\",\"name\":\"$NAME\",\"password\":\"$PASSWORD\",\"role\":\"$ROLE\"}"

# Send the request
echo "Creating user: $EMAIL"
curl -X POST "$SERVER_URL/api/setup-user" \
  -H "Content-Type: application/json" \
  -H "x-setup-secret: $SETUP_KEY" \
  -d "$JSON_PAYLOAD"

echo -e "\nDone!" 