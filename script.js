function Header() {
    const titre = "Build your NBA Roster"
    return( 
    <div><h1> {titre.toUpperCase} </h1></div>
    )
}

function Cart() {
  return(
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}

function Banner() {
  return(<div>
    <Header />
    <Description />
  </div>)
}
  
  ReactDOM.render(<Banner />, document.getElementById("root"))