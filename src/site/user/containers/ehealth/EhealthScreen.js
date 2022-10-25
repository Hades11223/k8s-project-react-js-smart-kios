import React, { useState, useRef } from "react";
import "./styles.scss";
import images from "@src/resources/images";
import Container from "@src/components/Container";
import userProvider from "@src/data-access/user-provider";
import { toast } from "react-toastify";
import { playSound } from "@utils/sound-utils";
import { Col, Row } from "reactstrap";
const EhealthScreen = (props) => {
    const [code, setCode] = useState("");
    const [namSinh, setNamSinh] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const onConfirm = async () => {
        try {
            if (!code) {
                toast.error('Bạn chưa nhập mã người bệnh!')
                return
            }
            if (!namSinh) {
                toast.error('Bạn chưa nhập năm sinh!')
                return
            }
            setIsLoading(true)
            let res = await userProvider.getEhealth(code, namSinh);
            if (res && res.code == 0) {
                setIsLoading(false)
                playSound()
                props.history.push('/y-ba-dien-tu', {
                    item: res.data
                })
            } else if (res && res.code === 1302) {
                setIsLoading(false);
                toast.error("Mã người bệnh không đúng vui lòng nhập lại", {});
            }
            else {
                setIsLoading(false);
                toast.error("Mã người bệnh không đúng vui lòng nhập lại", {});

            }
        } catch (error) {
            setIsLoading(false);
            toast.error("Mã người bệnh không đúng vui lòng nhập lại", {});
        }

    }




    const onChangeCode = (e) => {
        let value = e.target.value
        setCode(value)
    }
    // const onChangeCode = (e) => {
    //     let value = e.target.value
    //     setCode(value => {
    //         onConfirm()
    //     })
    // }

    const onChangePhone = (e) => {
        let value = e.target.value
        setNamSinh(value)
    }

    const toggleHidePhone = () => {
        let phone = document.getElementById("input-phone");
        if (!showPhone) {
            phone.style["-webkit-text-security"] = "none";
            phone.style["-moz-webkit-text-security"] = "none";
            phone.style["-webkit-text-security"] = "none";
            setShowPhone(true);
        } else {
            phone.style["-webkit-text-security"] = "disc";
            phone.style["-moz-webkit-text-security"] = "disc";
            phone.style["-webkit-text-security"] = "disc";
            setShowPhone(false);
        }
    };
    const onKeyDown = (event) => {
        if (event.key == "Enter") {
            event.preventDefault();
            onConfirm();
            document.activeElement.blur();
        }
    };
    return (
        <Container isLoading={isLoading} title="Xác thực thông tin">
            <div className="container-ehealth">
                <div className="container-ehealth-input">
                    <form autoComplete="off" onKeyDown={onKeyDown} className="form">
                        <div style={{ display: "flex", width: "23%" }}>
                            <h4 style={{ fontWeight: "bold", marginTop: "14px", width: "41%", fontSize: "23px" }}>Năm sinh<strong style={{ color: "red" }}>*</strong></h4>
                            <input
                                style={{ fontWeight: "bold", fontSize: "1.75vw", marginLeft: "10px", width: "44%", padding: "7px", borderRadius: "17px", border: "1px solid" }}
                                autoComplete="off"
                                maxLength={4}
                                pattern="[0-9]*"
                                inputMode="numeric"
                                className="input input-hide-phone"
                                type="number"
                                id="input-phone"
                                placeholder="Nhập năm sinh"
                                onChange={onChangePhone}
                                value={namSinh} />
                        </div>
                        <span className="txt-label">Mã người bệnh (Mã NB)<strong style={{ color: "red" }}>*</strong></span>
                        <div className="group-input-phone">
                            <input
                                autoComplete="off"
                                id="input-code"
                                className="input"
                                placeholder="Nhập mã NB"
                                onChange={onChangeCode}
                                value={code}
                                type="number" />
                        </div>
                        <input
                            className="submit"
                            onClick={() => onConfirm()}
                            type="button"
                            value="Tìm kiếm"
                        />
                    </form>
                </div>

                <div className="container-ehealth-content">
                    <h4 style={{ marginLeft: "14vh", marginTop: "37px", fontWeight: "bold", marginBottom: "15px", fontSize: "23px" }}>
                        <i>Ví dụ về các biểu mẫu có chứa thông tin Mã BN:</i>
                    </h4>
                    <Row className="content--css">
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img1} className="img-guide-ehealth" />
                        </Col>
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img2} className="img-guide-ehealth" />
                        </Col>
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img3} className="img-guide-ehealth" />
                        </Col>
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img4} className="img-guide-ehealth" />
                        </Col>
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img5} className="img-guide-ehealth" />
                        </Col>
                    </Row>
                    <Row className="content--css">
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img6} className="img-guide-ehealth" />
                        </Col>
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img7} className="img-guide-ehealth" />
                        </Col>
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img8} className="img-guide-ehealth" />
                        </Col>
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img9} className="img-guide-ehealth" />
                        </Col>
                        <Col lg="2" md="4" className="col-img-guide">
                            <img src={images.ehealth.img10} className="img-guide-ehealth" />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default EhealthScreen;
