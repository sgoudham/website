import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div className="self-center">
      <div className="max-w-md lg:max-w-lg xl:max-w-xl flex flex-col gap-y-10 grow">
        <Header />
        <About />
        <Projects />
      </div>
    </div>
  );
}
