import { ProfilePicture } from "./Images";
import { H1 } from "./utils/Titles";

export const Header = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <ProfilePicture />
      <H1>
        Hiya <div className="inline-block animate-waving-hand">👋</div>, I&#39;m
        Goudham
      </H1>
    </div>
  );
};
