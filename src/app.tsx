import "./index.css";
import s from "./app.module.css";
import "./index.css";
import "./styles/fonts.css";
import { RadialRange } from "./components/timer/ui/radial-range";

function App() {
  return (
    <div className={s.container}>
      <RadialRange />
    </div>
  );
}

export default App;
