import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@src/components/Container'
import './styles.scss'
import images from '@src/resources/images'
const AboutScreen = () => {


    const renderTitle = () => {
        return (
            <div className="container-tab-about">
                <div
                    className="tablink tab-select"
                    onClick={tabSelected('about')}>
                    <span className="about">Giới thiệu về iSofH</span>
                </div>
                <div
                    onClick={tabSelected('partner')}
                    className="tablink" >
                    <span>Đối tác của iSofH</span>
                </div>
            </div>
        )
    }
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
    }
    const renderAbout = () => {
        return (
            <div id="about" class="container-about content">
                <p><b style={{ color: '#000' }}>iSofH</b> được thành lập năm 2015
                với mục tiêu phát triển
                nền tảng hàng đầu
                về công nghệ  thông tin y tế,
                 xây dựng hệ thống y tế thông minh tại Việt Nam.</p>
                <div>
                    <p>3 giải pháp cốt lõi trong quản lý và vận hành hệ thống thông tin y tế cũng là thế mạnh nổi bật của iSofH gồm:</p>
                    <p>- Giải pháp quản lý toàn diện</p>
                    <p>- Giải pháp kết nối hoàn chỉnh</p>
                    <p>- Giải pháp lưu trữ an toàn</p>
                    <p>Đáp ứng hiệu quả: Tối ưu quy trình khám, chữa bệnh bằng công nghệ.</p></div>
            </div>
        )
    }

    const renderPartner = () => {
        return (
            <div id="partner" class="container-partner content" style={{ display: 'none' }}>
                {/* <ul >
                    {data.map((e, i) => {
                        return (
                            <li
                                key={i} className="container-item">
                                    <img src={e.icon} style={{ width: '40%', height: '40%' }} />
                            </li>
                        )
                    })}
                </ul> */}
                <img src={images.img_partner} className="img-partner" />
            </div>
        )
    }

    return (
        <Container titleView={renderTitle()}>
            {renderAbout()}
            {renderPartner()}


        </Container>
    )
}

export default AboutScreen