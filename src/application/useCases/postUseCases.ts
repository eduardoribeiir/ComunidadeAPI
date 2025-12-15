import { Post } from '../../domain/entities';
import { IPostRepository } from '../../domain/repositories';

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(postData: Omit<Post, 'id' | 'createdAt'>): Promise<Post> {
    return this.postRepository.create(postData);
  }
}

export class GetPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(): Promise<Post[]> {
    return this.postRepository.findAll();
  }
}

export class GetPostByIdUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(id: string): Promise<Post | null> {
    return this.postRepository.findById(id);
  }
}

export class UpdatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(id: string, postData: Partial<Omit<Post, 'id' | 'createdAt'>>): Promise<Post | null> {
    return this.postRepository.update(id, postData);
  }
}

export class DeletePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(id: string): Promise<boolean> {
    return this.postRepository.delete(id);
  }
}