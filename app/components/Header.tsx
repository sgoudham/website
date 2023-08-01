import { ProfilePictureCircle } from "./Images";

export const Header = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <ProfilePictureCircle />
      <span className="mt-2 text-2xl font-extrabold tracking-tight">
        Hiya <div className="inline-block animate-waving-hand">👋</div>, I&#39;m Goudham
      </span>
    </div>
  );
};
