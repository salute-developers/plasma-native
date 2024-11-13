import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowWideUpOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.05711 10.287C3.94103 10.0068 4.00519 9.68417 4.21969 9.46967L11.4697 2.21967C11.7626 1.92678 12.2375 1.92678 12.5304 2.21967L19.7804 9.46967C19.9949 9.68417 20.059 10.0068 19.9429 10.287C19.8268 10.5673 19.5534 10.75 19.25 10.75L16 10.75V20.25C16 21.2165 15.2165 22 14.25 22H9.75002C8.78352 22 8.00002 21.2165 8.00002 20.25V10.75H4.75002C4.44668 10.75 4.1732 10.5673 4.05711 10.287ZM6.56068 9.25H8.75002C9.16424 9.25 9.50002 9.58579 9.50002 10V20.25C9.50002 20.3881 9.61195 20.5 9.75002 20.5H14.25C14.3881 20.5 14.5 20.3881 14.5 20.25V10C14.5 9.58579 14.8358 9.25 15.25 9.25H17.4394L12 3.81066L6.56068 9.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
