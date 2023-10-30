import { FC } from 'react';

interface ScoreProps {
    score: number;
    totalScore: number;
}

const Score: FC<ScoreProps> = ({ score, totalScore }) => {
    return (
        <div className='score'>
            {'Your Scores : ' + score}
            <p className='total_score'>{'Total Scores : ' + totalScore}</p>
        </div>
    );
};

export default Score;