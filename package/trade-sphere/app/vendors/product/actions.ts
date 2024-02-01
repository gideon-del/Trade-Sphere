"use server";

import { createClient } from "@/lib/superbase-ssr/actions";
import { AddProductForm } from "@/lib/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const addProduct = async (
  productDetail: AddProductForm,
  images: any[]
) => {
  const cookieStore = cookies();
  const superbase = await createClient(cookieStore);
  const {
    data: { user },
    error,
  } = await superbase.auth.getUser();
  if (error) {
    console.log(error);
    redirect("/");
  }
  if (!user) {
    redirect("/auth/login");
  }
  const product = await superbase
    .from("products")
    .insert({
      ...productDetail,
      vendor_id: user.id,
    })
    .select("*");
  if (!product.data) {
    console.log("no data");
    return;
  }
  const transformedImage = images.map((imageUrl) => ({
    url: imageUrl,
    product_id: product?.data[0]?.id,
  }));
  await superbase.from("image").insert(transformedImage);
  redirect("/vendors/product");
};
