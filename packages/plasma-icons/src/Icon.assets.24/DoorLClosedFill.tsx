import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoorLClosedFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.24524 3.22852C5 3.70982 5 4.33988 5 5.6V18.4C5 19.6601 5 20.2902 5.24524 20.7715C5.46095 21.1948 5.80516 21.539 6.22852 21.7548C6.70982 22 7.33988 22 8.6 22H15.4C16.6601 22 17.2902 22 17.7715 21.7548C18.1948 21.539 18.539 21.1948 18.7548 20.7715C19 20.2902 19 19.6601 19 18.4V5.6C19 4.33988 19 3.70982 18.7548 3.22852C18.539 2.80516 18.1948 2.46095 17.7715 2.24524C17.2902 2 16.6601 2 15.4 2H8.6C7.33988 2 6.70982 2 6.22852 2.24524C5.80516 2.46095 5.46095 2.80516 5.24524 3.22852ZM14.5 14C15.3284 14 16 13.3284 16 12.5C16 11.6716 15.3284 11 14.5 11C13.6716 11 13 11.6716 13 12.5C13 13.3284 13.6716 14 14.5 14Z"
            fill="currentColor"
        />
    </s.Svg>
);
