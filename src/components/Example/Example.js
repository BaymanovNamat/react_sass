import { useState } from "react";
import "./Example.css";


function Example(props) {

  const buttonCallback = (event) => {
      alert("Hello world");
  };


  const inputValue = (event) => {
    alert(event.target.value);
  };


  let [firstName, setfirstName] = useState("");

  const onFirstName = (event) => {
    setfirstName(event.target.value);
  };

  const [lastName, setlastName] = useState("");

  const onlastName = (event) => {
    setlastName(event.target.value);
  };


  const styles = {
    display: "block",
  };


  const [a, setA] = useState("");

  const onAsum = (event) => {
    setA(event.target.value);
  };


  const [b, setB] = useState("");

  const onBsum = (event) => {
    setB(event.target.value);
  };

  const sum = +a + +b;


  const [click, setClick] = useState(0);
  const onClick = (event) => {
    setClick(click + 1);
  };


  return (
    <article className="Example">
      <button onClick={buttonCallback}>
        Greetment
      </button>

      <div>
        <label>
          <input type="text" onChange={inputValue} />
        </label>
      </div>


      <div style={styles}>
        <div>
          <div>
          {firstName} {lastName}
          
          </div>
        <label>
        Firstname: 
          <input type="text" onChange={onFirstName } />
        </label>
        </div>
        
          <div>
        <label>
        Lastname:
          <input type="text" onChange={onlastName} />
        </label>
          </div>


          <div className="sum">

            <div>
              <div>
                <lable>
                  A:
                  <input type="text" onChange={onAsum}/>
                </lable>
              </div>
              <div>
                <lable>
                  B:
                  <input type="text" onChange={onBsum}/>
                </lable>
              </div>

              <div>
                A + B = {sum}
              </div>
            </div>

          </div>


          <article>
            <p>
              Your click is {click} 
            </p>
            <button onClick={onClick}>
              Click me
            </button>
          </article>
      
      </div>
      
    </article>
  );
};


export default Example;