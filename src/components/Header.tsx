import LogoM from '../assets/logo_m.png'

const Header = () => {
  return (
    <header className="flex">
      <div>
        <img src={LogoM} />
      </div>
      <button
        type="button"
        className="relative">
        <span className="inline-block w-20 h-2 bg-[#33363d]"></span>
      </button>
    </header>
  )
}

export default Header
