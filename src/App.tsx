import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Views/Header";
import Login from "./Views/Login";
import { useState, useEffect, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./Components/Theme"; // Import themes
import { ChangeEventHandler } from "react";
import { useTheme } from "@mui/material";
import Dashboard from "./Views/Dashboard";
import ServiceLogViewer from "./Views/ServiceLogViewer";
import DarkMode from "./Components/DarkMode";
import ServiceProvider from "./Components/ServiceProvider";
import SelectedServiceProvider from "./Components/SelectedServiceProvider";
import { WebSocketProvider } from "./Components/WebSocketProvider";
import { TokenContext } from "./context/TokenContext";

// Private route component
const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
  const { isAuthenticated } = useContext(TokenContext);
  return isAuthenticated ? children : <Navigate to={"/login"} replace/>;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme from localStorage (if any) on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("Theme changed:", isDarkMode ? "Dark Mode" : "Light Mode");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [isDarkMode]);

  // Function to toggle between light and dark modes
  const themeToggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      console.log("Dark mode changed");
      const newTheme = "dark";
      setIsDarkMode(true);
      localStorage.setItem("theme", newTheme); // Save user preference in localStorage
    } else {
      const newTheme = "light";
      setIsDarkMode(false);
      localStorage.setItem("theme", newTheme); // Save user preference in localStorage
    }
  };
  const theme = useTheme();
  const styles = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={styles} className="App">
        <BrowserRouter>
          <header className="App-header">
            <Header />
          </header>
          <ServiceProvider>
            <SelectedServiceProvider>
              <WebSocketProvider>
                <main className="App-main">
                  <Routes>
                    <Route path="/" element={<Navigate to={"/home"} />} />
                    <Route
                      path="/home"
                      element={
                        <PrivateRoute>
                          <Dashboard />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/dashboard"
                      element={
                        <PrivateRoute>
                          <Dashboard />
                        </PrivateRoute>
                      }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route
                      path="/logviewer"
                      element={
                        <PrivateRoute>
                          <ServiceLogViewer />
                        </PrivateRoute>
                      }
                    />
                  </Routes>
                </main>
              </WebSocketProvider>
            </SelectedServiceProvider>
          </ServiceProvider>
          <footer style={styles} className="App-footer">
            <DarkMode themeToggle={themeToggle} />
          </footer>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
