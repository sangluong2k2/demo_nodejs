import { lauphan } from '../middleware/lauphan';
import { Router } from 'express';
import { add, remove, detail, list, updated } from '../controllers/product';

const router = Router();

router.get("/products", lauphan, list )
router.get("/product/:id", detail )
router.post("/products",lauphan, add )
router.delete("/product/:id", remove )
router.put("/product/:id", updated )

export default router;