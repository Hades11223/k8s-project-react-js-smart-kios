import React, { useState, useEffect } from "react";
import Container from "@components/Container";
import images from "@src/resources/images";
import "./styles.scss";
import ListService from "@src/components/ehealth/ListService";
import AnatomicalResult from "@src/components/ehealth/AnatomicalResult";
import Drug from "@src/components/ehealth/Drug";
import ImageResult from "@src/components/ehealth/ImageResult";
import TestResult from "@src/components/ehealth/TestResult";
import Result from "@src/components/ehealth/Result";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
const DetailEhealth = (props) => {
  const [data, setData] = useState([
    {
      name: "Thông tin khám bệnh",
      id: "#list-service",
      icon: images.ehealth.ic_service,
    },
    {
      name: "Kết quả khám",
      id: "#result",
      icon: images.ehealth.ic_result,
    },
    {
      name: "Kết quả xét nghiệm",
      id: "#test-result",
      icon: images.ehealth.ic_image_result,
    },
    {
      name: "Kết quả cận lâm sàng",
      id: "#image-result",
      icon: images.ehealth.ic_diagnostic,
    },
    {
      name: "Kết quả giải phẫu",
      id: "#anatomical-result",
      icon: images.ehealth.ic_anatomy,
    },
    {
      name: "Thuốc",
      id: "#drug",
      icon: images.ehealth.ic_drug,
    },
  ]);
  // const [detail, setDetail] = useState(props.location.state.detail.data)
  const [item, setItem] = useState(props.location.state.item);

  const tabSelected = (cityName) => (evt) => {
    var i, x, tablinks;
    x = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-select", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " tab-select";
  };
  useEffect(() => {
    let el = document.getElementById("tabs-swipe-demo");
    // M.Tabs.init(el, { swipeable: true });
    M.Tabs.init(el);
  }, []);
  const renderButton = () => {
    return (
      <ul id="tabs-swipe-demo" className="tabs container-tab-ehealth ">
        {data.map((e, i) => {
          return (
            <li class="tab">
              <a className="content-label" href={e.id}>
                <img className="icon" src={e.icon} />
                <span className="about">{e.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  let Birthday = new Date(item.birthday);
  return (
    <Container title="Y bạ điện tử">
      <div className="detail-ehealth">
        <div className="container-detail-ehealth">
          {renderButton()}
          <div className="container-profile">
            <img src={images.ic_user} className="img-profile" />
            <div className="profile">
              <span className="patient-name">
                {item.patientName} ({Birthday.format("dd/MM/yyyy")})
              </span>{" "}
              <br />
              <span className="date-booking">
                Ngày khám: {new Date(item.createdAt).format("dd/MM/yyyy")}
              </span>
            </div>
          </div>
          <div className="group-content-tab">
            <ListService item={item} />
            <Result item={item} />
            <TestResult item={item} />
            <ImageResult item={item.diagnosticImages} />
            <AnatomicalResult item={item} />
            <Drug item={item} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailEhealth;
