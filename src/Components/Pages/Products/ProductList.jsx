import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../../App/Layout/Layout"
import { ProductListItem } from "./ProductListItem";
import Style from "./ProductListItem.module.scss";

export const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getProductList = async () => {
            const result = await axios.get(`https://api.mediehuset.net/snippets/products?orderby=rand()&limit=1`)
            setProductList(result.data.products)
        }
        getProductList();
    }, [setProductList])

    return (
        <Layout title="Produkter til salg" description="Snippets for products">
            <div className={Style.ProductListWrapper}>
                {productList && productList.map(product => {
                    return (
                        <ProductListItem key={product.id} data={product} />
                    )
                })
                }
            </div>
        </Layout>
    )
}