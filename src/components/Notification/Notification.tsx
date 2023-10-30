import { FC } from 'react';

interface NotificationProps {
    note1: string;
    note2: string;
}

const Notification: FC<NotificationProps> = ({ note1, note2 }) => {
    return (
        <div className='part1'>{note1}<p className='part2'>{note2}</p></div>
    );
};

export default Notification;