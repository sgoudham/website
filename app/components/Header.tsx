import { Wave } from "./icons/Wave";

export const Header = () => {
  return (
    <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-center">
      Hiya{" "}
      <div className="inline-block motion-safe:animate-waving-hand">
        <Wave />
      </div>
      , I&#39;m Goudham
    </h1>
  );
};
