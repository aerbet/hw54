import { FC } from 'react';

interface TriesProps {
    tries: number;
}

const Tries: FC<TriesProps> = ({ tries }) => {
    return (
        <div className="tries">Tries: {tries}</div>
    );
};

export default Tries;