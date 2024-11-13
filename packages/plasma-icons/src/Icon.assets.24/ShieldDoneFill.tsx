import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ShieldDoneFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.552 2.2164C12.2158 1.99557 11.7842 1.99558 11.448 2.2164C11.0583 2.47243 9.84975 3.24085 8.36088 3.94266C6.85003 4.65483 5.14998 5.24984 3.75 5.24984C3.33579 5.24984 3 5.58562 3 5.99984C3 13.0142 5.03086 17.0146 7.21381 19.2721C9.38353 21.5159 11.6144 21.9455 11.8658 21.9879L11.8712 21.9888C11.8712 21.9888 11.8762 21.9896 11.8805 21.9902C11.8835 21.9907 11.8871 21.9913 11.891 21.9918C11.9111 21.9946 11.9503 21.9995 12 21.9995C12.0496 21.9995 12.0889 21.9947 12.109 21.9918C12.1184 21.9905 12.1259 21.9892 12.1288 21.9888L12.1327 21.9881L12.1342 21.9879C12.3856 21.9455 14.6165 21.5159 16.7862 19.2721C18.9691 17.0146 21 13.0142 21 5.99984C21 5.58562 20.6642 5.24984 20.25 5.24984C18.85 5.24984 17.15 4.65483 15.6391 3.94266C14.1502 3.24085 12.9417 2.47243 12.552 2.2164ZM16.5442 10.0161C16.8292 9.71551 16.8166 9.2408 16.5161 8.95578C16.2155 8.67077 15.7408 8.68337 15.4558 8.98393L11.2132 13.458L9.49721 11.9385C9.1871 11.6639 8.7131 11.6927 8.4385 12.0028C8.1639 12.3129 8.19268 12.7869 8.50279 13.0615L10.7614 15.0615C11.0641 15.3295 11.5247 15.3094 11.8028 15.0161L16.5442 10.0161Z"
            fill="currentColor"
        />
    </s.Svg>
);
