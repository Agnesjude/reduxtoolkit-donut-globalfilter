import react from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    // const {id, title} = products[0];
    const renderList = products.map((product: any) => {
        const { id, title } = product;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
            </tr>

        );
    })

    return (
        <>
            <table>
                {renderList}
            </table>
        </>
    )
};

export default ProductComponent;