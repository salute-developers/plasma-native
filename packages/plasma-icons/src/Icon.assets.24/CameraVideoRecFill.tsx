import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoRecFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 8.85714C2 7.27919 3.27919 6 4.85714 6H13.1429C14.7208 6 16 7.27919 16 8.85714V15.1429C16 16.7208 14.7208 18 13.1429 18H4.85714C3.27919 18 2 16.7208 2 15.1429V8.85714ZM9 14.25C10.2426 14.25 11.25 13.2426 11.25 12C11.25 10.7574 10.2426 9.75 9 9.75C7.75736 9.75 6.75 10.7574 6.75 12C6.75 13.2426 7.75736 14.25 9 14.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M20.3745 8.12587C20.9745 7.52592 22.0003 7.95084 22.0003 8.79931V15.5018C22.0003 16.3676 20.9386 16.7843 20.3497 16.1496L17.1241 12.6726C16.7758 12.2972 16.7867 11.7136 17.1488 11.3515L20.3745 8.12587Z"
            fill="currentColor"
        />
    </s.Svg>
);
