import './index.css'

const Navbar = props => {
  const {currScore, secondsLeft} = props

  return (
    <div className="navbar">
      <img
        className="app-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />

      <div className="score-time-box">
        <p className="score-text">
          Score: <spam className="score">{currScore}</spam>
        </p>
        <div className="time-box">
          <img
            className="timer-icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="time">{secondsLeft} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
