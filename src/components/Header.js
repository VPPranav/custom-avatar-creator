import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">
          <span className="logo-circle"></span>
          <span className="logo-dot"></span>
        </div>
        <h1 className="title">Custom Avatar Creator</h1>
      </div>
    </header>
  )
}

export default Header
