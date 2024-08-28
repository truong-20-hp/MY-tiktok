import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const className = cx('menu-item');

function MenuItem({ data }) {
    return (
        <Button className={className} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
