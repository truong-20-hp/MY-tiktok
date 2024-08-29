import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import image from '~/asset/image';

const cx = classNames.bind(styles);

const Image = forwardRef(({ alt, src, className, ...prop }, ref) => {
    const [fallBack, setFallBack] = useState('');
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...prop}
            src={fallBack || src}
            alt={alt}
            onError={() => {
                setFallBack(image.noImage);
            }}
        />
    );
});

export default Image;
