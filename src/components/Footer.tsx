import { Link } from 'react-router-dom'
import logo from '../assets/footer_logo 1.svg'

export default function Footer() {
  return (
    <footer className="flex flex-col items-start gap-24 w-full max-w-[360px] mx-auto px-16 py-24">
      <div className="flex flex-col items-center gap-8">
        <img
          src={logo}
          alt="한국발명진흥회 로고"
        />
      </div>

      <div className="flex flex-col gap-8 w-full pt-16 border-t text-xs space-x-4 text-[#1E2124]">
        <div className="flex justify-between">
          <Link
            to="#"
            className="hover:underline">
            개인정보처리방침
          </Link>
          <Link
            to="#"
            className="hover:underline">
            이용약관
          </Link>
          <Link
            to="#"
            className="hover:underline">
            온라인교육환불기준
          </Link>
          <Link
            to="#"
            className="hover:underline">
            Contact us
          </Link>
        </div>
        <div className="text-left">
          <Link
            to="#"
            className="hover:underline">
            안내/지원 바로가기
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-8 text-center text-xs text-[#1E2124]">
        <div className="flex gap-3">
          <p className="text-[#1E2124]">PHONE</p>
          <p className="text-[#000]">(02) 3459 2777</p>
        </div>
        <div className="flex gap-3">
          <p className="text-[#1E2124]">FAX</p>
          <p className="text-[#000]">(02) 3459 2859</p>
        </div>
        <p className="text-[#000]">
          06133 서울특별시 강남구 테헤란로 131 (역삼동, 발명진흥회)
        </p>
      </div>

      <div className="mt-7 text-center text-xs text-[#464C53]">
        © COPYRIGHT (C) 2014 IPAT. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}
