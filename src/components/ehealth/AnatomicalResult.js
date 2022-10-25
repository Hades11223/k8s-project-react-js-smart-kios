import React, { useState, useEffect } from 'react'
import images from '@src/resources/images'

const AnatomicalResult = (props) => {
    console.log('props: ', props);

    const [data, setData] = useState(props.item.pathologies)

    {/** kết quả giải phẫu */ }
    return (
        <div id="anatomical-result" className="content" >
            <div className="container-result">
                <ul className="list-result">
                    {data.map((e, i) => {
                        return (
                            <li key={i}>
                                <span className="txt-title">{e.serviceName}</span>
                                <div>
                                    {e.biopsyLocation ?
                                        <div>
                                            <p className="txt-label">Vị trí sinh thiết</p>
                                            <div className="item-sick">
                                                <img src={images.ehealth.ic_dot} className="img-verified" />
                                                <span>{e.biopsyLocation}</span>
                                            </div></div> : null

                                    }
                                    {e.microsome ?
                                        <div>
                                            <p className="txt-label">Vị thể</p>
                                            <div className="item-sick">
                                                <img src={images.ehealth.ic_dot} className="img-verified" />
                                                <span>{e.microsome}</span>
                                            </div></div> : null

                                    }
                                    {e.macrosome ?
                                        <div>
                                            <p className="txt-label">Đại thể</p>
                                            <div className="item-sick">
                                                <img src={images.ehealth.ic_dot} className="img-verified" />
                                                <span>{e.macrosome}</span>
                                            </div></div> : null

                                    }
                                    {(e.result || e.discussion || e.summaryResult) ?
                                        <div>
                                            <p className="txt-label">Kết quả</p>
                                            <div className="item-sick">
                                                <img src={images.ehealth.ic_dot} className="img-verified" />
                                                <span>{e.result + (e.discussion ? e.discussion : '') + (e.summaryResult ? e.summaryResult : '')}</span>
                                            </div></div> : null

                                    }
                                    {
                                        // e.ReportTemplate == "Tebaoamdao" || e.ReportTemplate == "Thinprep" && 
                                        (e.details && e.details.length > 0) ?
                                            e.details.map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <div className="item-sick">
                                                            {item.verified ?
                                                                <img src={images.ehealth.check} className="img-verified" />
                                                                :
                                                                <img src={images.ehealth.uncheck} className="img-verified" />
                                                            }
                                                            <span>{item.serviceName}</span>
                                                        </div>
                                                        {item.result2 ?
                                                            <div className="item-sick item-child">
                                                                <img src={images.ehealth.ic_dot} className="img-verified" />
                                                                <span>{item.result2}</span>
                                                            </div>
                                                            : null
                                                        }
                                                    </div>
                                                )
                                            }) : null

                                    }

                                </div>
                                {
                                    (e.conclusion) ?
                                        <div>
                                            <p className="txt-label">Kết luận</p>
                                            <div className="item-sick">
                                                <img src={images.ehealth.ic_dot} className="img-verified" />
                                                <span>{e.conclusion}</span>
                                            </div>
                                        </div>
                                        : null
                                }
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default AnatomicalResult