import type {FC} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
type ProductProps = { product: ProductModel };
export const Product:FC<ProductProps>= ({product}:ProductProps) => {
    return (
        <div>
            {product.id+'.'}
            {product.title}
            {product.description}
            {product.category}
            <div>
                <h3 className="font-semibold mt-3">Dimensions:</h3>
                <ul className="list-disc list-inside">
                    <li>Width: {product.dimensions.width}</li>
                    <li>Height: {product.dimensions.height}</li>
                    <li>Depth: {product.dimensions.depth}</li>
                </ul>
                <p><strong>Weight:</strong> {product.weight} kg</p>
            </div>
        </div>
    );
};