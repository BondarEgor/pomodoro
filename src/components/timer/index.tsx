import s from "./styles.module.css";
import cn from "classnames";

export const Timer = ({
  isRunning,
  value,
}: {
  isRunning: boolean;
  value: string;
}) => {
  return <span className={cn(s.timer, isRunning && s.running)}>{value}</span>;
};
