import { FC } from "react";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeProvider";
import "./general.css";

const App: FC = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

export default App;
