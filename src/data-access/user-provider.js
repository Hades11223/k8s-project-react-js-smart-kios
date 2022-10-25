import client from "../utils/client-utils";
import stringUtils from "mainam-react-native-string-utils";
import constants from "../resources/strings";
import datacacheProvider from "./datacache-provider";
import clientUtils from "../utils/client-utils";

export default {
  login(username, password) {
    let object = {
      username,
      password: password.toMd5(),
    };
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("post", constants.api.user.login, object)
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  getEhealth(patientValue, namSinh) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi(
          "get",
          constants.api.user.getEhealth + `?patientValue=${patientValue}&namSinh=${namSinh}`,
          {}
        )
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  searchServices(codeService, serviceType, page, size) {
    return new Promise((resolve, reject) => {
      page = page || 1;
      size = size || 100;
      let url = constants.api.user.searchServices + "?";
      if (codeService) url += "value=" + codeService + "&";
      if (serviceType && serviceType != 0)
        url += "serviceType=" + serviceType + "&";
      url += "page=" + (page - 1) + "&";
      url += "size=" + size + "&";
      url += "sort=serviceType&";

      clientUtils
        .requestApi("get", url, {})
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  userSatisfied(object) {
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("post", constants.api.user.userSatisfied, object)
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
