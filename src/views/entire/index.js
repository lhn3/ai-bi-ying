import {memo} from 'react'
import {EntireWrapper} from "@/views/entire/style";
import EntireHeader from "./entire-header/entire-header";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      {/*头部*/}
      <EntireHeader />
      
      <div className='entire-body'>
        Entire
      </div>
    </EntireWrapper>
  );
})

export default Entire;
