import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PowerWireFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3C10 2.44772 9.55228 2 9 2C8.44772 2 8 2.44772 8 3V7H7.75C6.7835 7 6 7.7835 6 8.75V12.1603C6 13.5469 6.60592 14.8643 7.65874 15.7667L9.4127 17.2701C9.46811 17.3176 9.5 17.387 9.5 17.4599V22H14.5V17.4599C14.5 17.387 14.5319 17.3176 14.5873 17.2701L16.3413 15.7667C17.3941 14.8643 18 13.5469 18 12.1603V8.75C18 7.7835 17.2165 7 16.25 7H16V3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V7H10V3Z"
            fill="currentColor"
        />
    </s.Svg>
);
