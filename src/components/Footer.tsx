import { Link } from 'react-router-dom'
import logo from '../assets/footer_logo.png'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-24 max-w-[1200px] px-16 py-24 ">
      <div className="flex  gap-8">
        <img
          src={logo}
          alt="한국발명진흥회 로고"
        />
      </div>

      <div className="flex flex-col gap-3 text-center text-xs text-[#1E2124]">
        <div className="flex gap-3 text-left">
          <div className="flex gap-3">
            <p className="font-bold">대표전화</p>
            <p className="text-[#000]">(02) 3459-2777</p>
            <p className="hidden lg:!block">(평일 09시-18시)</p>
          </div>
          <div className="flex gap-3">
            <p className="font-bold">FAX</p>
            <p className="text-[#000]">(02) 3459-2859</p>
          </div>
        </div>

        <p className="text-[#000] text-left">
          06133 서울특별시 강남구 테헤란로 131 (역삼동, 발명진흥회)
        </p>
      </div>

      <div className="flex flex-col flex-shrink-0 lg:!flex-row gap-8 lg:gap-[40px] pt-8 border-t text-xs ">
        <div className="flex gap-4">
          <Link
            to="#"
            className="font-semibold">
            개인정보처리방침
          </Link>
          <Link to="#">이용약관</Link>
          <Link to="#">온라인교육환불기준</Link>
          <Link to="#">Contact us</Link>
        </div>
        <div className="text-[#909091]">
          © COPYRIGHT (C) 2014 IPAT. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}
