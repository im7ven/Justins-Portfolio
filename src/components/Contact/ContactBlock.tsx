import {
  ContactDescription,
  ContactGridWrapper,
  ContactHeading,
  ContactWrapper,
  DescriptionHeading,
  HeadingIconFlex,
} from "../../styles/styles-Contact/styles-ContactBlock";
import { AiFillWechat } from "react-icons/ai";
import { ContactForm } from "./ContactForm";

export const ContactBlock = () => {
  return (
    <ContactWrapper>
      <ContactHeading>Contact</ContactHeading>
      <ContactGridWrapper>
        <div>
          <HeadingIconFlex>
            <DescriptionHeading>Lets connect</DescriptionHeading>
            <AiFillWechat size="45px" color="#fff" />
          </HeadingIconFlex>
          <ContactDescription>
            Let's collaborate and create something amazing together! I'm
            passionate about working with others, whether it's taking on
            exciting new projects, brainstorming innovative ideas, or simply
            having a chat about all things code. I am open to collaborations
            with fellow developers, designers, and tech enthusiasts. Feel free
            to reach out, and let's bring our ideas to life!
          </ContactDescription>
        </div>
        <ContactForm />
      </ContactGridWrapper>
    </ContactWrapper>
  );
};
