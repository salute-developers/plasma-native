import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Done: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5973 3.8903C14.796 4.08211 14.8015 4.39864 14.6097 4.5973L7.36832 12.0973C7.2741 12.1949 7.14427 12.25 7.00862 12.25C6.87297 12.25 6.74314 12.1949 6.64892 12.0973L3.8903 9.24016C3.69849 9.0415 3.70405 8.72496 3.9027 8.53316C4.10136 8.34135 4.41789 8.3469 4.6097 8.54556L7.00862 11.0302L13.8903 3.9027C14.0821 3.70405 14.3986 3.69849 14.5973 3.8903Z"
            fill="currentColor"
        />
    </s.Svg>
);
