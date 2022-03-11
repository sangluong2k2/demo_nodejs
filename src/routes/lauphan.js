import { lauphan } from '../middleware/lauphan';
import { Router } from 'express';
import { add, deleteproduct, detail, list, updated } from '../controllers/product';
const router = Router();

router.get("/products", lauphan, list );
router.get("/products/:id", detail )
router.post("/products", lauphan, add );
router.delete("/products/:id",deleteproduct );
router.put("/products/:id", updated );

export default router;