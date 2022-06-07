import {
  createTheme,
  FormControlLabel,
  Paper,
  Switch,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sign from "./components/Sign";
import SignUp from "./components/signup";
import Welcome from "./components/welcome";

function App() {
  const [isDark, setIsDark] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: !isDark ? "light" : "dark",
    },
  });
  const t = useTheme();
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Paper className="App">
          <FormControlLabel
            control={<Switch onChange={() => setIsDark(!isDark)} />}
            label={"DarkMode"}
            sx={{ position: "absolute", top: 3, right: 3 }}
          />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signIn" element={<Sign />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
