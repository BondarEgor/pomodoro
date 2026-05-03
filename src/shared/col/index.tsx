import type { CSSProperties, FC, ReactNode } from "react";
import s from "./styles.module.css";

type Props = Pick<
  CSSProperties,
  "flex" | "alignItems" | "justifyItems" | "gap"
> & {
  children: ReactNode;
};

export const Col: FC<Props> = ({
  gap,
  justifyItems,
  alignItems,
  flex,
  children,
}) => {
  return (
    <div style={{ gap, alignItems, justifyItems, flex }} className={s.col}>
      {children}
    </div>
  );
};
