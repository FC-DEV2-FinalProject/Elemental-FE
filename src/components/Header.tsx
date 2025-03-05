import LogoM from '../assets/logo_m.png'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
  // 920px 기준
  const isPC = useMediaQuery({ query: '(min-width: var(--pc-inner))' })

  return (
    <>
      {isPC ? (
        <header>PC헤더</header>
      ) : (
        <header className="sticky top-0 flex justify-between items-center h-(--header-height) pl-16 pr-14 shadow-2xs border-b border-solid border-[#f1f1f1]">
          <div>
            <img src={LogoM} />
          </div>
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
