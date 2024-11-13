import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoneCircleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.00195 7.99821C2.00195 4.68549 4.68744 2 8.00016 2C11.3129 2 13.9984 4.68549 13.9984 7.99821C13.9984 11.3109 11.3129 13.9964 8.00016 13.9964C4.68744 13.9964 2.00195 11.3109 2.00195 7.99821ZM8.00016 1C4.13516 1 1.00195 4.1332 1.00195 7.99821C1.00195 11.8632 4.13516 14.9964 8.00016 14.9964C11.8652 14.9964 14.9984 11.8632 14.9984 7.99821C14.9984 4.1332 11.8652 1 8.00016 1ZM11.8589 6.25018C12.0575 6.05825 12.0628 5.74171 11.8709 5.54317C11.679 5.34463 11.3624 5.33926 11.1639 5.53119L6.42428 10.1128L4.83384 8.57539C4.6353 8.38347 4.31876 8.38883 4.12683 8.58738C3.93491 8.78592 3.94027 9.10246 4.13882 9.29438L6.07677 11.1677C6.27057 11.3551 6.57799 11.3551 6.7718 11.1677L11.8589 6.25018Z"
            fill="currentColor"
        />
    </s.Svg>
);
