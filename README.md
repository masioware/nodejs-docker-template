# nodejs-docker-template
Simple template for NodeJS development with Docker

---
### Docker Commands
> The ```docker``` and ```docker-compose``` commands were implemented in ```package.json``` and can be called through npm

- Build docker image with Dockerfile: ```npm run build```
- Running API and MySQL with docker compose: ```npm run up```
- Running API and MySQL with docker compose with detached mode: ```npm run up:d```
- Running docker compose down: ```npm run down```

---
### Debug
> It's possible to debug the code that is running inside the container through a WebSocket server on port 9229

**vscode debug launch model**
```json
// .vscode/launch.json

{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Docker: Attach to Node",
      "remoteRoot": "/app",
      "port": 9229,
      "restart": true
    }
  ]
}
```