import type {IProductModel} from "../models/ProductModel.ts";
import type {IProductResponseDummy} from "../models/IProductResponseDummy.ts";

const endpointProducts = import.meta.env.VITE_API_URL+ '/products';

const  loadProducts = async ():Promise<IProductModel[]> => {
    const response:IProductResponseDummy = await fetch(endpointProducts)
        .then(value => value.json());
    return response.products;
}
export {loadProducts};