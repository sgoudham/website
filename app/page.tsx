import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./components/body/About";
import { Projects } from "./components/body/Projects";

export default function Home() {
  return (
    <>
      <div className="max-w-md flex flex-col space-y-10 grow mt-10 mb-10">
        <Header />
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
