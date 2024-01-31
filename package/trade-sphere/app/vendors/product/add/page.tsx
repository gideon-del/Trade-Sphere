"use client";
import superbase from "@/lib/superbase";
import React, { useState } from "react";

const AddProduct = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const hanldeImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    try {
      const currentFile = e.target.files[0];
      if (!currentFile.type.includes("image/")) {
        console.log("This is not an image");
      }
      const { data, error } = await superbase.storage
        .from("trade-sphere-images")
        .upload(`${Date.now()}trade-sphere`, e.target.files[0]);
      if (error) {
        console.log(error);
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
  return (
    <main>
      <form className="flex flex-col gap-8">
        <h1>Add Product</h1>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="px-2 py-4 rounded-md border border-black"
          />
        </fieldset>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="description">Description</label>
          {/* <input type="text" id="name" /> */}
          <textarea
            name="description"
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
          />
        </fieldset>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            inputMode="numeric"
            id="quantity"
            className="px-2 py-4 rounded-md border border-black"
          />
        </fieldset>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="px-2 py-4 rounded-md border border-black"
          ></select>
        </fieldset>
        <fieldset className="flex gap-4 items-start">
          <label htmlFor="Images">Image</label>
          <input type="file" onChange={hanldeImageChange} accept="image/*" />
        </fieldset>
      </form>
    </main>
  );
};

export default AddProduct;
