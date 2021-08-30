import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tovlo</title>
        <link rel="icon" href="/logo-title.ico" />
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
