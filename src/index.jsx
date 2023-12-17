import { createRoot } from "react-dom/client";
import Container from "react-bootstrap/Container";
import { MainView } from "./components/main-view/main-view";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const FlixLinkApp = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<FlixLinkApp />);
