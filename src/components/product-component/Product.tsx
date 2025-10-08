import type { FC } from "react";
import type { IProductModel } from "../../models/ProductModel.ts";

type ProductProps = { product: IProductModel };

export const Product: FC<ProductProps> = ({ product }: ProductProps) => {
    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-2">
                {product.id}. {product.title}
            </h2>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Discount:</strong> {product.discountPercentage}%</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Weight:</strong> {product.weight} kg</p>

            <div>
                <h3 className="font-semibold mt-3">Dimensions:</h3>
                <ul className="list-disc list-inside">
                    <li>Width: {product.dimensions.width}</li>
                    <li>Height: {product.dimensions.height}</li>
                    <li>Depth: {product.dimensions.depth}</li>
                </ul>
            </div>

            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
            <p><strong>Availability:</strong> {product.availabilityStatus}</p>

            <div>
                <h3 className="font-semibold mt-3">Reviews:</h3>
                <ul className="list-disc list-inside">
                    {product.reviews.map((review, index) => (
                        <li key={index}>
                            <p><strong>{review.reviewerName}</strong> ({review.reviewerEmail})</p>
                            <p>Rating: {review.rating}</p>
                            <p>{review.comment}</p>
                            <p>Date: {review.date}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
            <p><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>

            <div>
                <h3 className="font-semibold mt-3">Meta:</h3>
                <p>Created At: {product.meta.createdAt}</p>
                <p>Updated At: {product.meta.updatedAt}</p>
                <p>Barcode: {product.meta.barcode}</p>
                <p>QR Code: {product.meta.qrCode}</p>
            </div>

            <div>
                <h3 className="font-semibold mt-3">Images:</h3>
                <img src={product.thumbnail} alt={product.title} className="w-32 h-32 object-cover mb-2" />
            </div>
        </div>
    );
};
