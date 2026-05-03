import type { CSSProperties, FC, ReactNode } from "react";
import s from "./styles.module.css";
import cn from "classnames";
type Props = Pick<
  CSSProperties,
  "flex" | "alignItems" | "justifyItems" | "gap"
> & {
  children: ReactNode;
  className?: string;
};

export const Row: FC<Props> = ({
  gap,
  justifyItems,
  alignItems,
  flex,
  children,
  className,
}) => {
  return (
    <div
      style={{ gap, alignItems, justifyItems, flex }}
      className={cn(s.row, className)}
    >
      {children}
    </div>
  );
};
