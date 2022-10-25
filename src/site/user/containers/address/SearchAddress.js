import React, { useState } from 'react'
import images from '@src/resources/images'
import './styles.scss'
import Container from '@src/components/Container'
import dataAddress from './dataAddress.js'
import { playSound } from '@utils/sound-utils';
const SearchAddress = (props) => {
    console.log('dataAddress: ', dataAddress);
    const [data, setData] = useState(dataAddress.data)
    const [keyword, setKeyword] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    const detailHospital = (item) => () => {
        playSound()
        props.history.push('/chi-duong', {
            item
        })
    }
    const renderData = () => {
        if (data && data.length) {
            return data.map((item, index) => {
                return (
                    <li
                        key={index}
                        onClick={detailHospital(item)}
                        className="container-item">
                        <span className="item-name">{item.name} {item.address ? `(${item.address})` : ''}</span>
                    </li>

                )
            })
        } else {
            return (
                <p style={{ fontSize: 32, color: 'red', fontStyle: 'italic' }}>Không có kết quả phù hợp</p>
            )
        }
    }
    const onChangeText = (event) => {
        let value = event.target.value
        setKeyword(value)
        setIsSearch(true)
        if (!value) {
            setIsSearch(false)
            setData(dataAddress.data)
            return
        }
        var listSearch = dataAddress.data.filter(item => {
            return value == null || item.name && item.name.trim().toLowerCase().unsignText().indexOf(value.trim().toLowerCase().unsignText()) != -1
                || item.address && item.address.trim().toLowerCase().unsignText().indexOf(value.trim().toLowerCase().unsignText()) != -1;
        });
        setData(listSearch)
        const listElm = document.getElementById('list-service')
        listElm.scrollTop = 0
    }
    const onRemoveText = () => {
        setKeyword('')
        setIsSearch(false)
        setData(dataAddress.data)
    }
    const onKeyDown = (event) => {
        if (event.key == 'Enter') {
            document.activeElement.blur();
        }


    }
    return (
        <Container title="Hãy chọn địa điểm mà bạn muốn tới">
            <div className="container-search">
                <form className="container-services" onKeyDown={onKeyDown} onSubmit={e => { e.preventDefault(); }}>
                    <input
                        className="input input-search"
                        type="text"
                        onChange={onChangeText}
                        name="Service"
                        value={keyword}
                        placeholder="Nhập địa điểm hoặc địa chỉ">
                    </input>
                    {
                        keyword ?
                            <img onClick={onRemoveText} src={images.ic_delete} className="icon-remove" />
                            : null
                    }
                </form>
                {isSearch ?
                    <div className="is-search">Kết quả tìm kiếm ({data.length})</div>
                    : <div className="is-search"></div>
                }
                <ul id="list-service" className="list-services" >
                    {renderData()}
                </ul>
            </div>
        </Container>
    )
}

export default SearchAddress