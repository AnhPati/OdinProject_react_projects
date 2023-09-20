import './score.css'

const Score = ({ score = 0, highScore = 0 }) => {
    return (
        <div className="score-container">
            <h5>Score : <span>{score}</span></h5>
            <h5>High Score : <span>{highScore}</span></h5>
        </div>
    );
}

export default Score;