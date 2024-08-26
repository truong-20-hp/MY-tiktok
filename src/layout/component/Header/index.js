import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/asset/image';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input className={cx('input')} placeholder="Search" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('active')}></div>
            </div>
        </header>
    );
}

export default Header;
