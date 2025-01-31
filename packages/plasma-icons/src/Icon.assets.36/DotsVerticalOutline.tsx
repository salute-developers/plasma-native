import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DotsVerticalOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 12C28.65 12 30 10.65 30 9C30 7.35 28.65 6 27 6C25.35 6 24 7.35 24 9C24 10.65 25.35 12 27 12ZM27 15C25.35 15 24 16.35 24 18C24 19.65 25.35 21 27 21C28.65 21 30 19.65 30 18C30 16.35 28.65 15 27 15ZM27 24C25.35 24 24 25.35 24 27C24 28.65 25.35 30 27 30C28.65 30 30 28.65 30 27C30 25.35 28.65 24 27 24Z"
            fill="currentColor"
        />
    </s.Svg>
);
