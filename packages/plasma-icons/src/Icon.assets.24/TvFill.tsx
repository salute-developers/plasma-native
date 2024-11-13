import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TvFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M2.13624 4.68251C2 4.9499 2 5.29993 2 6V15C2 15.7001 2 16.0501 2.13624 16.3175C2.25608 16.5527 2.44731 16.7439 2.68251 16.8638C2.9499 17 3.29993 17 4 17H20C20.7001 17 21.0501 17 21.3175 16.8638C21.5527 16.7439 21.7439 16.5527 21.8638 16.3175C22 16.0501 22 15.7001 22 15V6C22 5.29993 22 4.9499 21.8638 4.68251C21.7439 4.44731 21.5527 4.25608 21.3175 4.13624C21.0501 4 20.7001 4 20 4H4C3.29993 4 2.9499 4 2.68251 4.13624C2.44731 4.25608 2.25608 4.44731 2.13624 4.68251Z"
            fill="currentColor"
        />
        <s.Path d="M20 18H4V19.5H20V18Z" fill="currentColor" />
    </s.Svg>
);
