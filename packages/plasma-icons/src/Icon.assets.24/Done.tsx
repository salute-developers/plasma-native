import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Done: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0303 6.46967C20.3232 6.76256 20.3232 7.23744 20.0303 7.53033L9.53033 18.0303C9.23744 18.3232 8.76256 18.3232 8.46967 18.0303L4.46967 14.0303C4.17678 13.7374 4.17678 13.2626 4.46967 12.9697C4.76256 12.6768 5.23744 12.6768 5.53033 12.9697L9 16.4393L18.9697 6.46967C19.2626 6.17678 19.7374 6.17678 20.0303 6.46967Z"
            fill="currentColor"
        />
    </s.Svg>
);
