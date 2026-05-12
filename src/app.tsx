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
    mode,
    handleSetClassic,
    handleSetDeep,
    handleSetShort,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
  } = useTimer();

  const modeBtnsConfig = [
    { text: "Classic", onClick: handleSetClassic, id: "classic" },
    { text: "Deep", onClick: handleSetDeep, id: "deep" },
    { text: "Short", onClick: handleSetShort, id: "short" },
  ];

  const actionBtnsConfig = [
    { text: "Start", onClick: handleStartTimer },
    { text: "Pause", onClick: handlePauseTimer },
    { text: "Reset", onClick: handleResetTimer },
  ];

  return (
    <Col flex={1}>
      <Header />

      <Col justifyContent="center" alignItems="center" flex={1}>
        <Row gap={10}>
          {modeBtnsConfig.map(({ id, ...btnProps }) => (
            <Button {...btnProps} active={id === mode} />
          ))}
        </Row>
        <Timer value={time} isRunning={isRunning} />

        <Row gap={10}>{actionBtnsConfig.map(Button)}</Row>
      </Col>
    </Col>
  );
}

export default App;
