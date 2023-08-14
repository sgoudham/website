import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Navbar } from "./components/nav/Navbar";

export default function Home() {
  return (
    /* Inherits from the RootLayout */
    <div className="flex flex-col">
      <Navbar />
      <div className="self-center max-w-md lg:max-w-lg xl:max-w-xl flex flex-col space-y-10 grow">
        <Header />
        <About />
        <Projects />
      </div>
    </div>
  );
}
