import react from "react";
import { useSelector } from "react-redux";

const ProductComponent = (filterValue :any) => {
    const products = useSelector((state: any) => state.allProducts.products);
   
    // const {id, title} = products[0];
    console.log(filterValue)
    const renderList = products.map((product: any) => {
        const { id, title } = product;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
            </tr>

        );
    })

    interface TableComponent  { // make sure all required component's inputs/Props keys&types match
        countries:any
        }

    return (
       
        <>
            <table>
                {renderList}
            </table>
        </>
    )
};

export default ProductComponent;
