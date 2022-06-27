import {
  createTheme,
  FormControlLabel,
  Paper,
  Switch,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Admin } from "./components/admin-page/Admin";
import { Customer } from "./components/customer-page/Customer";
import { Engineer } from "./components/engineer-page/Engineer";
import Sign from "./components/signin-page/Sign";
import SignUp from "./components/signup-page/signup";
import Unauthorized from "./components/common-components/unauthorized";
import Welcome from "./components/common-components/welcome";
import store from "./reduxSetup/Store";
import { AuthorizedRoute } from "./utils/authorizedRoute";
function App() {
  const [isDark, setIsDark] = useState(
    Boolean(sessionStorage.getItem("isDark"))
  );
  const darkTheme = createTheme({
    palette: {
      mode: !isDark ? "light" : "dark",
    },
  });
  const t = useTheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Paper className="App">
            <FormControlLabel
              control={
                <Switch
                  defaultChecked={isDark}
                  onChange={() => {
                    setIsDark(!isDark);
                    sessionStorage.getItem("isDark")
                      ? sessionStorage.removeItem("isDark")
                      : sessionStorage.setItem("isDark", true);
                  }}
                />
              }
              label={"DarkMode"}
              sx={{ position: "absolute", top: 3, right: 3 }}
            />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/signIn" element={<Sign />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route element={<AuthorizedRoute role={"CUSTOMER"} />}>
                <Route path="/customer" element={<Customer />} />
              </Route>
              <Route element={<AuthorizedRoute role={"ENGINEER"} />}>
                <Route path="/engineer" element={<Engineer />} />
              </Route>
              <Route element={<AuthorizedRoute role={"ADMIN"} />}>
                <Route path="/admin" element={<Admin />} />
              </Route>
            </Routes>
          </Paper>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
