import type {IProductModel} from "./ProductModel.ts";

export interface IProductResponseDummy {
    products:IProductModel[],
    total:number,
    skip:number,
    limit:number
}