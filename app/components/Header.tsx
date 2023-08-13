import { Wave } from "./icons/Wave";
import { H1 } from "./utils/Titles";

export const Header = () => {
  return (
    <H1>
      Hiya{" "}
      <div className="inline-block motion-safe:animate-waving-hand">
        <Wave />
      </div>
      , I&#39;m Goudham
    </H1>
  );
};
