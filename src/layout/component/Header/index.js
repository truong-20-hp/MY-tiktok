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
    faUser,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import AccountsItem from '~/component/AccountsItem';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Header.module.scss';
import image from '~/asset/image';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { MailboxIcon, MessageIcon } from '~/component/icons';
import Image from '~/component/Image';

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    code: 'dk',
                    title: 'Dansk', // Denmark
                },
                {
                    code: 'ch',
                    title: 'Schweizerdeutsch', // Switzerland (Swiss German)
                },
                {
                    code: 'nl',
                    title: 'Nederlands', // Netherlands
                },
            ],
        },
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

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: 'profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: 'coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: 'setting',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Logout',
            to: 'logout',
            separate: true,
        },
    ];

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
                            <div
                                className={cx('search-result')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h5 className={cx('search-title')}>
                                        Accounts
                                    </h5>
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
                            <input
                                className={cx('input')}
                                placeholder="Search"
                            />
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
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('icon-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Tin nhan" placement="bottom">
                                <button className={cx('icon-btn')}>
                                    <MailboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://cdn.24h.com.vn/upload/3-2023/images/2023-08-15/Ngam-than-hinh-phu-huynh-cua-gai-xinh-co-doi-tu-gay-tranh-cai-12-1692073627-320-width650height808.jpg"
                                alt="user-avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
