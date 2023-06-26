import {
  FeatureDescription,
  FeatureHeading,
  FeatureIcon,
  FeatureWrapper,
} from "../../styles/styles-Skills-section/styles-SkillsFeature";

interface Props {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  children: string;
}

export const SkillsFeature = ({
  imageSrc,
  imageAlt,
  heading,
  children,
}: Props) => {
  return (
    <FeatureWrapper>
      <FeatureIcon src={imageSrc} alt={imageAlt} />
      <div>
        <FeatureHeading>{heading}</FeatureHeading>
        <FeatureDescription>{children}</FeatureDescription>
      </div>
    </FeatureWrapper>
  );
};
