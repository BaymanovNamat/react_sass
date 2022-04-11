import "./Aside.scss";
import asideImage from "../../assets/aside.webp";

function Aside(props) {
  return (
    <aside className="Aside">
      <div className="Aside__container">
        <div className="Aside__content">
          <h2>
            This is additional information
          </h2>
          <div className="slot">
            <img src={asideImage} alt="#" />
          </div>
          
        </div>
        
      </div>
      
    </aside>
  );
};


export default Aside;