import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ShieldFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.448 2.2164C11.7842 1.99558 12.2158 1.99557 12.552 2.2164C12.9417 2.47243 14.1502 3.24085 15.6391 3.94266C17.15 4.65483 18.85 5.24984 20.25 5.24984C20.6642 5.24984 21 5.58562 21 5.99984C21 13.0142 18.9691 17.0146 16.7862 19.2721C14.6165 21.5159 12.3856 21.9455 12.1342 21.9879L12.1327 21.9881L12.1288 21.9888C12.1259 21.9892 12.1184 21.9905 12.109 21.9918C12.0889 21.9947 12.0496 21.9995 12 21.9995C11.9503 21.9995 11.9111 21.9946 11.891 21.9918C11.8816 21.9905 11.8741 21.9892 11.8712 21.9888L11.8658 21.9879C11.6144 21.9455 9.38353 21.5159 7.21381 19.2721C5.03086 17.0146 3 13.0142 3 5.99984C3 5.58562 3.33579 5.24984 3.75 5.24984C5.14998 5.24984 6.85003 4.65483 8.36088 3.94266C9.84975 3.24085 11.0583 2.47243 11.448 2.2164Z"
            fill="currentColor"
        />
    </s.Svg>
);