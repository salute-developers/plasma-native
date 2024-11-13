import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RotateCw: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 5C10.8203 5 5 10.8203 5 18C5 25.1797 10.8203 31 18 31C23.385 31 28.0075 27.7256 29.9808 23.0553C30.1957 22.5465 30.7824 22.3083 31.2911 22.5233C31.7999 22.7382 32.038 23.3249 31.8231 23.8336C29.5481 29.2182 24.2168 33 18 33C9.71573 33 3 26.2843 3 18C3 9.71573 9.71573 3 18 3C23.5584 3 28.4089 6.02317 31 10.5121V7.11111C31 6.55883 31.4477 6.11111 32 6.11111C32.5523 6.11111 33 6.55883 33 7.11111V12.5556C33 13.1078 32.5523 13.5556 32 13.5556H26.5556C26.0033 13.5556 25.5556 13.1078 25.5556 12.5556C25.5556 12.0033 26.0033 11.5556 26.5556 11.5556H29.293C27.0525 7.63796 22.8334 5 18 5Z"
            fill="currentColor"
        />
    </s.Svg>
);
