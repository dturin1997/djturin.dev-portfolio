import Navbar from "@components/navbar";
import Footer from "@components/Footer";
import { MeSection } from "./components/MeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto h-[calc(100vh-107.625px)] lg:h-[calc(100vh-123.625px)]">
        <div className="py-8">
          <MeSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
