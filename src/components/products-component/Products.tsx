import {useEffect, useState} from "react";
import type { IProductModel } from "../../models/ProductModel";
import {loadProducts} from "../../service/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProductModel[]>([]);
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