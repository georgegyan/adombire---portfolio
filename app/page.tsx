import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="container-custom py-32">
          <h1 className="text-5xl font-bold">
            Building software, exploring AI,
            and sharing the journey.
          </h1>
        </section>
      </main>
    </>
  );
}