import { Comment } from '../../domain/entities';
import { ICommentRepository } from '../../domain/repositories';

export class CreateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(commentData: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> {
    return this.commentRepository.create(commentData);
  }
}

export class GetCommentsByPostIdUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(postId: string): Promise<Comment[]> {
    return this.commentRepository.findAllByPostId(postId);
  }
}

export class GetCommentByIdUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(id: string): Promise<Comment | null> {
    return this.commentRepository.findById(id);
  }
}

export class UpdateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(id: string, commentData: Partial<Omit<Comment, 'id' | 'createdAt'>>): Promise<Comment | null> {
    return this.commentRepository.update(id, commentData);
  }
}

export class DeleteCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(id: string): Promise<boolean> {
    return this.commentRepository.delete(id);
  }
}