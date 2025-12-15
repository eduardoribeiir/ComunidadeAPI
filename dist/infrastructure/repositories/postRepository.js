"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryPostRepository = void 0;
const uuid_1 = require("uuid");
class InMemoryPostRepository {
    constructor() {
        this.posts = [];
    }
    async create(postData) {
        const post = {
            id: (0, uuid_1.v4)(),
            ...postData,
            createdAt: new Date(),
        };
        this.posts.push(post);
        return post;
    }
    async findAll() {
        return this.posts;
    }
    async findById(id) {
        return this.posts.find(post => post.id === id) || null;
    }
    async update(id, postData) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index === -1)
            return null;
        this.posts[index] = { ...this.posts[index], ...postData };
        return this.posts[index];
    }
    async delete(id) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index === -1)
            return false;
        this.posts.splice(index, 1);
        return true;
    }
}
exports.InMemoryPostRepository = InMemoryPostRepository;
