import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DotsHorizontalOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 15C7.35 15 6 16.35 6 18C6 19.65 7.35 21 9 21C10.65 21 12 19.65 12 18C12 16.35 10.65 15 9 15ZM27 15C25.35 15 24 16.35 24 18C24 19.65 25.35 21 27 21C28.65 21 30 19.65 30 18C30 16.35 28.65 15 27 15ZM18 15C16.35 15 15 16.35 15 18C15 19.65 16.35 21 18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15Z"
            fill="currentColor"
        />
    </s.Svg>
);
