import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SortBigSmall: React.FC<IconProps> = (props) => (
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
            d="M1.5 8C1.5 7.72386 1.72386 7.5 2 7.5H10C10.2761 7.5 10.5 7.72386 10.5 8C10.5 8.27614 10.2761 8.5 10 8.5H2C1.72386 8.5 1.5 8.27614 1.5 8Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 11.5C1.5 11.2239 1.72386 11 2 11H6C6.27614 11 6.5 11.2239 6.5 11.5C6.5 11.7761 6.27614 12 6 12H2C1.72386 12 1.5 11.7761 1.5 11.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
