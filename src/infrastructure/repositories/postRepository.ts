import { Post } from '../../domain/entities';
import { IPostRepository } from '../../domain/repositories';
import { v4 as uuidv4 } from 'uuid';

export class InMemoryPostRepository implements IPostRepository {
  private posts: Post[] = [];

  async create(postData: Omit<Post, 'id' | 'createdAt'>): Promise<Post> {
    const post: Post = {
      id: uuidv4(),
      ...postData,
      createdAt: new Date(),
    };
    this.posts.push(post);
    return post;
  }

  async findAll(): Promise<Post[]> {
    return this.posts;
  }

  async findById(id: string): Promise<Post | null> {
    return this.posts.find(post => post.id === id) || null;
  }

  async update(id: string, postData: Partial<Omit<Post, 'id' | 'createdAt'>>): Promise<Post | null> {
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) return null;
    this.posts[index] = { ...this.posts[index], ...postData };
    return this.posts[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) return false;
    this.posts.splice(index, 1);
    return true;
  }
}