import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.12887 5.37838C3.33389 5.17335 3.6663 5.17335 3.87133 5.37838L8.0001 9.50715L12.1289 5.37838C12.3339 5.17335 12.6663 5.17335 12.8713 5.37838C13.0764 5.5834 13.0764 5.91582 12.8713 6.12084L8.37133 10.6208C8.1663 10.8259 7.83389 10.8259 7.62887 10.6208L3.12887 6.12084C2.92384 5.91582 2.92384 5.5834 3.12887 5.37838Z"
            fill="currentColor"
        />
    </s.Svg>
);
