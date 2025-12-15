import { Request, Response } from 'express';
import { CreateCommentUseCase, GetCommentsByPostIdUseCase, GetCommentByIdUseCase, UpdateCommentUseCase, DeleteCommentUseCase } from '../../application/useCases/commentUseCases';
import { InMemoryCommentRepository } from '../../infrastructure/repositories/commentRepository';

const commentRepository = new InMemoryCommentRepository();
const createCommentUseCase = new CreateCommentUseCase(commentRepository);
const getCommentsByPostIdUseCase = new GetCommentsByPostIdUseCase(commentRepository);
const getCommentByIdUseCase = new GetCommentByIdUseCase(commentRepository);
const updateCommentUseCase = new UpdateCommentUseCase(commentRepository);
const deleteCommentUseCase = new DeleteCommentUseCase(commentRepository);

export class CommentController {
  async create(req: Request, res: Response) {
    try {
      const commentData = { ...req.body, postId: req.params.postId };
      const comment = await createCommentUseCase.execute(commentData);
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getByPostId(req: Request, res: Response) {
    try {
      const comments = await getCommentsByPostIdUseCase.execute(req.params.postId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const comment = await getCommentByIdUseCase.execute(req.params.id);
      if (!comment) return res.status(404).json({ error: 'Comment not found' });
      res.json(comment);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const comment = await updateCommentUseCase.execute(req.params.id, req.body);
      if (!comment) return res.status(404).json({ error: 'Comment not found' });
      res.json(comment);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const deleted = await deleteCommentUseCase.execute(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Comment not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}