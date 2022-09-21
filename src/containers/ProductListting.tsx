import react, {useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

import DonutChart from 'react-donut-chart';

const ProductListing = () => {
    const [value,setValue] = useState("");
    const products = useSelector((state: any) => state.allProducts.products);
   
    const graphdata = [
        {
            label: 'new',
            value: 25,
        },
        {
            label: 'review',
            value: 75
        },
    ];
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response: any = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("err", err);
            });
        dispatch(setProducts(response.data));
           
    };

    useEffect(() => {
        fetchProducts();
    }, [value]);

    console.log("Products :", products);
    return (
        <>
            <DonutChart
                data={graphdata}
                onClick={(item, toggled) =>          
                    toggled
                    ? setValue(item.label)
                    : setValue("unselected")   
                  }
            />;
            <ProductComponent />
        </>
    )
};

export default ProductListing;