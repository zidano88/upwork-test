import Image from "next/image";
import Navbar from "./components/Navbar";
import PageBody from "./components/PageBody";

export default function Home() {
  return (
    <main
      // min-h-screen
      className="h-screen bg-gradient-to-b from-primary-dark to-primary-darkest text-white flex flex-col justify-start items-center"
    >
      {/* max-w-7xl */}
      <div className="bg-transparent h-full">
        <Navbar />
        <PageBody />
      </div>
    </main>
  );
}
