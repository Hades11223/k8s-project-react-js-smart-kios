import React, { useState, useEffect } from "react";
import images from "@src/resources/images";
import "./styles.scss";
import Container from "@src/components/Container";
import userProvider from "@src/data-access/user-provider";
import LinearProgress from "@material-ui/core/LinearProgress";
const SearchServices = (props) => {
  const [listService, setListService] = useState([
    {
      name: "Tất cả dịch vụ",
      type: 0,
    },
    {
      name: "Khám",
      type: 10,
    },
    {
      name: "Xét nghiệm",
      type: 20,
    },
    {
      name: "Cận lâm sàng",
      type: 30,
    },
    {
      name: "Phẫu thuật",
      type: 40,
    },
    // {
    //     name: 'Suất ăn',
    //     type: 50
    // },
    {
      name: "Dịch vụ khác",
      type: 60,
    },
    {
      name: "Giường",
      type: 130,
    },
  ]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loadmore, setLoadmore] = useState(true);
  const [loading, setLoadding] = useState(true);
  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [isShow, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [service, setService] = useState({ type: 0 });
  const [completed, setCompleted] = React.useState(0);
  useEffect(() => {
    setLoadmore(false);
    if (data.length < page * 30) return;
    getData(keyword, service.type, page + 1);
    setPage(page + 1);
  }, [loadmore]);
  useEffect(() => {
    const listElm = document.getElementById("list");
    var PRELOAD_FROM_BOTTOM = 100;
    listElm.addEventListener("scroll", function () {
      if (
        listElm.scrollTop + listElm.clientHeight >=
        listElm.scrollHeight - PRELOAD_FROM_BOTTOM
      ) {
        setLoadmore(true);
      }
    });
  }, []);

  const getData = async (keyword, type, page) => {
    try {
      let res = await userProvider.searchServices(
        keyword ? keyword.unsignText() : "",
        type || 0,
        page,
        30
      );
      setLoadding(false);
      if (res && res.code == 0 && res.data) {
        fomatData(res.data, page);
        setTotal(res.totalElements);
      } else {
        fomatData([], page);
      }
    } catch (error) {
      setLoadding(false);
      fomatData([], page);
    }
  };

  const fomatData = (list, page) => {
    if (list.length == 0) {
      if (page == 1) {
        setData([]);
      }
    } else {
      if (page == 1) {
        setData(list);
      } else {
        setData((data) => [...data, ...list]);
      }
    }
  };

  const showMenu = () => {
    setShow(true);
  };
  const onBlur = () => {
    setShow(false);
  };
  const onSelectService = (item) => () => {
    setService(item);
    setShow(false);
    if (item.type != 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
    setPage(1);
    const listElm = document.getElementById("list");
    listElm.scrollTop = 0;
  };

  const renderListServices = () => {
    return listService.map((e, i) => {
      return (
        <li
          onBlur={onBlur}
          key={i}
          onClick={onSelectService(e)}
          className="item-service"
        >
          {e.name}
        </li>
      );
    });
  };
  const renderData = () => {
    return data.map((item, index) => {
      return (
        <li key={index} className="container-item">
          <span className="item-name">{item.name}</span>
          <div className="item-price">
            <div>
              DV:{" "}
              {item.serviceUnitPrice ? item.serviceUnitPrice.formatPrice() : 0}
            </div>
            <div className="price">
              BH:{" "}
              {item.insuranceUnitPrice
                ? item.insuranceUnitPrice.formatPrice()
                : 0}
            </div>
          </div>
        </li>
      );
    });
  };
  const onChange = (event) => {
    let value = event.target.value;
    setKeyword(value);
    setSearch(true);
    setPage(1);
    const listElm = document.getElementById("list");
    listElm.scrollTop = 0;
    if (!value) {
      setSearch(false);
    }
  };
  useEffect(() => {
    // được gọi khi keyword hoặc service thay đổi
    try {
      let timeout = setTimeout(() => {
        setLoadding(true);
        getData(keyword, service.type, page);
      }, 500);
      return () => {
        if (timeout) clearTimeout(timeout);
      };
    } catch (error) {}
  }, [keyword, service]);
  const onRemoveText = () => {
    setKeyword("");
    setSearch(false);
  };
  const onKeyDown = (event) => {
    if (event.key == "Enter") {
      document.activeElement.blur();
    }
  };
  return (
    <Container title="Tra cứu giá dịch vụ">
      <div onClickCapture={onBlur}>
        <form
          className="container-service"
          onKeyDown={onKeyDown}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="dropdown">
            <button type="button" onClick={showMenu} className="button-select">
              <span className="service-name">
                {service && service.name ? service.name : "Tất cả dịch vụ"}
              </span>
              <img
                src={images.ic_dropdown}
                height={20}
                style={{ paddingLeft: 10 }}
              />
            </button>
            {isShow ? (
              <ul className="container-search-service">
                {renderListServices()}
              </ul>
            ) : null}
          </div>
          <div className="container-input-search">
            <input
              className="input input-search"
              type="text"
              name="Service"
              onChange={onChange}
              value={keyword}
              placeholder="Nhập tên dịch vụ"
            ></input>
            {keyword ? (
              <img
                onClick={onRemoveText}
                src={images.ic_delete}
                className="icon-remove"
              />
            ) : null}
          </div>
        </form>
        {loading ? <LinearProgress /> : null}
        <div className="is-search">
          {search ? <span>Kết quả tìm kiếm ({total})</span> : ""}
          <span className="is-search-unit">Đơn vị: VNĐ</span>
        </div>

        <ul id="list" className="list-service">
          {renderData()}
        </ul>
      </div>
    </Container>
  );
};

export default SearchServices;
