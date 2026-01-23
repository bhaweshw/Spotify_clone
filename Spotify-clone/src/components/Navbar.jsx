import NavIcon from '../assets/Navicon.svg'

function Navbar() {
  return (
    <nav className="text-white flex gap-0.5 justify-between">
      <div>NavIcon</div>
      <ul className="flex justify-around w-[50vw]">
      <div>spacebar</div>
        <li><button/></li>
        <li><button /></li>
        <li>whats new</li>
        <li>friend activity</li>
        <li>profile</li>
      </ul>
    </nav>
  )
}

export default Navbar
