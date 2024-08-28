import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faEllipsisVertical,
    faSpinner,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import AccountsItem from '~/component/AccountsItem';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Header.module.scss';
import image from '~/asset/image';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Language',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shotcut',
    },
];

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </div>
                <div>
                    <TippyHeadless
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h5 className={cx('search-title')}>Accounts</h5>
                                    <AccountsItem />
                                    <AccountsItem />
                                    <AccountsItem />
                                    <AccountsItem />
                                    <AccountsItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
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
                    </TippyHeadless>
                </div>
                <div className={cx('active')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                    <Menu items={MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
