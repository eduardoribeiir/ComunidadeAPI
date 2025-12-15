"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const commentUseCases_1 = require("../../application/useCases/commentUseCases");
const commentRepository_1 = require("../../infrastructure/repositories/commentRepository");
const commentRepository = new commentRepository_1.InMemoryCommentRepository();
const createCommentUseCase = new commentUseCases_1.CreateCommentUseCase(commentRepository);
const getCommentsByPostIdUseCase = new commentUseCases_1.GetCommentsByPostIdUseCase(commentRepository);
const getCommentByIdUseCase = new commentUseCases_1.GetCommentByIdUseCase(commentRepository);
const updateCommentUseCase = new commentUseCases_1.UpdateCommentUseCase(commentRepository);
const deleteCommentUseCase = new commentUseCases_1.DeleteCommentUseCase(commentRepository);
class CommentController {
    async create(req, res) {
        try {
            const commentData = { ...req.body, postId: req.params.postId };
            const comment = await createCommentUseCase.execute(commentData);
            res.status(201).json(comment);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getByPostId(req, res) {
        try {
            const comments = await getCommentsByPostIdUseCase.execute(req.params.postId);
            res.json(comments);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getById(req, res) {
        try {
            const comment = await getCommentByIdUseCase.execute(req.params.id);
            if (!comment)
                return res.status(404).json({ error: 'Comment not found' });
            res.json(comment);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const comment = await updateCommentUseCase.execute(req.params.id, req.body);
            if (!comment)
                return res.status(404).json({ error: 'Comment not found' });
            res.json(comment);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const deleted = await deleteCommentUseCase.execute(req.params.id);
            if (!deleted)
                return res.status(404).json({ error: 'Comment not found' });
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.CommentController = CommentController;
