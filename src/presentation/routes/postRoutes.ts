import { Router } from 'express';
import { PostController } from '../controllers/postController';

const router = Router();
const postController = new PostController();

router.post('/posts', (req, res) => postController.create(req, res));
router.get('/posts', (req, res) => postController.getAll(req, res));
router.get('/posts/:id', (req, res) => postController.getById(req, res));
router.put('/posts/:id', (req, res) => postController.update(req, res));
router.delete('/posts/:id', (req, res) => postController.delete(req, res));

export default router;