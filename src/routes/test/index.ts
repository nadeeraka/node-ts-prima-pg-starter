import {Router} from "express";
import {addTodo} from "./hndlers";

export const router = Router();

router.post('/', addTodo);