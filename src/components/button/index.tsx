import s from "./button.module.css";
import cn from "classnames";

type Props = {
  text: string;
  active?: boolean;
  onClick: () => void;
};

export const Button = ({ active, onClick, text }: Props) => {
  return (
    <button onClick={onClick} className={cn(s.container, active && s.active)}>
      <span className={s.text}>{text}</span>
    </button>
  );
};
