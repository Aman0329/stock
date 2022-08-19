import { useState } from "react";
import "./styles.css";

export default function App() {
  var [initial, ggg] = useState(0);
  var [number, sss] = useState(0);
  var [current, ccc] = useState(0);
  var [incomee, iii] = useState(0);
  var [per, bbb] = useState(0);

  function profit() {
    var iniinc = initial * number;
    var curinc = current * number;
    if (curinc >= iniinc) {
      var proincome = curinc - iniinc;
      iii(`Hey, the profit is ${proincome}`);
      var profper = (proincome / iniinc) * 100;
      bbb(` and percent is ${profper}`);
    } else {
      var lossincome = iniinc - curinc;
      iii(`Hey, the loss is ${lossincome}`);
      var losper = (lossincome / iniinc) * 100;
      bbb(` and percent is ${losper}`);
    }
  }

  return (
    <div className="App">
      <h1>Stock Profit and Loss</h1>
      <label className="label"></label>Initial Price
      <input
        onChange={(event) => ggg(event.target.value)}
        className="inputs"
      ></input>
      <label className="label"></label>Quantity of Stocks
      <input onChange={(e) => sss(e.target.value)} className="inputs"></input>
      <label className="label"></label>Current Price
      <input onChange={(e) => ccc(e.target.value)} className="inputs"></input>
      <button
        style={{
          color: "purple",
          border: "2px solid blue",
          cursor: "pointer",
          borderRadius: "10px"
        }}
        onClick={profit}
      >
        TELL ME
      </button>
      <h2>
        {incomee}
        {per}
      </h2>
    </div>
  );
}
