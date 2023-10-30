import { FC, MouseEventHandler } from 'react';

interface SmallSquareProps {
    divClass: string;
    id: number;
    changeColor: MouseEventHandler<HTMLDivElement>;
    hide: string;
    prize: string;
}

const SmallSquare: FC<SmallSquareProps> = ({ divClass, id, changeColor, hide, prize }) => {
    return (
        <div className={divClass} id={id.toString()} onClick={changeColor}>
            <p className={hide}>{prize}</p>
        </div>
    );
};

export default SmallSquare;