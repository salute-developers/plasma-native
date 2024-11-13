import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const EditFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.76596 31.3524L4.8344 26.0102C5.44245 26.0472 6.04093 26.185 6.60516 26.4187C7.27246 26.6951 7.87877 27.1003 8.38949 27.611C8.90022 28.1217 9.30534 28.728 9.58174 29.3953C9.81552 29.9597 9.95334 30.5584 9.99029 31.1666L4.64848 32.235C4.12369 32.3399 3.661 31.8772 3.76596 31.3524ZM12.3396 29.926C12.2026 30.063 12.0574 30.1905 11.9051 30.308C11.8126 29.7334 11.6533 29.1701 11.4295 28.6299C11.0526 27.72 10.5001 26.8932 9.80371 26.1968C9.10727 25.5003 8.28047 24.9479 7.37053 24.571C6.83055 24.3473 6.26756 24.1881 5.6932 24.0955C5.81057 23.9433 5.938 23.7982 6.07493 23.6613L21.232 8.50419C21.4376 8.51152 21.6435 8.52864 21.8488 8.55568C23.2675 8.74244 24.5848 9.3921 25.5966 10.4039C26.6084 11.4157 27.258 12.733 27.4448 14.1517C27.4719 14.3573 27.489 14.5634 27.4963 14.7693L12.3396 29.926ZM29.2625 13.0031L30.9534 11.3122C32.6834 9.58223 32.6834 6.77742 30.9534 5.04747C29.2235 3.31751 26.4187 3.31751 24.6887 5.04746L22.9981 6.73814C24.5116 7.10407 25.9016 7.88046 27.0108 8.98966C28.1202 10.099 28.8966 11.4894 29.2625 13.0031Z"
            fill="currentColor"
        />
    </s.Svg>
);
