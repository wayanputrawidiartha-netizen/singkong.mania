import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Members from "./components/Members";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-primary-dark flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-[1400px] mx-auto w-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        <div className="md:col-span-8 md:row-span-2">
          <Hero />
        </div>
        <div className="md:col-span-4 md:row-span-2">
          <About />
        </div>
        <div className="md:col-span-7 md:row-span-2">
          <Members />
        </div>
        <div className="md:col-span-5 md:row-span-2">
          <Documentation />
        </div>
      </div>
      <Footer />
    </main>
  );
}
