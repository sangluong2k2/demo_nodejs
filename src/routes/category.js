import { Router } from "express";
import { create, list, read, remove } from "../controllers/category";
import { lauphan } from "../middleware/lauphan";

const router = Router();

router.get("/categories", lauphan, list);
router.post('/category', lauphan, create);
router.get('/category/:slug', lauphan, read);
router.delete('/category/:id', lauphan, remove)
export default router