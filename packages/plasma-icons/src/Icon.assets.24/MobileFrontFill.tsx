import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MobileFrontFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7548 20.7715C18 20.2902 18 19.6601 18 18.4V5.6C18 4.33988 18 3.70982 17.7548 3.22852C17.539 2.80516 17.1948 2.46095 16.7715 2.24524C16.2902 2 15.6601 2 14.4 2H9.6C8.33988 2 7.70982 2 7.22852 2.24524C6.80516 2.46095 6.46095 2.80516 6.24524 3.22852C6 3.70982 6 4.33988 6 5.6V18.4C6 19.6601 6 20.2902 6.24524 20.7715C6.46095 21.1948 6.80516 21.539 7.22852 21.7548C7.70982 22 8.33988 22 9.6 22H14.4C15.6601 22 16.2902 22 16.7715 21.7548C17.1948 21.539 17.539 21.1948 17.7548 20.7715ZM10.75 4.5C10.3358 4.5 10 4.83579 10 5.25C10 5.66421 10.3358 6 10.75 6H13.25C13.6642 6 14 5.66421 14 5.25C14 4.83579 13.6642 4.5 13.25 4.5H10.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
