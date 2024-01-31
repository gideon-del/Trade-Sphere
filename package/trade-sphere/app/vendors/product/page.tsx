"use client";
import { TABLES } from "@/lib/constants";
import superbase from "@/lib/superbase";
import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    const getProducts = async () => {
      const products = await superbase.from(TABLES.product).select(`
        *, 
        image 
        (id, 
        url)`);
    };
    getProducts();
  }, []);
  return <div>Products</div>;
};

export default Products;
