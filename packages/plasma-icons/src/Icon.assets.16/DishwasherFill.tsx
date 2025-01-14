import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DishwasherFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.025 1C2.76856 1 1.75 2.01855 1.75 3.275L1.75 5.225H14.25L14.25 3.275C14.25 2.01855 13.2315 1 11.975 1H4.025ZM5.22222 3.8001C5.22222 4.1867 4.9113 4.5001 4.52777 4.5001C4.14424 4.5001 3.83333 4.1867 3.83333 3.8001C3.83333 3.4135 4.14424 3.1001 4.52777 3.1001C4.9113 3.1001 5.22222 3.4135 5.22222 3.8001ZM8.52083 3.2998C8.24469 3.2998 8.02083 3.52366 8.02083 3.7998C8.02083 4.07595 8.24469 4.2998 8.52083 4.2998H11.6458C11.922 4.2998 12.1458 4.07595 12.1458 3.7998C12.1458 3.52366 11.922 3.2998 11.6458 3.2998H8.52083Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.25 6.225H1.75L1.75 12.725C1.75 13.9814 2.76856 15 4.025 15H11.975C13.2315 15 14.25 13.9814 14.25 12.725L14.25 6.225Z"
            fill="currentColor"
        />
    </s.Svg>
);
