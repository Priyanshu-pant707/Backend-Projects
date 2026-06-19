# Nginx Load Balancer with Node.js

This project demonstrates load balancing using Nginx with multiple Node.js servers.

## Architecture

Client → Nginx (Port 8080) → Node Servers (3000, 3001, 3002)

## Features

- Reverse proxy setup
- Round-robin load balancing
- Multiple backend servers
- Scalable backend architecture

## Run project

Start servers:

node server.js 3000
node server.js 3001
node server.js 3002

Start nginx:

sudo service nginx start

Access:

http://localhost:8080