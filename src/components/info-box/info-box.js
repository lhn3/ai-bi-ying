import {memo} from 'react'
import InfoItem from "@/components/info-item/info-item";
import {InfoBoxWrapper} from "./style";
import PropTypes from "prop-types";

const InfoBox = memo((props) => {
  return (
    <InfoBoxWrapper>
      {/*每个房间的item*/}
      {
        props.list?.slice(0, 8).map(item => <InfoItem key={item.id} info={item} width='25%'/>)
      }
    </InfoBoxWrapper>
  );
})
InfoItem.propTypes = {
  list: PropTypes.arrary
}
export default InfoBox;
