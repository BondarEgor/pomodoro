import type { CSSProperties, FC, ReactNode } from "react";
import s from "./styles.module.css";
import cn from "classnames";

type Props = Pick<
  CSSProperties,
  "flex" | "alignItems" | "justifyContent" | "gap"
> & {
  children: ReactNode;
  className?: string;
};

export const Col: FC<Props> = ({
  gap,
  justifyContent,
  alignItems,
  flex,
  className,
  children,
}) => {
  return (
    <div
      style={{ gap, alignItems, justifyContent, flex }}
      className={cn(s.col, className)}
    >
      {children}
    </div>
  );
};
