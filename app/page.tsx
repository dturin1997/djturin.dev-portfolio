import Navbar from "@components/navbar";
import Footer from "@components/Footer";
import { MeSection } from "./components/MeSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="container mx-auto h-min[calc(100vh-107.625px)] lg:h-min-[calc(100vh-123.625px)]">
      
      <div className="pt-5">
        <MeSection />
      </div>
      <AboutSection />
    </main>
  );
}
