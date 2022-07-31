import '../styles/Roster.css'
// OVR = playerList.map((player) => ({player.OVR}))

const lbj = 70
const sc = 28
const mj = 34

function Roster() {
    return(<div>
      <h2>Your Roster:</h2>
      <div className="roster">
          <ul>
            <li>LeBron James, {lbj} OVR</li>
            <li>Stephen Curry, {sc} OVR</li>
            <li>Michael Jordan, {mj} OVR</li>
          </ul>
      Average OVR = {Math.ceil((lbj + sc + mj)/3)}
      </div>
    </div>)
}

export default Roster