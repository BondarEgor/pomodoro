import { Row } from "@shared/row";
import { Quote } from "../quote";
import s from "./header.module.css";

export const Header = () => {
  return (
    <header className={s.container}>
      <Row flex={1} justifyContent='space-between'>
        <div></div>
        <Quote />
      </Row>
    </header>
  );
};
