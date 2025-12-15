"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserRepository = void 0;
const uuid_1 = require("uuid");
class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    async create(userData) {
        const user = {
            id: (0, uuid_1.v4)(),
            ...userData,
            createdAt: new Date(),
        };
        this.users.push(user);
        return user;
    }
    async findAll() {
        return this.users;
    }
    async findById(id) {
        return this.users.find(user => user.id === id) || null;
    }
    async update(id, userData) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return null;
        this.users[index] = { ...this.users[index], ...userData };
        return this.users[index];
    }
    async delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return false;
        this.users.splice(index, 1);
        return true;
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
