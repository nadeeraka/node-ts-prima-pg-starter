import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

// import { router as postsRouter } from './routes/posts';
// import { router as usersRouter } from "./routes/users";
import { router as statusRouter } from "./routes/status";
import { router as testTodo } from "./routes/test";

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: false }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const API_PREFIX = "/api";
app.use(`${API_PREFIX}/test`, testTodo);
// app.use(`${API_PREFIX}/users`, usersRouter);
app.use(`/`, statusRouter);

app.listen(port, () =>
  console.log(`🚀 Server listening at http://localhost:${port}`)
);
