import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SortBigSmall: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 9.5C4 8.94772 4.44772 8.5 5 8.5H30C30.5523 8.5 31 8.94772 31 9.5C31 10.0523 30.5523 10.5 30 10.5H5C4.44772 10.5 4 10.0523 4 9.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 17.5C4 16.9477 4.44772 16.5 5 16.5H22C22.5523 16.5 23 16.9477 23 17.5C23 18.0523 22.5523 18.5 22 18.5H5C4.44772 18.5 4 18.0523 4 17.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 25.5C4 24.9477 4.44772 24.5 5 24.5H15C15.5523 24.5 16 24.9477 16 25.5C16 26.0523 15.5523 26.5 15 26.5H5C4.44772 26.5 4 26.0523 4 25.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
