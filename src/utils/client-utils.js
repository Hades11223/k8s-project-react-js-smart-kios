import axios from "axios";

const getServerUrl = () => {
  const domain = global.origin;
  switch (domain) {
    case "http://localhost:3000": // test
      return "https://110.api.emr.test.isofh.vn";
    case "http://123.24.206.9:9462": // test
      return "https://110.api.emr.test.isofh.vn";
    case "http://123.24.206.9:9464": // test
      return "https://110.api.emr.test.isofh.vn";
    case "http://192.168.2.2:9462": // production
      return "http://192.168.2.233:2301";
    case "http://172.110.10.2:9462": // production
      return "http://172.110.10.233:2301";
    default:
      return "https://110.api.emr.test.isofh.vn";
  }
};
const server_url = getServerUrl();

String.prototype.getServiceUrl =
  String.prototype.getServiceUrl ||
  function (defaultValue) {
    if (this == "")
      if (defaultValue != undefined) return defaultValue;
      else return this;
    if (this.startsWith("http") || this.startsWith("blob")) {
      return this;
    }
    return server_url + this;
  };

export default {
  // auth: "eyJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiaXNvZmhDYXJlIiwiY3JlYXRlZCI6MTU1MzA3MDc0Mzc4NiwidHlwZSI6MCwidXNlcklkIjo1NX0.k8B3Cm5M-22ckpKk3W1fhgHoHq7LGVdKIjhLZUl0abKES5nSCC5RhupsRXctTK6skQMvCZ8f-TuZGbDcNgdlsb_Kc0ogFmaPmGI4ao7MKrCb9nCr4fxztUN0ABWUERA1wnQNFljgVR9FIrNKnf2hx_aTHIrwS9Ol1JOaKJVnj83cK5vg2ExvN7ralb1yoyuHEZoODlDBVHCIxeG5X3oaJE6-BKfcafXau_cmYz-Ovg31VtZpu1lCffaOj2uLSefPBvqfL2d2U1sswiUrV95rankTjOomr31lP4xiCN71-7YX_6Hx7EraRFhmclmaOjGUWM83VB0fvY8hIEHiE8yB8w",
  auth: "",
  serverApi: server_url,
  uploadFile(url, file) {
    const formData = new FormData();
    formData.append("files", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: this.auth,
        // 'MobileMode': 'vendorPortal'
      },
    };
    return axios.post(url.getServiceUrl(), formData, config);
  },
  uploadFile(url, file) {
    const formData = new FormData();
    formData.append("files", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: this.auth,
        // 'MobileMode': 'vendorPortal'
      },
    };
    return axios.post(url.getServiceUrl(), formData, config);
  },
  requestApi(methodType, url, body) {
    return new Promise((resolve, reject) => {
      var dataBody = "";
      if (!body) body = {};
      dataBody = JSON.stringify(body);
      this.requestFetch(
        methodType,
        url && url.indexOf("http") == 0 ? url : url,
        {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: this.auth,
          // 'MobileMode': 'vendorPortal'
        },
        dataBody
      )
        .then((s) => {
          // ;
          s.json()
            .then((val) => {
              resolve(val);
            })
            .catch((e) => {
              reject(e);
            });
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  requestFetch(methodType, url, headers, body) {
    return new Promise((resolve, reject) => {
      let fetchParam = {
        method: methodType,
        headers,
      };

      if (methodType.toLowerCase() !== "get") {
        fetchParam.body = body;
      }
      return fetch(url.getServiceUrl(), fetchParam)
        .then((json) => {
          if (!json.ok) {
            reject(json);
          } else resolve(json);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
