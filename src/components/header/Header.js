import React, { useState } from 'react'
import images from '@src/resources/images'
import { withRouter } from 'react-router-dom';
import './styles.scss'
const Header = (props) => {
    const goBack = () => {
        props.history.goBack()
    }
    const goHome = () => {
        props.history.push('/home')
    }
    const goToAbout = () => {
        props.history.push('/about')
    }
    return (
        <div className="header-app">
            <div className="back-content-header">

                {
                    props.hideBackButton ? null :

                        <div
                            className="container-button"
                            onClick={goBack}>
                            <img src={images.header.ic_back} className="icon-home-header" />
                            <div >Quay lại</div>
                        </div>
                }
                <div
                    className="container-button"
                    onClick={goHome}>
                    <img src={images.header.ic_home} className="icon-home-header" />
                    <div>Trang chủ</div>
                </div>

            </div>
            {
                props.titleView ?
                    props.titleView :

                    <div className="title-header">{props.title || 'Xin chào, vui lòng lựa chọn thông tin dưới đây'}</div>
            }
            <div className="logo-header">
                <img src={images.header.icon_logo} className="icon-logo-header" />
            </div>
        </div>
    )
}

export default withRouter(Header)