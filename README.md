# nodejs-docker-template

Simple template for NodeJS development with Docker

---

### Docker Commands

> The `docker` and `docker-compose` commands were implemented in `package.json` and can be called through npm

- Running API and MySQL with docker compose: `npm run compose:up`
- Running API and MySQL with docker compose with detached mode: `compose:up -d`
- Running docker compose down: `compose:down`

---

### Database Commands

> Were created with `sequelize-cli` commands and scripts for easy database manipulation

- Creating database: `npm run db:create`
- Dropping database: `npm run db:drop`
- Creating tables: `npm run db:sync`

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
