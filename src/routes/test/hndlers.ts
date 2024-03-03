import { prisma } from "../../db";
import { todo } from "../../db/schema";
import { Request, Response } from "express";

export const addTodo = async (req: Request, res: Response) => {
  const { text } = req.body;
  await prisma.test.create({
    data: {
      text,
    },
  });
};
//
//
// export async function createPost(
//     req: Request,
//     res: Response,
// ): Promise<Response> {
//     try {
//         const { title, content, authorId } = req.body;
//
//         const newPost = insertPostSchema.parse({ title, content, authorId });
//
//         const results: NewPost[] = await db
//             .insert(posts)
//             .values(newPost)
//             .returning();
//
//         if (!results || results.length < 1) {
//             return res.status(500).send({ message: 'Post could not be created.' });
//         }
//
//         return res.send(results[0]);
//     } catch (e) {
//         console.log(e);
//         return res.status(500).send({ message: 'Error encountered' });
//     }
// }
