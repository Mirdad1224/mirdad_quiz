import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Box textAlign="center" mt={5}>
          {router}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
