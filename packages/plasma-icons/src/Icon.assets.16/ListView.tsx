import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ListView: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 3.5C4 3.22386 4.22386 3 4.5 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H4.5C4.22386 4 4 3.77614 4 3.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M3 3.5C3 3.91421 2.66421 4.25 2.25 4.25C1.83579 4.25 1.5 3.91421 1.5 3.5C1.5 3.08579 1.83579 2.75 2.25 2.75C2.66421 2.75 3 3.08579 3 3.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8C4 7.72386 4.22386 7.5 4.5 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H4.5C4.22386 8.5 4 8.27614 4 8Z"
            fill="currentColor"
        />
        <s.Path
            d="M3 8C3 8.41421 2.66421 8.75 2.25 8.75C1.83579 8.75 1.5 8.41421 1.5 8C1.5 7.58579 1.83579 7.25 2.25 7.25C2.66421 7.25 3 7.58579 3 8Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12.5C4 12.2239 4.22386 12 4.5 12H14C14.2761 12 14.5 12.2239 14.5 12.5C14.5 12.7761 14.2761 13 14 13H4.5C4.22386 13 4 12.7761 4 12.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M3 12.5C3 12.9142 2.66421 13.25 2.25 13.25C1.83579 13.25 1.5 12.9142 1.5 12.5C1.5 12.0858 1.83579 11.75 2.25 11.75C2.66421 11.75 3 12.0858 3 12.5Z"
            fill="currentColor"
        />
    </s.Svg>
);