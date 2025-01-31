import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M4.98781 2.75C2.82637 2.75 1.5 4.57887 1.5 6.07896C1.5 8.75703 4.09751 11.2764 6.51712 13.1523C7.01546 13.5386 7.26463 13.7318 7.57792 13.8164C7.83726 13.8865 8.16274 13.8865 8.42208 13.8164C8.73537 13.7318 8.98454 13.5386 9.48288 13.1523C11.9025 11.2764 14.5 8.75703 14.5 6.07896C14.5 4.57887 13.1736 2.75 11.0122 2.75C9.80505 2.75 8.77381 3.68118 8 4.56579C7.22619 3.68118 6.19493 2.75 4.98781 2.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
