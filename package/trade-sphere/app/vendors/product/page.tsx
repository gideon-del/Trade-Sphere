"use client";
import { TABLES } from "@/lib/constants";
import { createClient } from "@/lib/superbase-ssr/client";

import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    const getProducts = async () => {
      const superbase = createClient();
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
