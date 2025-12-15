import { Request, Response } from 'express';
import { CreateUserUseCase, GetUsersUseCase, GetUserByIdUseCase, UpdateUserUseCase, DeleteUserUseCase } from '../../application/useCases/userUseCases';
import { InMemoryUserRepository } from '../../infrastructure/repositories/userRepository';

const userRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getUsersUseCase = new GetUsersUseCase(userRepository);
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await createUserUseCase.execute(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await getUsersUseCase.execute();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const user = await getUserByIdUseCase.execute(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user = await updateUserUseCase.execute(req.params.id, req.body);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const deleted = await deleteUserUseCase.execute(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'User not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}