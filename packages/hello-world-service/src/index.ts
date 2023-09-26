import { helloWorld } from "@munchii/nodejs-typescript-monorepo-hello-world-common";
import { createServer as createHttpServer } from "http";

const server = createHttpServer((_req, res) => {
  res.setHeader("Connection", "close");
  res.write(helloWorld);
  res.end();
});

const port = 43037;
server.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

function shutdown(reason: string) {
  console.info(reason);
  server.close(() => {
    console.log("Server stopped");
  });
}

process.on("SIGINT", () => shutdown("Received SIGINT"));
process.on("SIGTERM", () => shutdown("Received SIGTERM"));
process.on("uncaughtException", (err) =>
  shutdown("Uncaught exception: " + err)
);
