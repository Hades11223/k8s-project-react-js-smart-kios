import React, { useState } from 'react'
import './styles.scss'
import QRCode from 'qrcode.react';
import Container from '@src/components/Container';
import images from '@src/resources/images';
const GuideBooking = () => {
    const [youtubeId, setYoutubeId] = useState('aApDL4GaNro')

    return (
        <Container title="Hướng dẫn đặt khám online trên ISOFHCARE">
            <div className="container-guide">
                <video className="video-guide" controls autoPlay>
                    <source src={images.video}  type="video/mp4" />
                </video>
                <div className="container-qr">
                    <div className="qr-code">
                        <QRCode size={200} level="H" value="https://play.google.com/store/apps/details?id=com.isofh.isofhcare&hl=vi" />
                        <span style={{ paddingTop: 20 }}>Quét để tìm ứng dụng ISOFHCARE trên <span style={{ color: '#ff3399' }}>Google Play</span></span>
                    </div>
                    <div className="qr-code">
                        <QRCode size={200} level="H" value="https://apps.apple.com/vn/app/isofhcare/id1428148423" />
                        <span style={{ paddingTop: 20 }}>Quét để tìm ứng dụng ISOFHCARE trên <span style={{ color: '#ff3399' }}>Appstore</span></span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default GuideBooking
