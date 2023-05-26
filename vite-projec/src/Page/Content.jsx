import "../style/content.css";
import sidebarMenu from "../image/Menu.svg";
import watches from "../image/watches-Image.svg";
import tablets from "../image/tablets-Image.svg";

const Content = () => {
  return (
    <div className="content-container">
      {/* add sidebar section */}
      <div className="sidebar-left-content">
        <div className="sidebar-menu">
          <img src={sidebarMenu} alt="sidebar menu" />
        </div>
        <div className="watches-banner">
          <h4 className="watches-banner-title">The New Smart Watches</h4>
          <img className="watches-image" src={watches} alt="watches" />
          <button className="watches-btn-view">View More</button>
        </div>
        <div className="tablet-banner">
          <img src={tablets} alt="tablets" />
          <h4 className="tablets-banner-title">New Tablets Samsung</h4>
        </div>
      </div>
    </div>
  );
};

export default Content;
