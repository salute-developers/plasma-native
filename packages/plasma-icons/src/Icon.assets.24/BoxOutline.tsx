import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BoxOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M11.5 12.75C11.5 12.3358 11.8358 12 12.25 12H16.25C16.6642 12 17 12.3358 17 12.75C17 13.1642 16.6642 13.5 16.25 13.5H12.25C11.8358 13.5 11.5 13.1642 11.5 12.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.25 15C13.8358 15 13.5 15.3358 13.5 15.75C13.5 16.1642 13.8358 16.5 14.25 16.5H16.25C16.6642 16.5 17 16.1642 17 15.75C17 15.3358 16.6642 15 16.25 15H14.25Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5.25C3 4.00736 4.00736 3 5.25 3H18.75C19.9926 3 21 4.00736 21 5.25V8.25C21 8.85474 20.5706 9.35918 20 9.475V17.75C20 19.5449 18.5449 21 16.75 21H7.25C5.45507 21 4 19.5449 4 17.75V9.475C3.42944 9.35918 3 8.85474 3 8.25V5.25ZM5.25 4.5C4.83579 4.5 4.5 4.83579 4.5 5.25V8H19.5V5.25C19.5 4.83579 19.1642 4.5 18.75 4.5H5.25ZM5.5 9.5V17.75C5.5 18.7165 6.2835 19.5 7.25 19.5H16.75C17.7165 19.5 18.5 18.7165 18.5 17.75V9.5H5.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
