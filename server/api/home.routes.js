import { Router } from 'express';
import * as HomeController from '../controllers/home.controller';

const router = new Router();

// Get all Posts
router.route('/posts').get(HomeController.getPosts);

export default router;
