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
      <p
        style={{
          margin: "1rem  0 0 0",

          letterSpacing: ".8rem",
        }}
      >
        {badgeLabel}
      </p>
    </BadgeWrapper>
  );
};
