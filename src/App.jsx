import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Container, Button } from "react-bootstrap";
import ScrollModal1 from "./components/ScrollModal1/";
import ScrollModal2 from "./components/ScrollModal2";

export default function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-around vh-100">
        <Button
          onClick={() => { setModal1(true) }}
        >
          普通にサイズ変更する場合
        </Button>
        <Button
          onClick={() => { setModal2(true) }}
        >
          scaleでサイズ変更する場合
        </Button>
      </Container>
      <ScrollModal1 modal={modal1} setModal={setModal1} />
      <ScrollModal2 modal={modal2} setModal={setModal2} />
    </>
  );
}
