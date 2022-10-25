import React, { useState } from "react";

{
  /** kết quả khám */
}
const Result = (props) => {
  console.log("props: ", props);
  const [data, setData] = useState(props.item.checkUps || []);
  const renderItem = (label, value, value2) => {
    if (value || value2)
      return (
        <div>
          <p className="txt-label">{label}</p>

          {value ? (
            <span className="item-sick">
              <span className="dots" />
              <p className="txt-result-sick">{value}</p>
            </span>
          ) : null}
          {value2 ? (
            <span className="item-sick">
              <span className="dots" />
              <p className="txt-result-sick">{value2}</p>
            </span>
          ) : null}
        </div>
      );
    return null;
  };
  return (
    <div id="result" className="content ">
      <div className="container-result container-gender">
        <span className="container-gender-title">BỆNH VIỆN ISOFH</span>
        <ul className="list-result row">
          {data.map((e, i) => {
            return (
              <li key={i} className=" col-lg-6">
                <div className="container-gender-item">
                  <span className="txt-title">{e.serviceName}</span>
                  <div className="container-gender-content">
                    {[
                      renderItem("Chẩn đoán", e.firstDiagnostic),
                      renderItem("Chẩn đoán bệnh", e.diseaseDiagnostic),
                      renderItem(
                        "Chẩn đoán khác",
                        e.otherDiseaseDiagnostic,
                        e.diagnostic
                      ),
                      renderItem("Lời dặn", e.doctorAdviceTxt, e.doctorAdvice),
                      renderItem("Ghi chú", e.note),
                    ].map((item, key) => (
                      <div key={key}>{item}</div>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Result;
