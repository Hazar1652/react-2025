import {useEffect, useState} from "react";
import type { ProductModel } from "../../models/ProductModel";
import {loadProducts} from "../../service/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    useEffect(() => {
        loadProducts().then(value => setProducts(value));
    }, []);
    return (
        <div>
            {
                products.map(product =><Product product={product} key={product.id} />)

            }
        </div>
    );
};