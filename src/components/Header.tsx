import LogoM from '../assets/logo_m.png'
import Logo from '../assets/logo.svg'
import Login from '../assets/login.svg'
import Logout from '../assets/logout.svg'
import Myinfo from '../assets/myinfo.svg'
import Join from '../assets/join.svg'
import Sitemap from '../assets/sitemap.svg'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router'
// import { useState } from 'react'

const Header = () => {
  // 920px 기준
  const isPC = useMediaQuery({ query: '(min-width: 920px)' })

  // const [isLogin, setIsLogin] = useState(true)
  const isLogin = true

  return (
    <>
      {isPC ? (
        <header className="sticky z-[var(--header-index)] pt-64 flex justify-center border-b border-lineN">
          <div className="flex items-start w-914 justify-between">
            <Link
              to="/"
              className="pt-2 w-248">
              <img
                src={Logo}
                alt="IPAT 로고"
              />
            </Link>
            <nav>
              <ul className="flex">
                <li className="relative text-sm text-center border-b-[2px] border-transparent hover:border-primary group">
                  <Link
                    className="w-96 inline-block pt-16 pb-16"
                    to="#none">
                    시험소개
                  </Link>
                  <ul className="absolute mt-2 w-[100%] invisible shadow-[var(--shadow-strong)] pt-11 pb-15 flex flex-col bg-white rounded-b-[8px] group-hover:visible">
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        인사말
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        IPAT 소개
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        자격정보
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        출제기준
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        평가방법
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        시험규정
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative text-sm text-center border-b-[2px] border-transparent hover:border-primary group">
                  <Link
                    className="w-96 inline-block pt-16 pb-16"
                    to="#none">
                    응시안내
                  </Link>
                  <ul className="absolute mt-2 w-[100%] invisible shadow-[var(--shadow-strong)] pt-11 pb-15 flex flex-col bg-white rounded-b-[8px] group-hover:visible">
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        연간일정
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        접수방법
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        취소/환불안내
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative text-sm text-center border-b-[2px] border-transparent hover:border-primary group">
                  <Link
                    className="w-96 inline-block pt-16 pb-16"
                    to="#none">
                    시험접수
                  </Link>
                  <ul className="absolute mt-2 w-[100%] invisible shadow-[var(--shadow-strong)] pt-11 pb-15 flex flex-col bg-white rounded-b-[8px] group-hover:visible">
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        시험 접수하기
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        접수현황
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        수험표 출력
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative text-sm text-center border-b-[2px] border-transparent hover:border-primary group">
                  <Link
                    className="w-96 inline-block pt-16 pb-16"
                    to="#none">
                    교육프로그램
                  </Link>
                  <ul className="absolute mt-2 w-[100%] invisible shadow-[var(--shadow-strong)] pt-11 pb-15 flex flex-col bg-white rounded-b-[8px] group-hover:visible">
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        교육안내
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        온라인 교육
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        샘플문제
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative text-sm text-center border-b-[2px] border-transparent hover:border-primary group">
                  <Link
                    className="w-96 inline-block pt-16 pb-16"
                    to="#none">
                    안내/지원
                  </Link>
                  <ul className="absolute mt-2 w-[100%] invisible shadow-[var(--shadow-strong)] pt-11 pb-15 flex flex-col bg-white rounded-b-[8px] group-hover:visible">
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        공지사항
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        질문/답변
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        자주묻는질문
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        자료실
                      </Link>
                    </li>
                    <li className="text-xs hover:bg-[#e6e9ee]">
                      <Link
                        to="#none"
                        className="pt-5 pb-5 inline-block w-[100%]">
                        보도자료
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <ul className="flex self-center items-end gap-x-10">
              <li>
                {isLogin ? (
                  <button
                    type="button"
                    className="w-40 text-[10px] text-gray90 flex items-center flex-col">
                    <img
                      src={Logout}
                      alt="로그아웃"
                    />
                    로그아웃
                  </button>
                ) : (
                  <Link
                    to="#none"
                    className="w-40 text-[10px] text-gray90 flex items-center flex-col">
                    <img
                      src={Login}
                      alt="로그인"
                    />
                    로그인
                  </Link>
                )}
              </li>
              <li>
                {isLogin ? (
                  <Link
                    to="#none"
                    className="w-40 text-[10px] text-gray90 flex items-center flex-col">
                    <img
                      src={Myinfo}
                      alt="마이페이지"
                    />
                    MY IPAT
                  </Link>
                ) : (
                  <Link
                    to="#none"
                    className="w-40 text-[10px] text-gray90 flex items-center flex-col">
                    <img
                      src={Join}
                      alt="회원가입"
                    />
                    회원가입
                  </Link>
                )}
              </li>
              <li>
                <button
                  type="button"
                  className="w-40 text-[10px] text-gray90 flex items-center flex-col">
                  <img
                    src={Sitemap}
                    alt="사이트맵"
                  />
                  사이트맵
                </button>
              </li>
            </ul>
          </div>
        </header>
      ) : (
        <header className="sticky top-0 flex justify-between items-center h-(--header-height) pl-16 pr-14 shadow-2xs border-b border-solid border-[#f1f1f1]">
          <Link to="/">
            <img
              src={LogoM}
              alt="IPAT 로고"
            />
          </Link>
          <button
            type="button"
            className="relative size-24">
            <span className="inline-block w-20 h-2 bg-[#33363d] absolute top-[25%] left-[50%] translate-[-50%]"></span>
            <span className="inline-block w-20 h-2 bg-[#33363d] absolute top-[50%] left-[50%] translate-[-50%]"></span>
            <span className="inline-block w-20 h-2 bg-[#33363d] absolute top-[75%] left-[50%] translate-[-50%]"></span>
          </button>
        </header>
      )}
    </>
  )
}

export default Header
