import "./Myhome.css";
import MyLogic from "./MyLogic";
const MyHome = () => {
    const [Mobile, handleChange]=MyLogic()
  return (
    <div className="main-container">
      {Mobile === true ? (
        <div className="main-p" id="main-p">
          <div className="first-p text-center">
            Mobile <br /> <span>Cool</span> images
          </div>
          <div className="second-p text-center">To represent a Product</div>
        </div>
      ) : (
        <div className="main-p" id="main-p">
          <div className="first-p text-center">
            Combine <span>fine</span> images
          </div>
          <div className="second-p text-center">To represent a Product</div>
        </div>
      )}
      <div
        className="main-p text-center Arrow"
        id="main-p2"
        onClick={handleChange}
      >
        <i
          className="fa-solid fa-arrow-down"
          id="main-p3"
          onClick={handleChange}
        ></i>
      </div>
      <div className="parent">
        <div className="div1">
          use mixed grid with imagery, Replace with your own photos and
          description.
        </div>
        <div className="div2 text-center">
          We aimed to deliver HQ templates to figma
        </div>
        <div className="div3">
          <button className="text-center"> learn more</button>
        </div>
        <div className="div4 display-flex justify-aligns2 text-center">
          <div className="title display-flex">Image Title</div>
        </div>
        <div className="div5"></div>
        <div className="div6 text-center">Caption</div>
        <div className="div7">
          This is multiPurpose grid, it fits for portfolio, services or agency
          web site
        </div>
        <div className="div8"></div>
        <div className="div9"></div>
        <div className="div10"></div>
      </div>
    </div>
  );
};

export default MyHome;
