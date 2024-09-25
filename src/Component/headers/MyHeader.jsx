import './Headers.css'
import MyHeadLogic from './MyHeadLogic';
const MyHeader = () => {
  const [isOpen, navRef, spanRef, handleSpanClick] = MyHeadLogic()
  return (
    <header>
      <div className="container display-flex justify-aligns">
        <div className="logo">
          <a
            href="javascript:void(0)"
            ref={spanRef}
            className={`ham-burger ${isOpen ? "active" : ""}`}
            onClick={handleSpanClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <a href="#">
            <i
              className="fa-solid fa-table-columns"
              style={{ color: "#0b4f84" }}
            ></i>
            Grid
          </a>
        </div>
        <div
          ref={navRef}
          className={`nav display-flex ${isOpen ? "open" : ""}`}
          id="nav"
        >
          <ul>
            <li>
              <a href="#home">
                <span className="justify-aligns2"></span>How it works
              </a>
            </li>
            <li>
              <a href="#about">
                <span className="justify-aligns2"></span>
                Who we are
              </a>
            </li>
            <li>
              <a href="#service">
                <span className="justify-aligns2"></span> What we do
              </a>
            </li>
            <li>
              <a href="#classes">
                <span className="justify-aligns2"></span>Contact us
              </a>
            </li>
          </ul>
        </div>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  );
}

export default MyHeader