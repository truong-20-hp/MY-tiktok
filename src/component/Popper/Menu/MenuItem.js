import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ onClick, data }) {
    const classe = cx('menu-item', { separate: data.separate });
    return (
        <Button
            className={classe}
            to={data.to}
            leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
