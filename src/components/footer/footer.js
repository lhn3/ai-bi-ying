import {memo} from 'react'
import {FooterWrapper} from './style'
import {styleStrToObj} from "@/assets/svg";

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className='footer-main'>
        <div className='footer-top'>
          <div className='footer-item'>
            <div className='item-title'>爱彼迎</div>
            <div className='item-info'>工作机会</div>
            <div className='item-info'>爱彼迎新闻</div>
            <div className='item-info'>政策</div>
            <div className='item-info'>无障碍设施</div>
          </div>
          <div className='footer-item'>
            <div className='item-title'>发现</div>
            <div className='item-info'>信任与安全</div>
            <div className='item-info'>旅行基金</div>
            <div className='item-info'>商务差旅</div>
            <div className='item-info'>爱彼迎杂志</div>
            <div className='item-info'>Airbnb.org</div>
          </div>
          <div className='footer-item'>
            <div className='item-title'>出租</div>
            <div className='item-info'>为什么要出租?</div>
            <div className='item-info'>房东义务</div>
            <div className='item-info'>开展体验</div>
            <div className='item-info'>资源中心<span>新推出</span></div>
          </div>
          <div className='footer-item'>
            <div className='item-title'>客服支持</div>
            <div className='item-info'>帮助</div>
            <div className='item-info'>邻里支持 <span>新推出</span></div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='svg'>
            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={styleStrToObj('height: 1.5em; width: 1.5em; display: block; fill: rgb(118, 118, 118);')}><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
          </div>
          <div className='long-span'>
            <span className='link-span'>京ICP备16017121号</span>&ensp;
            <span className='link-span'>京ICP证 160773号</span>&ensp;
            <img src="https://z1.muscache.cn/airbnb/static/china/public_security_bureau_logo-5d90debd8b3d783447eeffa635df1972.png" alt="中国公安局标志" />
            <span className='link-span'>京公网安备 11010502032345号</span>
            <span>安彼迎网络（北京）有限公司</span>
            <img width="20" height="20" src="https://z1.muscache.cn/pictures/carson/carson-1630570578816-f7812cf5/original/90b7269d-4bd5-44dc-89c1-b50d33fdccd0.png" alt="中国电子营业执照标志"/>
            <span className='link-span'>营业执照</span>
            <span>© 2022 Airbnb, Inc. All rights reserved.</span>&ensp;
            <span className='link-span'>条款</span>&ensp;·&ensp;
            <span className='link-span'>隐私政策</span>&ensp;·&ensp;
            <span className='link-span'>网站地图</span>&ensp;·&ensp;
            <span>全国旅游投诉渠道 12301</span>
          </div>
          <div className='icons'>
            <svg viewBox="0 0 32 32" role="img" aria-hidden="false" aria-label="前往微博" focusable="false" style={styleStrToObj("height: 18px; width: 18px; display: block; fill: rgb(118, 118, 118);")}><path d="m30.85 14.19c-.15.61-.85.98-1.46.77-.64-.22-.97-.86-.76-1.5.67-2.14.27-4.05-1.21-5.7-1.37-1.56-3.5-2.17-5.47-1.78-.64.15-1.25-.28-1.37-.89-.15-.64.27-1.29.88-1.41 2.77-.61 5.68.31 7.72 2.51 1.97 2.24 2.55 5.33 1.67 8zm-4.77-5.18c-.95-1.11-2.4-1.53-3.74-1.25-.52.12-.88.61-.79 1.2.12.58.64.92 1.22.8.7-.15 1.31.06 1.82.61.49.58.61 1.23.39 1.9-.15.58.15 1.13.67 1.29a1.02 1.02 0 0 0 1.25-.67c.46-1.44.18-2.73-.82-3.86zm-9.33 13.42c-1 2.33-3.95 3.62-6.5 2.79-2.43-.77-3.53-3.22-2.43-5.42 1.06-2.11 3.8-3.31 6.2-2.69 2.52.64 3.74 3 2.73 5.33zm-5.13-1.81c-.82-.34-1.79 0-2.28.77s-.24 1.68.52 2.05 1.85 0 2.34-.77c.49-.83.24-1.72-.58-2.05zm1.94-.8c-.76-.34-1.37.8-.64 1.07.33.15.64.06.88-.31.15-.34.09-.64-.24-.77zm-.03 6.83c-5.08.52-9.45-1.78-9.79-5.18-.34-3.34 3.49-6.47 8.57-6.99 5.1-.49 9.45 1.84 9.78 5.18.34 3.34-3.55 6.5-8.57 6.99zm10.12-11.14c-.18-.03-.3-.09-.39-.13-.15-.09-.27-.28-.12-.64.52-1.32.55-2.36.03-3.06-1.06-1.44-3.68-1.38-6.81-.06l-.24.09c-.34.12-.67.03-.52-.43.52-1.66.4-2.85-.3-3.62-.89-.86-2.28-.89-4.23-.12-3.92 1.56-10.43 7.35-10.43 12.75 0 1.63.64 3.1 1.91 4.35 2.53 2.57 6.66 3.86 10.95 3.86 3.98 0 7.75-1.23 10.09-2.94 2.31-1.72 3.77-3.86 3.77-5.82 0-2.12-1.67-3.59-3.71-4.23z" fill-rule="evenodd"></path></svg>
            <svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" style={styleStrToObj('height: 1em; width: 1em; display: block; fill: currentcolor;')}><path d="m25.09 19.47c-.62 0-1.11-.53-1.08-1.16.02-.59.52-1.08 1.1-1.08.62.01 1.11.54 1.09 1.17a1.08 1.08 0 0 1 -1.1 1.07zm-6.89.01a1.12 1.12 0 0 1 -1.11-1.08 1.13 1.13 0 0 1 1.12-1.16c.62 0 1.13.53 1.1 1.17a1.12 1.12 0 0 1 -1.11 1.07zm-1.31-5.54c-4.74 3.15-5.33 9.05-1.23 12.9 2.15 2.02 4.77 2.85 7.68 2.54.96-.1 1.92-.64 2.84-.54s1.78.73 2.72 1.16c-.43-1.74-.44-2.47.48-3.3 3.16-2.85 3.46-7.35.87-10.74-2.97-3.89-9.15-4.82-13.36-2.02zm-9.74-2.66a1.32 1.32 0 0 1 -1.3-1.38 1.34 1.34 0 0 1 1.39-1.31c.73.02 1.34.67 1.32 1.39a1.36 1.36 0 0 1 -1.4 1.3zm9.89-1.36c.01.77-.56 1.36-1.32 1.37a1.35 1.35 0 0 1 -1.38-1.33c-.01-.72.61-1.36 1.34-1.37a1.33 1.33 0 0 1 1.36 1.33zm5.18 1.29a9.07 9.07 0 0 0 -1.85-4.76c-2.88-3.82-8.21-5.42-12.95-3.85-3.47 1.15-6.03 3.36-7.07 7-1.13 3.94.38 7.76 3.95 10.32.56.4.7.96.52 1.57-.25.83-.45 1.48-.66 2.47 1.17-.74 2.16-1.41 3.2-2 .31-.18.75-.22 1.11-.19 1.06.09 2.12.25 3.28.4-.27-3.17.7-5.72 2.82-7.81 2.1-2.07 4.68-2.98 7.65-3.14z" fill-rule="evenodd"></path></svg>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
})

export default Footer;
