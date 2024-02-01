"use client";
import { addProductSchema } from "@/lib/form-schemas";
import { AddProductForm } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "../actions";
import { createClient } from "@/lib/superbase-ssr/client";

const AddProduct = () => {
  const { handleSubmit, register } = useForm<AddProductForm>({
    resolver: zodResolver(addProductSchema),
    mode: "onBlur",
  });
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const hanldeImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    try {
      const currentFile = e.target.files[0];
      if (!currentFile.type.includes("image/")) {
        console.log("This is not an image");
      }
      const superbase = createClient();
      const { data, error } = await superbase.storage
        .from("trade-sphere-images")
        .upload(`${Date.now()}trade-sphere`, e.target.files[0]);
      if (error) {
        console.error(error);
        return;
      }
      const {
        data: { publicUrl },
      } = superbase.storage.from("trade-sphere-images").getPublicUrl(data.path);
      setImageUrls((prev) => [...prev, publicUrl]);
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = async (productInfo: AddProductForm) => {
    try {
      if (imageUrls.length === 0) {
        console.log("No image selected");
        return;
      }
      await addProduct(productInfo, imageUrls);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const getCategories = async () => {
      try {
        const superbase = createClient();
        const categories = await superbase.from("category").select("*");
        const typedCategory = [...categories.data!] as any[];
        setCategories(typedCategory);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <main>
      <form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(submitHandler, (err) => console.error(err))}
      >
        <h1>Add Product</h1>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="px-2 py-4 rounded-md border border-black"
            {...register("name")}
          />
        </fieldset>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="description">Description</label>

          <textarea
            {...register("description")}
            id="description"
            className="px-2 py-4 min-w-32 min-h-64 rounded-md border border-black"
          ></textarea>
        </fieldset>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            inputMode="numeric"
            id="price"
            className="px-2 py-4 rounded-md border border-black"
            {...register("price", {
              valueAsNumber: true,
            })}
          />
        </fieldset>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            inputMode="numeric"
            id="quantity"
            className="px-2 py-4 rounded-md border border-black"
            {...register("quantity", {
              valueAsNumber: true,
            })}
          />
        </fieldset>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="px-2 py-4 rounded-md border border-black"
            {...register("category_id")}
          >
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.name}
              </option>
            ))}
          </select>
        </fieldset>
        <figure>
          {imageUrls.map((imageUrl) => (
            <Image
              src={imageUrl}
              alt="Product Image"
              width={300}
              height={300}
              key={imageUrl}
            />
          ))}
        </figure>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="Images">Image</label>
          <input type="file" onChange={hanldeImageChange} accept="image/*" />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default AddProduct;
