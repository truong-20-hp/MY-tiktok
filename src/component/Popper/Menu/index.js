import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [], children }) {
    const renderItem = () => items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
    return (
        <div>
            <Tippy
                interactive
                delay={[0, 700]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
