import {
  Author,
  FlexWrapper,
  FooterIconWrapper,
  FooterTitle,
  FooterWrapper,
  Hr,
} from "../styles/styles-Footer";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MediaLink } from "../styles/styles-Project-section/styles-ProjectBlock";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FlexWrapper>
        <div>
          <FooterTitle>JA</FooterTitle>
          <Hr />
          <Author>&copy;2023 Justin Alexander</Author>
        </div>
        <FooterIconWrapper>
          <MediaLink target="_blank" href="https://github.com/im7ven">
            <FaGithubSquare size="40px" color="#fff" />
          </MediaLink>
          <MediaLink
            target="_blank"
            href="https://www.linkedin.com/in/justin-alexander-27542522b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDOInxybgSGinmrWfEzpVRA%3D%3D"
          >
            <FaLinkedin size="40px" color="#fff" />
          </MediaLink>
          <MediaLink target="_blank" href="mailto:alexanderrr416@gmail.com">
            <IoMail size="40px" color="#fff" />
          </MediaLink>
        </FooterIconWrapper>
      </FlexWrapper>
    </FooterWrapper>
  );
};
