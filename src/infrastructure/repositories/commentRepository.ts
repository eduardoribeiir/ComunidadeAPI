import { Comment } from '../../domain/entities';
import { ICommentRepository } from '../../domain/repositories';
import { v4 as uuidv4 } from 'uuid';

export class InMemoryCommentRepository implements ICommentRepository {
  private comments: Comment[] = [];

  async create(commentData: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> {
    const comment: Comment = {
      id: uuidv4(),
      ...commentData,
      createdAt: new Date(),
    };
    this.comments.push(comment);
    return comment;
  }

  async findAllByPostId(postId: string): Promise<Comment[]> {
    return this.comments.filter(comment => comment.postId === postId);
  }

  async findById(id: string): Promise<Comment | null> {
    return this.comments.find(comment => comment.id === id) || null;
  }

  async update(id: string, commentData: Partial<Omit<Comment, 'id' | 'createdAt'>>): Promise<Comment | null> {
    const index = this.comments.findIndex(comment => comment.id === id);
    if (index === -1) return null;
    this.comments[index] = { ...this.comments[index], ...commentData };
    return this.comments[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.comments.findIndex(comment => comment.id === id);
    if (index === -1) return false;
    this.comments.splice(index, 1);
    return true;
  }
}