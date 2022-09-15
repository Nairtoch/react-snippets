import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ProductDetails = props => {
    const { product_id } = useParams();
    const [ productData, setProductData ] = useState({});

    useEffect(() => {
        const getProductData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/snippets/products/${product_id}`)
                setProductData(result.data.item);
                console.log(productData.image);
            }
            catch (err) {
                console.error(err)
            }
        }
        getProductData();
    }, [product_id])

    return (
        <section className="ProductDetails">
            {productData ? (
                <div>
                    {productData.products && productData.products[0].image && (
                        <img src={productData.products[0].image} alt="Image of a product" />
                    )}
                </div>
            ) : null}
            <div>
                <h3>{productData.name}</h3>
                <p>{productData.description_long}</p>
                <p>Pris: {productData.price} dkk</p>
            </div>
        </section>
    )
}