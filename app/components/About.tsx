export const About = () => {
  return (
    <div className="flex flex-col mx-3 gap-3 text-center text-md lg:text-lg xl:text-xl">
      <p>
        I am a{" "}
        <span className="underline font-semibold decoration-green decoration-2">
          {" "}
          software engineer
        </span>{" "}
        at the BBC and a{" "}
        <span className="underline font-semibold decoration-red decoration-2">
          student
        </span>
        , currently pursuing a BSc in Software Engineering at the University of
        Glasgow.
      </p>
      <p>
        You&apos;ll usually find me nerding out about technology and playing
        video games. I also really enjoy contributing to open source projects,
        mainly{" "}
        <span className="underline font-semibold decoration-peach decoration-2">
          Catppuccin
        </span>
        .
      </p>
    </div>
  );
};
