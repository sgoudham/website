import { ProfilePicture } from "./Images";

export const Header = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <ProfilePicture />
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
        Hiya <div className="inline-block animate-waving-hand">👋</div>, I&#39;m
        Goudham
      </h1>
    </div>
  );
};
