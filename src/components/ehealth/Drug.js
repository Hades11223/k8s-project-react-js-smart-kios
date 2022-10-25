import React, { useState, useEffect } from 'react'
import ehealthUtils from './ehealthUtils'

{/**thuốc */ }
const Drug = (props) => {

    const [data, setData] = useState([])
    useEffect(() => {
        let result = props.item
        if (!result || !result.checkUps || !result.checkUps.length)
            return;
        let resultCheckup = result.checkUps || [];
        let medinine = [];
        resultCheckup.forEach(item => {
            if (item.medicines && item.medicines.length)
                medinine = medinine.concat(item.medicines);
            if (item.ListExternalMedicine && item.ListExternalMedicine.length)
                medinine = medinine.concat(item.ListExternalMedicine);
        })
        if (result.medicines && result.medicines.length) {
            medinine = medinine.concat(result.medicines);
        }
        setData(medinine)
    }, [props.item])
    return (
        <div id="drug" className="content " >
            <table className="table-root">
                <thead>
                    <tr className="table-header">
                        <th style={{ width: '70%' }}>Tên thuốc</th>
                        <th>Số lượng</th>
                        <th>Đơn vị</th>
                    </tr>
                </thead>
                {
                    data && data.length ?
                        data.map((e, i) => {
                            let serviceName = "";
                            // if (e.serviceName)
                            //     serviceName += e.serviceName + "\n";
                            if (e.measure)
                                serviceName += e.measure + "\n";
                            if (e.dosage)
                                serviceName += e.dosage + "\n";
                            if (e.usage)
                                serviceName += e.usage
                            return (
                                <tbody className="table-content" key={i}>
                                    <tr >
                                        <td className="content-name">
                                            <p><b>{e.serviceName}</b></p>
                                            <p>{serviceName}</p>
                                        </td>
                                        <td>{e.quantity}</td>
                                        <td>{e.uom}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                        :

                        <tbody>
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center', width: '100%' }} >Không có dữ liệu</td>
                            </tr>
                        </tbody>
                }


            </table>
        </div>
    )
}

export default Drug