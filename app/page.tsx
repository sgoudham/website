import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./components/body/About";
import { Projects } from "./components/body/Projects";

export default function Home() {
  return (
    <div className="self-center">
      <div className="max-w-md flex flex-col gap-y-10 mt-10 grow">
        <Header />
        <About />
        <Projects />
      </div>
    </div>
  );
}
