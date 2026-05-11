import s from "./button.module.css";

type Props = {
  text: string;
  onClick: () => void;
};

export const Button = ({ onClick, text }: Props) => {
  return (
    <button onClick={onClick} className={s.container}>
      <span className={s.text}>{text}</span>
    </button>
  );
};
