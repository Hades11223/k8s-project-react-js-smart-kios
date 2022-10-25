import React, { useState } from "react";
import Container from "@src/components/Container";
import "./styles.scss";
const DetailConSultation = (props) => {
  console.log("props: ", props);
  const [item, setItem] = useState(props.location.state.item);
  return (
    <Container title={item.name} classApp="app-consultation">
      <div className="container-consultation">
        <ul
          className="container-content"
          style={{ backgroundImage: "url(" + item.images + ")" }}
        ></ul>
      </div>
    </Container>
  );
};

export default DetailConSultation;
