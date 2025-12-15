import { Request, Response } from 'express';
import { CreatePostUseCase, GetPostsUseCase, GetPostByIdUseCase, UpdatePostUseCase, DeletePostUseCase } from '../../application/useCases/postUseCases';
import { InMemoryPostRepository } from '../../infrastructure/repositories/postRepository';

const postRepository = new InMemoryPostRepository();
const createPostUseCase = new CreatePostUseCase(postRepository);
const getPostsUseCase = new GetPostsUseCase(postRepository);
const getPostByIdUseCase = new GetPostByIdUseCase(postRepository);
const updatePostUseCase = new UpdatePostUseCase(postRepository);
const deletePostUseCase = new DeletePostUseCase(postRepository);

export class PostController {
  async create(req: Request, res: Response) {
    try {
      const post = await createPostUseCase.execute(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const posts = await getPostsUseCase.execute();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const post = await getPostByIdUseCase.execute(req.params.id);
      if (!post) return res.status(404).json({ error: 'Post not found' });
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const post = await updatePostUseCase.execute(req.params.id, req.body);
      if (!post) return res.status(404).json({ error: 'Post not found' });
      res.json(post);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const deleted = await deletePostUseCase.execute(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Post not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}