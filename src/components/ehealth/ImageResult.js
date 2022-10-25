import React, { useState } from "react";
import images from "@src/resources/images";

{
  /** kết quả chẩn đoán hình ảnh */
}
const ImageResult = (props) => {
  const [data, setData] = useState(props.item);

  return (
    <div id="image-result" className="content">
      <div className="container-result">
        <ul className="list-result">
          {data.map((e, i) => {
            return (
              <li style={{ paddingBottom: 30 }} key={i}>
                <span className="txt-title">{e.serviceName}</span>
                {e.result || e.SummaryResult || e.Discussion ? (
                  <div>
                    <p className="txt-label">Mô tả</p>
                    {e.result ? (
                      <div className="item-sick">
                        <img
                          src={images.ehealth.ic_dot}
                          className="img-verified"
                        />
                        <span className="txt-result-sick">{e.result}</span>
                      </div>
                    ) : null}
                    {e.summaryResult ? (
                      <div className="item-sick">
                        <img
                          src={images.ehealth.ic_dot}
                          className="img-verified"
                        />
                        <span className="txt-result-sick">
                          {e.summaryResult}
                        </span>
                      </div>
                    ) : null}
                    {e.discussion ? (
                      <div className="item-sick">
                        <img
                          src={images.ehealth.ic_dot}
                          className="img-verified"
                        />
                        <span className="txt-result-sick">{e.discussion}</span>
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {e.conclusion ? (
                  <div>
                    <p className="txt-label">Kết luận</p>
                    <div className="item-sick">
                      <img
                        src={images.ehealth.ic_dot}
                        className="img-verified"
                      />
                      <span className="txt-result-sick">{e.conclusion}</span>
                    </div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImageResult;
