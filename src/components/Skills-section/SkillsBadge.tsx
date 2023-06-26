import { ReactNode } from "react";
import { BadgeWrapper } from "../../styles/styles-Skills-section/styles-SkillsBadge";

interface Props {
  children: ReactNode;
  badgeLabel: string;
}

export const SkillsBadge = ({ children, badgeLabel }: Props) => {
  return (
    <BadgeWrapper>
      {children}
      <h2>{badgeLabel}</h2>
    </BadgeWrapper>
  );
};
