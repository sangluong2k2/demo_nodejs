import { lauphan } from '../middleware/lauphan';
import { Router } from 'express';
const router = Router();

const products = [{id: 1, name: 'products A'},{id: 2, name: 'products B'}]

router.get("/products", lauphan,  (req, res) => {
    res.json(products);
});

router.get("/products/:id", (req,res) => {
    const result = products.find(item => item.id === +req.params.id);
    res.json(result)
})
router.post("/products", lauphan,  (req, res) => {
    products.push(req.body);
    res.json(products);
});
router.delete("/products/:id", (req,res) => {
    const newProducts = products.filter(item => item.id !== +req.params.id);
    res.json(newProducts);
});
router.put("/products/:id", (req,res) => {
    const newProducts = products.map(item => item.id === +req.params.id ? req.body : item)
    res.json(newProducts)
});

export default router;