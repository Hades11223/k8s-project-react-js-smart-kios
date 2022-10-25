import React, { useState } from "react";
import "./styles.scss";
import images from "@src/resources/images";
import Container from "@src/components/Container";
const DetailHospital = (props) => {
  const item = props.location.state.item;
  const [detail, setDetail] = useState(item);
  return (
    <Container title="Chỉ đường">
      <div className="container-address">
        <div className="content-address">
          <div className="address-header">
            <img src={images.address.icon_ques} alt="" />
            <div className="address-header-inner">
              <p className="address-item-1">{detail.name}</p>
              <p>{detail.address ? "( " + detail.address + " )" : ""}</p>
            </div>
          </div>
          <div
            className="address-content"
            dangerouslySetInnerHTML={{ __html: detail.detail }}
          ></div>
        </div>
        <div className="content-detail image-address">
          <img src={detail.images} className="image-address" />
        </div>
      </div>
    </Container>
  );
};

export default DetailHospital;
