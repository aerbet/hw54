import { FC, MouseEventHandler } from 'react';

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ onClick }) => {
    const buttonName = 'reset';
    return (
        <button className="reset_button" onClick={onClick}>{buttonName}</button>
    );
};

export default Button;