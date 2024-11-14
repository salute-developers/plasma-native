import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SendFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M21.5817 12.6727C21.8379 12.5464 22 12.2856 22 12C22 11.7145 21.8379 11.4537 21.5817 11.3274L3.33175 2.32736C3.04851 2.18768 2.70811 2.2404 2.48039 2.45921C2.25266 2.67801 2.1864 3.01603 2.31467 3.30462L4.97189 9.28338C5.07773 9.52152 5.27235 9.70893 5.51431 9.80572L10.4197 11.7679C10.6293 11.8517 10.6293 12.1483 10.4197 12.2321L5.51433 14.1943C5.27237 14.2911 5.07775 14.4785 4.97191 14.7166L2.31467 20.6954C2.1864 20.984 2.25266 21.322 2.48039 21.5408C2.70811 21.7596 3.0485 21.8124 3.33174 21.6727L21.5817 12.6727Z"
            fill="currentColor"
        />
    </s.Svg>
);