import "./Header.scss";

function Header(props) {
  return (
    <header className="Header">
      <div className="Header__container">
        <div className="Header__content">
          <h2>
            Title of a longer featured blog post
          </h2>

          <p>
            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
          </p>
        </div>
        
      </div>
      
    </header>
  );
}

export default Header;