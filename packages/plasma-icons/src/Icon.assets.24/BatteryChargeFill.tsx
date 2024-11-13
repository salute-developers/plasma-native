import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryChargeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4.10819C15.2884 4.15982 15.5316 4.2361 15.7528 4.34878C16.3549 4.65557 16.8444 5.14511 17.1512 5.74723C17.5 6.43175 17.5 7.32783 17.5 9.12V16.88C17.5 18.6722 17.5 19.5683 17.1512 20.2528C16.8444 20.8549 16.3549 21.3444 15.7528 21.6512C15.0683 22 14.1722 22 12.38 22H11.62C9.82783 22 8.93175 22 8.24723 21.6512C7.64511 21.3444 7.15557 20.8549 6.84878 20.2528C6.5 19.5683 6.5 18.6722 6.5 16.88V9.12C6.5 7.32783 6.5 6.43175 6.84878 5.74723C7.15557 5.14511 7.64511 4.65557 8.24723 4.34878C8.46838 4.2361 8.71161 4.15982 9 4.10819V3ZM8.80463 13.2998C8.64271 13.5234 8.80476 14.0005 9.08334 14.0005H11.7914L10.7697 16.7854C10.7243 17.1337 11.1811 17.3105 11.3881 17.0248L15.269 12.7015C15.4309 12.4779 15.2786 12.0005 15 12.0005H12.2598L13.2501 9.21595C13.2954 8.86759 12.8386 8.69075 12.6316 8.97655L8.80463 13.2998Z"
            fill="currentColor"
        />
    </s.Svg>
);
