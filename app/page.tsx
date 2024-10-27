import { Header } from "./components/Header";
import { StyledLink } from "./components/utils/StyledLink";
import { Text } from "./components/utils/Text";
import { GroupedText, FancyUnderline } from "./components/utils/Text";
import { ProfilePicture } from "./components/images/ProfilePicture";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="self-center">
        <ProfilePicture />
      </div>
      <div className="self-center max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col space-y-10">
        <Header />
        <GroupedText className="text-center">
          <Text>
            I am a{" "}
            <FancyUnderline className="font-semibold" decoration="decoration-peach">
              Software Engineer at the BBC
            </FancyUnderline>.{" "}
            I obtained my degree while working full-time, you can learn
            more about that by visiting{" \""}
            <StyledLink
              href={"https://www.gla.ac.uk/schools/computing/undergraduate/graduateapprenticeships/"}>
              Graduate Apprenticeships - University of Glasgow
            </StyledLink>.&quot;
          </Text>
          <Text>
            You&apos;ll usually find me nerding out about technology and playing
            video games. Contributing to open-source is a big passion of mine and
            I&apos;m grateful to be a{" "}
            <FancyUnderline className="font-semibold" decoration="decoration-peach">
              Core Maintainer for Catppuccin
            </FancyUnderline>
            . When I&apos;m not staring at a screen, I love taking my Canon EOS R50 out for a spin and capturing my friends and the world around me.
          </Text>
          <Text>
            Eventually, I&apos;d like to turn this website into a place where I can share my thoughts, projects, and photographs with everyone. Hopefully sometime soon<span className="text-blue font-bold">™</span>
          </Text>
          <Text>
            <span className="text-red font-bold">~~~</span>
          </Text>
        </GroupedText>
      </div>
      <Footer />
    </div>
  );
}
