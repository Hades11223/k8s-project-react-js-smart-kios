import React, { useState } from "react";
import Container from "@src/components/Container";
import userProvider from "@src/data-access/user-provider";
import { toast } from "react-toastify";
import { Row, Col } from "reactstrap";
import stringUltil from "mainam-react-native-string-utils";
import { TextBox } from "@components/InputField/InputField";
import dataSatisfied from "./dataSatisfied.json";
import "./styles.scss";
const AboutSatisfied = (props) => {
  const [state, _setState] = useState({
    hospitalName: "Bệnh viện iSofH",
  });
  const data = dataSatisfied.data;
  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };
  const onSubmit = (event) => {
    let {
      gender,
      hospitalName,
      age,
      telephone,
      scope,
      yesNo,
      a1,
      a2,
      a3,
      a4,
      a5,
      b1,
      b2,
      b3,
      b4,
      b5,
      b6,
      b7,
      b8,
      b9,
      b10,
      c1,
      c2,
      c3,
      c4,
      c5,
      c6,
      c7,
      c8,
      d1,
      d2,
      d3,
      d4,
      e1,
      e2,
      e3,
      e4,
      hospitalAssessment,
      backHospital,
      reason,
    } = state;
    if (!gender) {
      toast.error("Vui lòng chọn giới tính", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (!age) {
      toast.error("Vui lòng nhập tuổi", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (!telephone) {
      toast.error("Vui lòng nhập số điện thoại", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (!hospitalAssessment) {
      toast.error("Vui lòng đánh giá sự mong đợi", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (telephone.length < 10) {
      toast.error("Vui lòng nhập đủ số điện thoại", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    let params = {
      gender,
      hospitalName,
      age,
      telephone,
      scope,
      yesNo,
      a1,
      a2,
      a3,
      a4,
      a5,
      b1,
      b2,
      b3,
      b4,
      b5,
      b6,
      b7,
      b8,
      b9,
      b10,
      c1,
      c2,
      c3,
      c4,
      c5,
      c6,
      c7,
      c8,
      d1,
      d2,
      d3,
      d4,
      e1,
      e2,
      e3,
      e4,
      hospitalAssessment,
      backHospital,
      reason,
    };
    userProvider.userSatisfied(params).then((s) => {
      if (s && s.code === 0) {
        toast.success("Thêm ý kiến khảo sát thành công", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(function () {
          onReset();
        }, 500);
      } else if (s.code === 1000) {
        toast.error("Bạn cần điền đầy đủ thông tin", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Thêm ý kiến khảo sát không thành công", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };
  const onReset = () => {
    window.location.reload();
  };
  const onChangeValue = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };
  const onCheckphone = (e) => {
    let valueTelephone = e.target.value
    if (valueTelephone.length >= 10 && !valueTelephone.isPhoneNumber()) {
      toast.error("Vui lòng nhập đúng định dạng số điện thoại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } 
  };
  return (
    <Container classApp="about-satisfied" title="Phiếu khảo sát ý kiến người bệnh">
      <div className="container-form">
        <div className="title-form">
          {/* <p>PHIẾU KHẢO SÁT Ý KIẾN NGƯỜI BỆNH NGOẠI TRÚ</p> */}
          <p>
            Bộ câu hỏi dựa theo: Quyết định 3869/QĐ-BYT 2019 về khảo sát hài
            lòng Người bệnh và Nhân viên y tế.
          </p>
          <p className="custome-padd">
            Nhằm mục tiêu nâng cao chất lượng khám, chữa bệnh, đáp ứng sự hài
            lòng người bệnh, Bộ Y tế và bệnh viện tổ chức khảo sát để tìm hiểu
            nguyện vọng người bệnh. Các ý kiến quý báu này sẽ giúp ngành y tế
            khắc phục khó khăn, từng bước cải tiến chất lượng để phục vụ người
            dân tốt hơn. Bộ Y tế bảo đảm giữ bí mật thông tin và không ảnh hưởng
            đến việc điều trị. Xin trân trọng cảm ơn!
          </p>
        </div>
        <div className="info-form">
          <div className="head-info-form">
            <Row>
              <Col lg="6">
                <TextBox
                  styleInput={{ fontWeight: 600 }}
                  label="1. Tên bệnh viện"
                  type="text"
                  placeholder="………………………………………………………………."
                  value={state.hospitalName}
                  readOnly
                />
              </Col>
              <Col lg="6">
                <TextBox
                  styleInput={{ fontWeight: 600 }}
                  label="2. Ngày điền phiếu"
                  type="text"
                  placeholder="………………………………………………………………."
                  value={new Date().format("dd/MM/YYYY")}
                  readOnly
                />
              </Col>
            </Row>
          </div>
          <div className="form-info">
            <p className="title-info-form">THÔNG TIN NGƯỜI BỆNH</p>
            <div className="user-info-inner">
              <Row>
                <Col lg="6">
                  <label>A1. Giới tính</label>
                  <div className="user-info-radio">
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="gender"
                        value="1"
                        onClick={(e) => onChangeValue(e)}
                      />
                      <span className="checkmark">Nam</span>
                    </label>
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="gender"
                        value="2"
                        onClick={(e) => onChangeValue(e)}
                      />
                      <span className="checkmark"> Nữ</span>
                    </label>
                  </div>
                </Col>
                <Col lg="6">
                  <TextBox
                    label="A2. Tuổi"
                    type="number"
                    name="age"
                    placeholder="Nhập tuổi"
                    value={state.age}
                    onChangeValue={(e) => {
                      onChangeValue(e);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <TextBox
                    label="A3. Số di động"
                    type="number"
                    name="telephone"
                    placeholder="Nhập số di động"
                    value={state.telephone}
                    onChangeValue={(e) => {
                      onChangeValue(e);
                      onCheckphone(e);
                    }}
                  />
                </Col>
                <Col lg="6">
                  <TextBox
                    label="A4. Ước tính khoảng cách từ nơi sinh sống đến bệnh viện (km)"
                    type="number"
                    name="scope"
                    placeholder="Nhập khoảng cách"
                    value={state.scope}
                    onChangeValue={(e) => {
                      onChangeValue(e);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <label>
                    A5. Ông/Bà có sử dụng thẻ BHYT cho lần điều trị này không?
                  </label>
                  <div className="user-info-radio">
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="yesNo"
                        value="1"
                        onClick={(event) => {
                          onChangeValue(event);
                        }}
                      />
                      <span className="checkmark">Có</span>
                    </label>
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="yesNo"
                        value="0"
                        onClick={(event) => {
                          onChangeValue(event);
                        }}
                      />
                      <span className="checkmark">Không</span>
                    </label>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="form-info">
          <p className="title-info-form">ĐÁNH GIÁ VIỆC SỬ DỤNG DỊCH VỤ Y TẾ</p>
          <div className="user-info-inner">
            <p>
              <b>
                Ông/Bà đánh dấu gạch chéo vào một số từ 1 đến 5, tương ứng với
                mức độ hài lòng hoặc nhận xét từ rất kém đến rất tốt cho từng
                câu hỏi dưới đây:
              </b>
            </p>
            <ul className="list-evaluate">
              <li>
                <span>1</span> <br />
                Rất không hài lòng <br /> <i>hoặc:</i> Rất kém
              </li>
              <li>
                <span>2</span> <br />
                Không hài lòng <br /> <i>hoặc:</i> Kém
              </li>
              <li>
                <span>3</span> <br />
                Bình thường <br /> <i>hoặc:</i> Trung bình
              </li>
              <li>
                <span>4</span> <br />
                Hài lòng <br /> <i>hoặc:</i> Tốt
              </li>
              <li>
                <span>5</span> <br />
                Rất hài lòng <br /> <i>hoặc:</i> Rất tốt
              </li>
            </ul>
          </div>
        </div>
        <div className="evaluate">
          <table className="tbl-eval">
            {data &&
              data.length &&
              data.map((item, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td colSpan="4" className="title-table-eval">
                        {item.title}
                      </td>
                    </tr>
                    {item.data && item.data.length
                      ? item.data.map((item1, index1) => {
                        return (
                          <tr key={index1}>
                            <td style={{ width: "7%" }}>{item1.code}</td>
                            <td style={{ width: "68%" }} colSpan="2">
                              {item1.content}
                            </td>
                            <td style={{ width: "25%" }}>
                              <div className="display-radio">
                                <label className="containerCheck">
                                  <input
                                    type="radio"
                                    name={item1.name}
                                    value="1"
                                    onClick={(e) => onChangeValue(e)}
                                  />
                                  <span className="checkmark">1</span>
                                </label>
                                <label className="containerCheck">
                                  <input
                                    type="radio"
                                    name={item1.name}
                                    value="2"
                                    onClick={(e) => onChangeValue(e)}
                                  />
                                  <span className="checkmark">2</span>
                                </label>
                                <label className="containerCheck">
                                  <input
                                    type="radio"
                                    name={item1.name}
                                    value="3"
                                    onClick={(e) => onChangeValue(e)}
                                  />
                                  <span className="checkmark">3</span>
                                </label>
                                <label className="containerCheck">
                                  <input
                                    type="radio"
                                    name={item1.name}
                                    value="4"
                                    onClick={(e) => onChangeValue(e)}
                                  />
                                  <span className="checkmark">4</span>
                                </label>
                                <label className="containerCheck">
                                  <input
                                    type="radio"
                                    name={item1.name}
                                    value="5"
                                    onClick={(e) => onChangeValue(e)}
                                  />
                                  <span className="checkmark">5</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                      : ""}
                  </tbody>
                );
              })}
            <tbody>
              <tr>
                <td>F</td>
                <td colSpan="2">
                  Đánh giá chung bệnh viện đã đáp ứng được bao nhiêu % so với
                  mong đợi trước khi tới khám bệnh?
                  <br />
                  <span style={{ fontWeight: 400, color: "#999999" }}>
                    <i>
                      (điền số từ 0% đến 100% hoặc có thể điền trên 100% nếu
                      bệnh viện điều trị tốt, vượt quá mong đợi của Ông/Bà)
                    </i>
                  </span>
                </td>
                <td className="hospital-assessment">
                  <TextBox
                    name="hospitalAssessment"
                    type="text"
                    placeholder="Nhập số %"
                    onChangeValue={(e) => {
                      onChangeValue(e);
                    }}
                  />
                  <span>%</span>
                </td>
              </tr>
              <tr>
                <td>G</td>
                <td style={{ width: "45%" }}>
                  <div>
                    Nếu có nhu cầu khám bệnh, Ông/Bà có quay trở lại hoặc giới
                    thiệu cho người khác đến không?
                  </div>
                </td>
                <td colSpan="2">
                  <p className="display-radio-last">
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="backHospital"
                        value="1"
                        onClick={(e) => onChangeValue(e)}
                      />
                      <span className="checkmark">
                        1. Chắc chắn không bao giờ quay lại
                      </span>
                    </label>
                  </p>
                  <p className="display-radio-last">
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="backHospital"
                        value="2"
                        onClick={(e) => onChangeValue(e)}
                      />
                      <span className="checkmark">
                        2. Không muốn quay lại nhưng có ít lựa chọn khác
                      </span>
                    </label>
                  </p>
                  <p className="display-radio-last">
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="backHospital"
                        value="3"
                        onClick={(e) => onChangeValue(e)}
                      />
                      <span className="checkmark">3. Có thể sẽ quay lại</span>
                    </label>
                  </p>
                  <p className="display-radio-last">
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="backHospital"
                        value="4"
                        onClick={(e) => onChangeValue(e)}
                      />
                      <span className="checkmark">
                        4. Chắc chắn sẽ quay lại hoặc giới thiệu cho người khác
                      </span>
                    </label>
                  </p>
                  <p className="display-radio-last">
                    <label className="containerCheck">
                      <input
                        type="radio"
                        name="backHospital"
                        value="5"
                        onClick={(e) => onChangeValue(e)}
                      />
                      <span className="checkmark">
                        5. Khác (ghi rõ)
                        <input
                          type="text"
                          placeholder="…………………………………………………………………………………."
                          style={{ width: 500 }}
                          name="reason"
                          onChange={(e) => {
                            onChangeValue(e);
                          }}
                        />
                      </span>
                      &nbsp;
                    </label>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="noteForm">XIN TRÂN TRỌNG CẢM ƠN!</p>
        </div>
        <div className="submit-form">
          <button onClick={() => onSubmit()}>GỬI Ý KIẾN</button>
        </div>
      </div>
    </Container>
  );
};

export default AboutSatisfied;
