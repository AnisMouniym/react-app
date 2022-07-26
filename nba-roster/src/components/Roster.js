const lbj = 30
const sc = 28
const mj = 34

function Roster() {
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

export default Roster