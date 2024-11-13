import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RowHeightMinOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H4.75C4.33579 4.5 4 4.16421 4 3.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 6H19C20.1046 6 21 6.89543 21 8V9C21 9.47297 20.8358 9.9076 20.5613 10.25C20.8358 10.5924 21 11.027 21 11.5V12.5C21 12.973 20.8358 13.4076 20.5613 13.75C20.8358 14.0924 21 14.527 21 15V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V15C3 14.527 3.16418 14.0924 3.43866 13.75C3.16418 13.4076 3 12.973 3 12.5V11.5C3 11.027 3.16418 10.5924 3.43866 10.25C3.16418 9.9076 3 9.47297 3 9V8C3 6.89543 3.89543 6 5 6ZM5 14.5C4.72386 14.5 4.5 14.7239 4.5 15V16C4.5 16.2761 4.72386 16.5 5 16.5H19C19.2761 16.5 19.5 16.2761 19.5 16V15C19.5 14.7239 19.2761 14.5 19 14.5H5ZM4.5 11.5C4.5 11.2239 4.72386 11 5 11H19C19.2761 11 19.5 11.2239 19.5 11.5V12.5C19.5 12.7761 19.2761 13 19 13H5C4.72386 13 4.5 12.7761 4.5 12.5V11.5ZM5 7.5C4.72386 7.5 4.5 7.72386 4.5 8V9C4.5 9.27614 4.72386 9.5 5 9.5H19C19.2761 9.5 19.5 9.27614 19.5 9V8C19.5 7.72386 19.2761 7.5 19 7.5H5Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.75 19.5C4.33579 19.5 4 19.8358 4 20.25C4 20.6642 4.33579 21 4.75 21H19.25C19.6642 21 20 20.6642 20 20.25C20 19.8358 19.6642 19.5 19.25 19.5H4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
