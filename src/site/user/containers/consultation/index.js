import React, { useState } from "react";
import Container from "@src/components/Container";
import "./styles.scss";
import { playSound } from "@utils/sound-utils";
import images from "@src/resources/images";
const Consultation = (props) => {
  const [data, setData] = useState([
    // {
    //     name:'Tư vấn khám theo triệu chứng'
    // },
    {
      name: "Quy trình khám BHYT",
      path: "/chi-tiet-tu-van",
      content: [
        "1. Lấy số thứ tự",
        "2. Đăng ký khám bệnh",
        "3. Bác sỹ khám bệnh",
        "4. Người bệnh làm các xét nghiệm cận lâm sàng- chẩn đoán hình ảnh (nếu có)",
        "5. Bác sỹ kết luận",
        "6. Giám định BHYT, nộp tiền phần trăm",
        "7. Lĩnh thuốc điều trị ngoại trú hoặc làm bệnh án vào viện.",
      ],
      images: images.consultation.quytrinhkhambhyt,
    },
    {
      name: "Quy trình khám không BHYT",
      path: "/chi-tiet-tu-van",
      content: [
        "1. Lấy số thứ tự",
        "2. Đăng ký khám bệnh",
        "3. Làm xét nghiệm - chẩn đoán hình ảnh (nếu có)",
        "4. Bác sĩ kết luận",
        "5. Lĩnh thuốc điều trị ngoại trú hoặc làm bệnh  án nội trú.",
      ],
      images: images.consultation.quytrinhkhamkhongbhyt,
    },
    {
      name: "Giấy tờ cần thiết khi đi khám",
      path: "/chi-tiet-tu-van",
      content: [
        "1. Chứng minh thư",
        "2. Thẻ BHYT ",
        "3. Giấy chuyển tuyến (nếu có)",
        "4. Sổ khám bệnh và giấy xuất viện (nếu có)",
        "5. Giấy hẹn tái khám (nếu có)",
        "6. Giấy tờ liên quan đến thông tin khám bệnh",
      ],
      images: images.consultation.giaytocanthiet,
    },
  ]);
  const selectItem = (e) => () => {
    playSound();
    props.history.push(e.path, { item: e });
  };
  return (
    <Container title="Quy trình khám bệnh">
      <div className="container-list-consultation">
        <ul className="list-consultation">
          {data.map((e, i) => {
            return (
              <li onClick={selectItem(e)} key={i} className="item-consultation">
                <div className="color-gradient container-name">{e.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Consultation;
