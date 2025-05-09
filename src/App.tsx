import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </ThemeProvider>
      <Analytics />
    </div>
  );
}

export default App;
