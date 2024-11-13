import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RowHeightOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M2.5 2.25C2.5 1.97386 2.72386 1.75 3 1.75H13C13.2761 1.75 13.5 1.97386 13.5 2.25C13.5 2.52614 13.2761 2.75 13 2.75H3C2.72386 2.75 2.5 2.52614 2.5 2.25Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5626 3.7H3.46262C2.46392 3.7 1.76262 4.54379 1.76262 5.44667V6.75333C1.76262 7.22092 1.95071 7.67265 2.27078 7.99954C1.95016 8.32651 1.76172 8.77865 1.76172 9.24667V10.5533C1.76172 11.4562 2.46302 12.3 3.46172 12.3H12.5617C13.5604 12.3 14.2617 11.4562 14.2617 10.5533V9.24667C14.2617 8.77909 14.0736 8.32736 13.7536 8.00046C14.0742 7.6735 14.2626 7.22135 14.2626 6.75333V5.44667C14.2626 4.54379 13.5613 3.7 12.5626 3.7ZM2.76262 5.44667C2.76262 5.0343 3.07602 4.7 3.46262 4.7H12.5626C12.9492 4.7 13.2626 5.03429 13.2626 5.44667V6.75333C13.2626 7.16571 12.9492 7.5 12.5626 7.5H3.46262C3.07602 7.5 2.76262 7.16571 2.76262 6.75333V5.44667ZM2.76172 9.24667C2.76172 8.8343 3.07512 8.5 3.46172 8.5H12.5617C12.9483 8.5 13.2617 8.8343 13.2617 9.24667V10.5533C13.2617 10.9657 12.9483 11.3 12.5617 11.3H3.46172C3.07512 11.3 2.76172 10.9657 2.76172 10.5533V9.24667Z"
            fill="currentColor"
        />
        <s.Path
            d="M3 13.3C2.72386 13.3 2.5 13.5239 2.5 13.8C2.5 14.0761 2.72386 14.3 3 14.3H13C13.2761 14.3 13.5 14.0761 13.5 13.8C13.5 13.5239 13.2761 13.3 13 13.3H3Z"
            fill="currentColor"
        />
    </s.Svg>
);
