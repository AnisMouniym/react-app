const lbj = 30
const sc = 28
const mj = 34


function Header() {
    const titre = "Build your NBA Roster"
    return( 
    <div><h1>{titre.toUpperCase()}</h1></div>
    )
}

function Cart() {
  return(<div>
    <h2>Choose a player</h2>
    <ul>
      <li>LeBron James, {lbj} OVR</li>
      <li>Stephen Curry, {sc} OVR</li>
      <li>Michael Jordan, {mj} OVR</li>
    </ul>
    Average OVR = {Math.ceil((lbj + sc + mj/3))}
  </div>)
}

function Banner() {
  return(<div>
    <Header />
    <Cart />
  </div>)
}
  
  ReactDOM.render(<Banner />, document.getElementById("root"))