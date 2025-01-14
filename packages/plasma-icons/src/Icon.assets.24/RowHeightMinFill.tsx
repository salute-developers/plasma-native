import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RowHeightMinFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H4.75C4.33579 4.5 4 4.16421 4 3.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M3 7C3 6.44771 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7V8.33333C21 8.88562 20.5523 9.33333 20 9.33333H4C3.44772 9.33333 3 8.88562 3 8.33333V7Z"
            fill="currentColor"
        />
        <s.Path
            d="M3 11.3333C3 10.781 3.44772 10.3333 4 10.3333H20C20.5523 10.3333 21 10.781 21 11.3333V12.6667C21 13.219 20.5523 13.6667 20 13.6667H4C3.44772 13.6667 3 13.219 3 12.6667V11.3333Z"
            fill="currentColor"
        />
        <s.Path
            d="M4 14.6667C3.44772 14.6667 3 15.1144 3 15.6667V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V15.6667C21 15.1144 20.5523 14.6667 20 14.6667H4Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.75 19.5C4.33579 19.5 4 19.8358 4 20.25C4 20.6642 4.33579 21 4.75 21H19.25C19.6642 21 20 20.6642 20 20.25C20 19.8358 19.6642 19.5 19.25 19.5H4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
