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
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
}
