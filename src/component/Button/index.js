import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    text = false,
    disable = false,
    rounded = false,
    rightIcon = false,
    leftIcon = false,
    children,
    onClick,
    ...passprop
}) {
    let Comp = 'button';

    const prop = {
        onClick,
        ...passprop,
    };

    if (to) {
        Comp = Link;
        prop.to = to;
    } else if (href) {
        Comp = 'a';
        prop.href = href;
    }

    if (disable) {
        Object.keys(prop).forEach((key) => {
            if (key.startsWith('on')) {
                delete prop[key];
            }
        });
    }

    const classe = cx('wrapper', {
        primary,
        outline,
        small,
        text,
        disable,
        rounded,
        rightIcon,
        leftIcon,
    });

    return (
        <Comp className={classe} {...prop}>
            <span className={cx('icon')}>{leftIcon}</span>
            <span className={cx('login')}>{children}</span>
            <span className={cx('icon')}>{rightIcon}</span>
        </Comp>
    );
}

export default Button;
