import { User } from '../../domain/entities';
import { IUserRepository } from '../../domain/repositories';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    return this.userRepository.create(userData);
  }
}

export class GetUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export class GetUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }
}

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, userData: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User | null> {
    return this.userRepository.update(id, userData);
  }
}

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}