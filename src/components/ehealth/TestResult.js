import React, { useState, useEffect } from 'react'
import ehealthUtils from './ehealthUtils'

{/** kết quả xét nghiệm */ }
const TestResult = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        let result1 = props.item.medicalTests;
        let group = result1.map((item) => item.group2Name).filter((item, i, ar) => ar.indexOf(item) === i).map(item => {
            let new_list = result1.filter(itm => itm.group2Name == item);
            return { type: item, value: { ListMedical: new_list } }
        });
        setData(group)
    }, [])

    const renderMedicalTestLine = (item, index, type) => {
        return <tbody key={index}>
            <tr className="table-content">
                <th colSpan="4" className="service-content title-content">{item.serviceName}</th>
            </tr>

            {item.details.map((e, i) => {
                let range = ehealthUtils.getRangeMedicalTest(e);
                let isHighlight = ehealthUtils.showHighlight(e);
                if (type.toLowerCase() == 'vi sinh') {
                    return (
                        <tr key={i} className="table-content">
                            <td >{e.serviceName}</td>
                            <td className="content-center" style={isHighlight ? { color: 'red', fontWeight: 'bold' } : {}} >{ehealthUtils.getResult(e)}</td>
                        </tr>
                    )

                } else {
                    return (
                        <tr key={i} className="table-content ">
                            <td >{e.serviceName}</td>
                            <td className="content-center" style={isHighlight ? { color: 'red', fontWeight: 'bold' } : {}}>{ehealthUtils.getResult(e)}</td>
                            <td className="content-center">{range}</td>
                            <td className="content-center">{e.unit}</td>
                        </tr>

                    )
                }
            })}
        </tbody>
    }
    return (
        <div id="test-result" className="content container-table row">
            <div className="group-table">
                {
                    data && data.length ?
                        data.map((item, index) => {
                            return (
                                <div key={index} className="table-other">
                                    <span className="txt-title">{item.type}</span>
                                    {item.type.toLowerCase() == 'vi sinh' ?

                                        <table className="table-root">
                                            <thead>
                                                <tr className="table-header">
                                                    <th style={{ width: '50%' }}>Tên xét nghiệm</th>
                                                    <th className="header-center">Kết quả</th>
                                                </tr>
                                            </thead>
                                            {item.value.ListMedical.map((e, i) => {
                                                if (e.details && e.details.length > 0 && e.details[0].serviceName != 0) {
                                                    return (renderMedicalTestLine(e, i, item.type));
                                                }
                                                if (e.details && e.details.length > 0) {
                                                    return (
                                                        <tbody className="table-content" key={i}>
                                                            <tr >
                                                                <td className="service-content">{e.serviceName}</td>
                                                                <td className="content-center" style={isHighlight ? { color: 'red', fontWeight: 'bold' } : {}} >{ehealthUtils.getResult(e.ServiceMedicTestLine[0])}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                }
                                                let range = ehealthUtils.getRangeMedicalTest(e);
                                                let isHighlight = ehealthUtils.showHighlight(e);
                                                return (
                                                    <tbody className="table-content" key={i}>
                                                        <tr >
                                                            <td className="service-content">{e.serviceName}</td>
                                                            <td className="content-center" style={isHighlight ? { color: 'red', fontWeight: 'bold' } : {}} >{ehealthUtils.getResult(e)}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}

                                        </table>
                                        :
                                        <table className="table-root">
                                            <thead>
                                                <tr className="table-header">
                                                    <th style={{ width: '50%' }}>Tên xét nghiệm</th>
                                                    <th className="header-center">Kết quả</th>
                                                    <th className="header-center">Giá trị bình thường</th>
                                                    <th className="header-center">Đơn vị</th>
                                                </tr>
                                            </thead>
                                            {
                                                item.value && item.value.ListMedical ? item.value.ListMedical.map((e, i) => {
                                                    let range = ehealthUtils.getRangeMedicalTest(e);
                                                    let isHighlight = ehealthUtils.showHighlight(e);
                                                    if (e.details && e.details.length > 0 && e.details[0].serviceName != 0) {
                                                        return (renderMedicalTestLine(e, i, item.type));
                                                    }
                                                    if (e.details && e.details.length > 0) {
                                                        return (
                                                            <tbody className="table-content" key={i}>
                                                                <tr>
                                                                    <td className="service-content">{e.serviceName}</td>
                                                                    <td className="content-center" style={isHighlight ? { color: 'red', fontWeight: 'bold' } : {}}>{ehealthUtils.getResult(e.details[0])}</td>
                                                                    <td className="content-center">{range}</td>
                                                                    <td className="content-center">{e.unit}</td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    }
                                                    return (
                                                        <tbody className="table-content" key={i}>
                                                            <tr>
                                                                <td className="service-content">{e.serviceName}</td>
                                                                <td className="content-center" style={isHighlight ? { color: 'red', fontWeight: 'bold' } : {}}>{ehealthUtils.getResult(e)}</td>
                                                                <td className="content-center">{range}</td>
                                                                <td className="content-center">{e.unit}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                }) : null
                                            }

                                        </table>

                                    }
                                </div>
                            )
                        })
                        : null
                }
            </div>
        </div>
    )
}

export default TestResult