import "./Nav.scss";


function Nav() {
  return (
    <div className="Nav">
      <div className="Nav__container">

        <div className="Nav__title">
          <h2>
            Pizza
          </h2>
    
          <ul>
            <li>
              <a href="/">
              Price
              </a>
            </li>
            <li>
              <a href="/">
                To order
              </a>
            </li>

            <li>
              <a href="/">
                FAQ about our pizza
              </a>
            </li>

            <li>
              <a href="/">
                About this site
              </a>
            </li>

            <li>
              <a href="/">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default Nav;