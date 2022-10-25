import React, { useState } from 'react'
import './styles.scss'
import Container from '@src/components/Container'
const GetTicket = () => {
    const [state, setstate] = useState('state')

    return (
        <Container title="Lấy số tiếp đón">

            <div className="container">
                <div className="container-row">
                    {/**top */}
                    <div className="container-top">
                        {/** Loại khám*/}
                        <div className="container-examination">
                            <span className="examination">Loại khám</span>
                            <button className="button-examination">Dịch vụ</button>
                            <button className="button-examination">Bảo hiểm y tế</button>
                        </div>
                        {/**Khám ưu tiên */}
                        <div className="container-examination">
                            <span className="examination">Khám ưu tiên</span>
                            <button className="button-examination">Có</button>
                            <button className="button-examination">Không</button>
                        </div>
                    </div>
                    {/** betwen */}
                    <div className="container-top">
                        {/**Khu vực */}
                        <div className="container-examination">
                            <span className="examination">Khu vực</span>
                            <div className="container-button-address">
                                <button className="button-examination button-address">Khoa khám bệnh</button>
                                <button className="button-examination button-address">KKB theo yêu cầu</button>

                            </div>
                        </div>
                    </div>
                    {/** bottom*/}
                    <div className="container-top">

                        {/**Thông tin thẻ*/}
                        <div className="container-info">
                            <div className="container-examination">
                                <span className="examination">Thông tin thẻ</span>
                                <input className="button-examination" placeholder="Nhập mã thẻ/ Quẹt thẻ"></input>
                            </div>
                            <button className="button-get-ticket">Lấy số thứ tự</button>
                        </div>
                        {/**Số thứ tự */}
                        <div className="container-info-stt">
                            <p className="txt-title-info">Số thứ tự</p>
                            <div className="container-info-profile">
                                <p className="txt-name">Nguyễn Thị Phương Anh</p>
                                <p className="txt-age">28 tuổi</p>
                                <p className="txt-code">UT2293</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-row">
                    <div className="container-header">
                        <p >Hướng dẫn lấy số thứ tự</p>
                        <div className="container-dots">
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                    </div>

                    <div className="container-content">
                        <div className="container-dots">
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                        <div>
                            <ul>
                                
                                <span>1</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default GetTicket