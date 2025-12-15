"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCommentRepository = void 0;
const uuid_1 = require("uuid");
class InMemoryCommentRepository {
    constructor() {
        this.comments = [];
    }
    async create(commentData) {
        const comment = {
            id: (0, uuid_1.v4)(),
            ...commentData,
            createdAt: new Date(),
        };
        this.comments.push(comment);
        return comment;
    }
    async findAllByPostId(postId) {
        return this.comments.filter(comment => comment.postId === postId);
    }
    async findById(id) {
        return this.comments.find(comment => comment.id === id) || null;
    }
    async update(id, commentData) {
        const index = this.comments.findIndex(comment => comment.id === id);
        if (index === -1)
            return null;
        this.comments[index] = { ...this.comments[index], ...commentData };
        return this.comments[index];
    }
    async delete(id) {
        const index = this.comments.findIndex(comment => comment.id === id);
        if (index === -1)
            return false;
        this.comments.splice(index, 1);
        return true;
    }
}
exports.InMemoryCommentRepository = InMemoryCommentRepository;
