import "./index.css";
import "./index.css";
import "./styles/fonts.css";
import { Timer } from "./components/timer";
import { useTimer } from "./components/timer/use-timer";
import { Row } from "@shared/row";
import { Col } from "@shared/col";
import { Header } from "./components/header";
import { Button } from "./components/button";

function App() {
  const {
    time,
    isRunning,
    handleSetClassic,
    handleSetDeep,
    handleSetShort,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
  } = useTimer();

  return (
    <Col flex={1}>
      <Header />

      <Col justifyContent="center" alignItems="center" flex={1}>
        <Row gap={10}>
          <Button onClick={handleSetClassic} text={"Classic"} />
          <Button onClick={handleSetDeep} text={"Deep"} />
          <Button onClick={handleSetShort} text={"Short"} />
        </Row>
        <Timer value={time} isRunning={isRunning} />

        <Row gap={10}>
          <Button onClick={handleStartTimer} text={"Start"} />
          <Button onClick={handlePauseTimer} text={"Pause"} />
          <Button onClick={handleResetTimer} text={"Reset"} />
        </Row>
      </Col>
    </Col>
  );
}

export default App;
