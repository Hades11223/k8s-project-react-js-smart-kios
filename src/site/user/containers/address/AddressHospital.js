import React, { useState } from 'react'
import images from '@src/resources/images'
import Container from '@src/components/Container'
import './styles.scss'
const AddressHospital = () => {
    const [state, setstate] = useState('state')

    return (
        <Container title="Sơ đồ bệnh viện">
            <img src={images.img_kios} className="image-address" />
        </Container>
    )
}

export default AddressHospital