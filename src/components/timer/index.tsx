import { useTimer } from "./use-timer";
import s from "./styles.module.css";
import { Col } from "@shared/col";
import { Row } from "@shared/row";

export const Timer = ({ value }: { value: number }) => {
  const { handlePauseTimer, timer, handleResetTimer, handleStartTimer } =
    useTimer(value);

  return (
    <Col gap={8} flex={1} alignItems="center" justifyItems="center">
      <span className={s.timer}>{timer.toFixed(0)}</span>
      <Row>
        <button onClick={handleStartTimer}>Start</button>
        <button onClick={handlePauseTimer}>Stop</button>
        <button onClick={handleResetTimer}>Reset</button>
      </Row>
    </Col>
  );
};
