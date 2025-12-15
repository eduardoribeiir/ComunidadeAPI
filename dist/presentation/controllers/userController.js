"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userUseCases_1 = require("../../application/useCases/userUseCases");
const userRepository_1 = require("../../infrastructure/repositories/userRepository");
const userRepository = new userRepository_1.InMemoryUserRepository();
const createUserUseCase = new userUseCases_1.CreateUserUseCase(userRepository);
const getUsersUseCase = new userUseCases_1.GetUsersUseCase(userRepository);
const getUserByIdUseCase = new userUseCases_1.GetUserByIdUseCase(userRepository);
const updateUserUseCase = new userUseCases_1.UpdateUserUseCase(userRepository);
const deleteUserUseCase = new userUseCases_1.DeleteUserUseCase(userRepository);
class UserController {
    async create(req, res) {
        try {
            const user = await createUserUseCase.execute(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getAll(req, res) {
        try {
            const users = await getUsersUseCase.execute();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getById(req, res) {
        try {
            const user = await getUserByIdUseCase.execute(req.params.id);
            if (!user)
                return res.status(404).json({ error: 'User not found' });
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const user = await updateUserUseCase.execute(req.params.id, req.body);
            if (!user)
                return res.status(404).json({ error: 'User not found' });
            res.json(user);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const deleted = await deleteUserUseCase.execute(req.params.id);
            if (!deleted)
                return res.status(404).json({ error: 'User not found' });
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.UserController = UserController;
