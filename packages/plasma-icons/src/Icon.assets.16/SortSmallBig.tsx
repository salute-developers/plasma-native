import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SortSmallBig: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 4.5C1.5 4.22386 1.72386 4 2 4H14C14.2761 4 14.5 4.22386 14.5 4.5C14.5 4.77614 14.2761 5 14 5H2C1.72386 5 1.5 4.77614 1.5 4.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 8C5.5 7.72386 5.72386 7.5 6 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H6C5.72386 8.5 5.5 8.27614 5.5 8Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 11.5C9.5 11.2239 9.72386 11 10 11H14C14.2761 11 14.5 11.2239 14.5 11.5C14.5 11.7761 14.2761 12 14 12H10C9.72386 12 9.5 11.7761 9.5 11.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
