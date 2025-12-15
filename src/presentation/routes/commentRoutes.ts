import { Router } from 'express';
import { CommentController } from '../controllers/commentController';

const router = Router();
const commentController = new CommentController();

router.post('/posts/:postId/comments', (req, res) => commentController.create(req, res));
router.get('/posts/:postId/comments', (req, res) => commentController.getByPostId(req, res));
router.get('/comments/:id', (req, res) => commentController.getById(req, res));
router.put('/comments/:id', (req, res) => commentController.update(req, res));
router.delete('/comments/:id', (req, res) => commentController.delete(req, res));

export default router;