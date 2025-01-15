import './index.css'

const ScoreCard = props => {
  const {currScore, playAgain} = props
  const onPlayAgain = () => {
    playAgain()
  }
  return (
    <div className="game-over-card">
      <img
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="score-heading">YOUR SCORE</p>
      <p className="final-score">{currScore}</p>
      <button onClick={onPlayAgain} type="button" className="play-again-btn">
        <img
          className="reset-icon"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p className="btn-text">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
