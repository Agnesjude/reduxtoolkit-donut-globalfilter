import react, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import donutdata from "./data/donutdata.json";
import DonutChart from 'react-donut-chart';

import { BasicTable } from "./tablepage/Table";
import { Paginated } from "./tablepage/Paginated";
import data from "./tablepage/data.json";

import { COLUMNS } from "./breadcrumbsnav/column";
import tabledata from "./breadcrumbsnav/tabledata.json"
import { FilteringTable } from "./tablepage/FilteringTable";

const ProductListing = () => {
    const products = useSelector((state: any) => state.allProducts.products);

    const dispatch = useDispatch();
    const api_url = "https://fakestoreapi.com/products";

    // const fetchProducts = async () => {
    //     const response: any = await axios
    //         .get("https://fakestoreapi.com/products")
    //         .catch((err) => {
    //             console.log("err", err);
    //         });
    //     dispatch(setProducts(response.data));

    // };

    // useEffect(() => {
    //     fetchProducts();
    // }, [value]);

    let [isLoaded, setIsLoaded] = useState(false);
    let [err, setErr] = useState(null);
    useEffect(() => {
        const getProducts = () => {
            fetch(api_url)
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error("Server responds with error!")
                    }
                    return res.json()
                })
                .then(response => {
                    dispatch(setProducts(response));
                    setIsLoaded(true)
                },
                    err => {
                        setErr(err)
                        setIsLoaded(true)
                    })
        };
        getProducts()
    }, [])

    console.log("Products :", products);
    return (
        <>
            {/* <DonutChart
                data={donutdata}
                onClick={(item, toggled) =>          
                    toggled
                    ? setValue(item.label)
                    : setValue("")   
                  }
            />; */}
            
            <FilteringTable data={tabledata} columns={COLUMNS} />
            {/*<Paginated data={products} columns={COLUMNS} filterValue={value}/>
           {/* <ProductComponent filterValue={value} /> */}
        </>
    )
};

export default ProductListing;