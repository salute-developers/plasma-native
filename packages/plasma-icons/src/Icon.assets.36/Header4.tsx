import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header4: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 19.0743V26H18.25V10H16V16.3609H10.7153V10H8.5V26H10.7153V19.0743H16ZM19.5 19.92L25.475 10H27.8542V19.5314H29.5V22.0229H27.8542V26H25.7791V22.0229H19.5V19.92ZM21.8614 19.5314H25.7791V13.1771L21.8614 19.5314Z"
            fill="currentColor"
        />
    </s.Svg>
);