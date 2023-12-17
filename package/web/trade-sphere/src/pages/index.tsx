import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Trade-Sphere</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1"></main>
      </div>
    </>
  );
}
