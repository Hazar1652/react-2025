import type {ProductModel} from "../models/ProductModel.ts";
import type {ProductResponseDummy} from "../models/ProductResponseDummy.ts";

const endpointProducts = import.meta.env.VITE_API_URL+ '/products';

const  loadProducts = async ():Promise<ProductModel[]> => {
    const response:ProductResponseDummy = await fetch(endpointProducts)
        .then(value => value.json());
    return response.products;
}
export {loadProducts};