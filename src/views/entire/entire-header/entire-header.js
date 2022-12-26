import {memo, useState} from 'react'
import {EntireHeaderWrapper} from './style'
import data from '@/assets/data/filter_data.json'
import classNames from "classnames";

const EntireHeader = memo(() => {
  const [selectHeader, setSelectHeader] = useState([])

  //改变头部选择
  const changeSelect = item => {
    if (selectHeader.includes(item)) {
      let newSelect = selectHeader.filter(i => i !== item)
      setSelectHeader(newSelect)
    } else {
      setSelectHeader([...selectHeader, item])
    }
  }
  return (
    <EntireHeaderWrapper>
      {
        data.map(item => {
          return (
            <div
              className={classNames('item', {'active': selectHeader.includes(item)})}
              key={item}
              onClick={() => changeSelect(item)}
            >
              {item}
            </div>
          )
        })
      }
    </EntireHeaderWrapper>
  );
})

export default EntireHeader;
