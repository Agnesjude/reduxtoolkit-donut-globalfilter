import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setProducts } from "../redux/actions/productActions";
import { COLUMNS } from "./breadcrumbsnav/column";
import { FilteringTable } from "./breadcrumbsnav/FilteringTable";
import tabledata from "./breadcrumbsnav/tabledata.json"

const ProductDetails = () => {
    const products = useSelector((state: any) => state.allProducts.products);

    const dispatch = useDispatch();
    const api_url = "https://fakestoreapi.com/products";

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
            <FilteringTable data={tabledata} columns={COLUMNS} />
        </>
        
    )
};

export default ProductDetails;