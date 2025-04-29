import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import { AppRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
