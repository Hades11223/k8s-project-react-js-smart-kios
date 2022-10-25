import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import images from "@src/resources/images";
import Container from "@src/components/Container";
import Modal from "@material-ui/core/Modal";
import { playSound } from "@utils/sound-utils";
import axios from "axios";
const Home = (props) => {
  const [data, setData] = useState([
    // {
    //     id: 1,
    //     name: 'Lấy số tiếp đón',
    //     icon: images.home.ic_get_ticket,
    //     path: '/lay-so-tiep-don'
    // },

    {
      id: 1,
      name: "Sơ đồ bệnh viện, tìm vị trí",
      icon: images.home.ic_location,
      path: "/tim-vi-tri",
      showPopup: true,
    },
    {
      id: 2,
      name: "Tra cứu giá dịch vụ",
      icon: images.home.ic_search_service,
      path: "/tra-cuu-gia-dich-vu",
    },
    {
      id: 3,
      name: "Hướng dẫn đặt khám online",
      icon: images.home.ic_card,
      path: "/huong-dan-dat-kham-online",
    },
    // {
    //     id: 3,
    //     name: 'Khảo sát mức độ hài lòng của NB',
    //     icon: images.home.ic_smile

    // },

    {
      id: 4,
      name: "Xem Y bạ điện tử",
      icon: images.home.ic_ehealth,
      path: "/xac-thuc-thong-tin",
    },
    {
      id: 5,
      name: "Quy trình khám bệnh",
      icon: images.home.ic_people,
      path: "/tu-van",
    },
    // {
    //     id: 9,
    //     name: 'Thời gian làm việc của bệnh viện',
    //     icon: images.home.ic_time,
    //     path: '/thoi-gian-lam-viec'
    // },
    {
      id: 6,
      name: "Khảo sát mức độ hài lòng của người bệnh",
      icon: images.home.ic_smile,
      path: "/muc-do-hai-long",
    },
  ]);

  const [isShow, setIsShow] = useState(false);
  const [path, setPath] = useState("");
  const selectItem = (e) => () => {
    playSound();
    if (e.showPopup) {
      setPath(e.path);
      setIsShow(true);
      return;
    }
    props.history.push(e.path);
  };
  const hideModal = () => {
    setIsShow(false);
  };
  const goToDetail = (e) => () => {
    playSound();
    if (e) props.history.push(path);
    else props.history.push("/so-do-benh-vien");
  };

  return (
    <Container classApp="home-display" hideBackButton={true}>
      <div className="container-home">
        <div className="row">
          <ul className="list-home">
            {data.map((e, i) => {
              return (
                <li key={i} className="item-home color-gradient">
                  <div onClick={selectItem(e)} className="container-icon">
                    <img src={e.icon} className="icon-home" />
                  </div>
                  <div className="line-item" />
                  <div onClick={selectItem(e)} className="container-name">
                    {e.name}
                  </div>
                </li>
              );
            })}
          </ul>
          {/* <img src={images.home.im_logo_home} className="img-logo-home" /> */}
        </div>
        {isShow ? (
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isShow}
            className="modal-container"
            onClose={hideModal}
          >
            <div className="modal-content">
              <p>Bạn muốn xem?</p>
              <button
                onClick={goToDetail(false)}
                className="button-modal color-gradient"
              >
                Xem sơ đồ bệnh viện
              </button>
              <button
                onClick={goToDetail(true)}
                className="button-modal color-gradient"
              >
                Tìm vị trí, chỉ đường
              </button>
            </div>
          </Modal>
        ) : null}
        <div className="container-time">
          <div className="container-time-sheet">
            <div>
              <p className="txt-label-time-sheet">Giờ làm việc</p>
            </div>
            <div>
              <p className="txt-time-sheet">Từ thứ 2 - thứ 7</p>
              <p>Sáng: 7h00 - 11h00</p>
              <p>Chiều: 13h30 - 16h30</p>
            </div>
            {/* <div>
              <p className="txt-time-sheet">Thứ 7</p>
              <p>Sáng: 7h00 - 11h00</p>
              <p>Chiều: 13h30 - 16h30</p>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
