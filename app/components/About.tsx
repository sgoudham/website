import { FancyUnderline, GroupedText, Text } from "./utils/Text";

export const About = () => {
  return (
    <GroupedText className="text-center">
      <Text>
        I am a{" "}
        <FancyUnderline decoration="decoration-green">
          software engineer
        </FancyUnderline>{" "}
        at the BBC and a{" "}
        <FancyUnderline decoration="decoration-red">student</FancyUnderline>,
        currently pursuing a BSc in Software Engineering at the University of
        Glasgow.
      </Text>
      <Text>
        You&apos;ll usually find me nerding out about technology and playing
        video games. I also really enjoy contributing to open source projects,
        mainly{" "}
        <FancyUnderline decoration="decoration-peach">
          Catppuccin
        </FancyUnderline>
        .
      </Text>
    </GroupedText>
  );
};
