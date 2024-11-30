import DefaultLayout from "@/components/layout/DefaultLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Exclusive Store</title>
        <meta
          name="description"
          content="Exclusive Store is a fictional e-commerce store that sells exclusive products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <h1>Welcome to Exclusive Store</h1>
      </DefaultLayout>
    </>
  );
}
