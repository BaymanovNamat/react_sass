import Aside from "./components/Aside/Aside";
import Example from "./components/Example/Example";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.jsx";
import Nav from "./components/Nav/Nav";

function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
  };
  const styles2 = {
    display: "flex",
    justifyContent: "center",
    width: "1200px",
  };


  return (
    <div className="App" style={styles}>
      <Nav/>
      <Header/>
      <div style={styles2}>
        <Main/>
        <Aside/>
      </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>

      <div className="event">
        <Example/>
      </div>
    </div>
  );
}

export default App;
