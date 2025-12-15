import { User, Post, Comment } from '../entities';

export interface IUserRepository {
  create(user: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  update(id: string, user: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}

export interface IPostRepository {
  create(post: Omit<Post, 'id' | 'createdAt'>): Promise<Post>;
  findAll(): Promise<Post[]>;
  findById(id: string): Promise<Post | null>;
  update(id: string, post: Partial<Omit<Post, 'id' | 'createdAt'>>): Promise<Post | null>;
  delete(id: string): Promise<boolean>;
}

export interface ICommentRepository {
  create(comment: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment>;
  findAllByPostId(postId: string): Promise<Comment[]>;
  findById(id: string): Promise<Comment | null>;
  update(id: string, comment: Partial<Omit<Comment, 'id' | 'createdAt'>>): Promise<Comment | null>;
  delete(id: string): Promise<boolean>;
}