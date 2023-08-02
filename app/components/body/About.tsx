export const About = () => {
  return (
    <div className="flex flex-col mx-3 gap-3 text-center">
      <p>
        I am a{" "}
        <strong className="underline decoration-green decoration-2">
          {" "}
          software engineer
        </strong>{" "}
        at the BBC and a{" "}
        <strong className="underline decoration-red decoration-2">
          student
        </strong>
        , currently pursuing a BSc in Software Engineering at the University of
        Glasgow.
      </p>
      <p>
        You&apos;ll usually find me nerding out about technology and playing
        video games. I also really enjoy contributing to open source software,
        especially <strong className="underline decoration-peach decoration-2">Catppuccin</strong>.
      </p>
    </div>
  );
};
