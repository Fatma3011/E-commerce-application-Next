import { getTopProducts } from "../../../services/ProductService";

export default function handler(req, res) {
    getTopProducts("top-sellers-products").then((response) => { 
        res.status(200).json(response)
    });
    
  }
