const products = [{id: 1, name: 'products A'},{id: 2, name: 'products B'}]
export const list = (req, res) => {
    res.json(products);
}
export const detail = (req,res) => {
    const result = products.find(item => item.id === +req.params.id);
    res.json(result)
}
export const add = (req, res) => {
    products.push(req.body);
    res.json(products);
}
export const deleteproduct = (req,res) => {
    const newProducts = products.filter(item => item.id !== +req.params.id);
    res.json(newProducts);
}
export const updated = (req,res) => {
    const newProducts = products.map(item => item.id === +req.params.id ? req.body : item)
    res.json(newProducts)
}