import React, { useState } from "react";
import images from "@src/resources/images";

{
  /** Danh sách dịch vụ khám */
}
const ListService = (props) => {
  const [data, setData] = useState(props.item);
  let serviceCheckup =
    data.checkUps && data.checkUps.length ? data.checkUps[0] : {};
  // let serviceCheckup = (data.checkUps || []).find(item => item.ServiceType == "CheckUp") || {};

  const getSumPrice = () => {
    let price = ((data || {}).checkUps || []).reduce((pre, cur) => {
      return pre + cur.amount;
    }, 0);
    return price.formatPrice();
  };
  return (
    <div id="list-service" className="content">
      <div className="container-hospital container-gender">
        <span className="container-gender-title">BỆNH VIỆN ISOFH</span>
        {/* <div style={{ paddingTop: 30 }}>Thời gian khám: <span className="bold">{new Date(data.createdAt).format('dd/MM/yyyy')}</span> </div>
                <div className="padding-top" >Nơi khám: <span className="bold">{serviceCheckup.roomName}</span> </div>
                <div className="padding-top" >Bác sĩ: <span className="bold">{serviceCheckup.doctorFullName}</span> </div>
                <div className="padding-top" >Số khám: <span className="bold " style={{ color: '#ED176B' }}>{serviceCheckup.sequenceNo}</span> </div> */}

        <div className="container-services">
          {/* <span className="service">Dịch vụ đã khám</span> */}
          <div>
            <ul className="list-services row">
              {data.checkUps.map((e, i) => {
                return (
                  <li key={i} className="col-lg-6">
                    <div className="container-gender-item">
                      <span className=" txt-title">{e.serviceName}</span>
                      <div className="item-service-content">
                        <p>
                          <span className="txt-lable">Thời gian khám:</span>
                          <span className="bold">
                            {new Date(data.createdAt).format("dd/MM/yyyy")}
                          </span>{" "}
                        </p>
                        <p className="padding-top">
                          <span className="txt-lable"> Nơi khám:</span>
                          <span className="bold">{e.roomName}</span>{" "}
                        </p>
                        <p className="padding-top">
                          <span className="txt-lable"> Bác sĩ:</span>
                          <span className="bold">{e.doctorFullName}</span>{" "}
                        </p>
                        <p className="padding-top">
                          <span className="txt-lable"> Số khám:</span>
                          <span className="bold " style={{ color: "#ED176B" }}>
                            {e.sequenceNo}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* <div className="item-service padding-top">
                            <span className="dots" style={{ backgroundColor: '#FFF' }} />
                            <span style={{
                                width: '70%',
                                color: '#000',
                                fontWeight: '600'
                            }}>Tổng tiền:</span>
                            <span style={{ color: '#ED176B', fontWeight: 'bold' }}>{getSumPrice()}đ</span>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListService;
