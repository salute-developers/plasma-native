import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RowHeightMaxOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M5.99824 5.5C5.99824 4.94772 6.44596 4.5 6.99824 4.5H28.9982C29.5505 4.5 29.9982 4.94772 29.9982 5.5C29.9982 6.05228 29.5505 6.5 28.9982 6.5H6.99824C6.44596 6.5 5.99824 6.05228 5.99824 5.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 8.5H28C29.933 8.5 31.5 10.067 31.5 12V24C31.5 25.933 29.933 27.5 28 27.5H8C6.067 27.5 4.5 25.933 4.5 24V12C4.5 10.067 6.067 8.5 8 8.5ZM8 10.5C7.17157 10.5 6.5 11.1716 6.5 12V24C6.5 24.8284 7.17157 25.5 8 25.5H28C28.8284 25.5 29.5 24.8284 29.5 24V12C29.5 11.1716 28.8284 10.5 28 10.5H8Z"
            fill="currentColor"
        />
        <s.Path
            d="M6.9982 29.5C6.44592 29.5 5.9982 29.9477 5.9982 30.5C5.9982 31.0523 6.44592 31.5 6.9982 31.5H28.9982C29.5505 31.5 29.9982 31.0523 29.9982 30.5C29.9982 29.9477 29.5505 29.5 28.9982 29.5H6.9982Z"
            fill="currentColor"
        />
    </s.Svg>
);
