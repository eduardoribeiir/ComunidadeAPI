"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postUseCases_1 = require("../../application/useCases/postUseCases");
const postRepository_1 = require("../../infrastructure/repositories/postRepository");
const postRepository = new postRepository_1.InMemoryPostRepository();
const createPostUseCase = new postUseCases_1.CreatePostUseCase(postRepository);
const getPostsUseCase = new postUseCases_1.GetPostsUseCase(postRepository);
const getPostByIdUseCase = new postUseCases_1.GetPostByIdUseCase(postRepository);
const updatePostUseCase = new postUseCases_1.UpdatePostUseCase(postRepository);
const deletePostUseCase = new postUseCases_1.DeletePostUseCase(postRepository);
class PostController {
    async create(req, res) {
        try {
            const post = await createPostUseCase.execute(req.body);
            res.status(201).json(post);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getAll(req, res) {
        try {
            const posts = await getPostsUseCase.execute();
            res.json(posts);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getById(req, res) {
        try {
            const post = await getPostByIdUseCase.execute(req.params.id);
            if (!post)
                return res.status(404).json({ error: 'Post not found' });
            res.json(post);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const post = await updatePostUseCase.execute(req.params.id, req.body);
            if (!post)
                return res.status(404).json({ error: 'Post not found' });
            res.json(post);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const deleted = await deletePostUseCase.execute(req.params.id);
            if (!deleted)
                return res.status(404).json({ error: 'Post not found' });
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.PostController = PostController;
