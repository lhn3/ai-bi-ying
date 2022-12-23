import {memo} from 'react'
import InfoItem from "@/components/info-item/info-item";
import {InfoBoxWrapper} from "./style";
import PropTypes from "prop-types";

const InfoBox = memo((props) => {
  return (
    <InfoBoxWrapper>
      {/*每个房间的item*/}
      {
        props.list?.slice(0, props.num * 2).map(item => <InfoItem key={item.id} info={item}
                                                                  width={`${100 / props.num}%`}/>)
      }
    </InfoBoxWrapper>
  );
})
InfoItem.propTypes = {
  num: PropTypes.number,
  list: PropTypes.array
}
InfoItem.defaultProps = {
  num: 1,
  list: []
}
export default InfoBox;
