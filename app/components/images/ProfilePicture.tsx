export const ProfilePicture = ({}) => {
  return (
    <img
      src="/profile-picture.png"
      width={128}
      height={128}
      alt="Goudham smiling at the camera"
      className="motion-safe:hover:animate-spin w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32"
      fetchPriority="high"
    />
  );
};
