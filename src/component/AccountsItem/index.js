import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountsItem.module.scss';

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7394282993160257542~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=52915&refresh_token=5276452fafb687ee5e9f46455ba669df&x-expires=1724900400&x-signature=NEe3esE4xIIlUb9FW2WRmZia1tw%3D&shp=a5d48078&shcp=81f88b70"
                alt="avatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Xuan Truong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('use-name')}>xuantruong0809</span>
            </div>
        </div>
    );
}

export default AccountsItem;
