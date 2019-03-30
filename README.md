# Node.js API

Node Express Mysql base project structure.
Include Sequelize and Docker.

## Docker Compose installation

You need to have installed docker and docker-compose on your machine.

Make sure that your ./data and ./logs local folders has 777 permissions.
Entrypoint of app is ./entrypoint.sh which need 755 permissions.

After that you can build images via docker-compose:
docker-compose build

And finally when build was successful, run docker containers:
docker-compose up

### Prerequisites

You can build containers separately

Build Node image from a Dockerfile:
docker build -t node-api .

Run a command in a new container:
sudo docker run --rm -it -p 3000:3000 -v $(pwd):/opt/node-api node-api bash

To run project you need to have fulfilled secret `.env` file.
