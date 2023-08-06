import Image from "next/image";

export const ProfilePicture = ({}) => {
  return (
    <Image
      src="/profile-picture.png"
      width={400}
      height={400}
      alt="Goudham smiling at the camera"
      className="motion-safe:hover:animate-spin w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
      quality={100}
      priority={true}
    />
  );
};
