import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DotsVerticalCenteredOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.4 5.20002C9.17 5.20002 9.8 4.57002 9.8 3.80002C9.8 3.03002 9.17 2.40002 8.4 2.40002C7.63 2.40002 7 3.03002 7 3.80002C7 4.57002 7.63 5.20002 8.4 5.20002ZM8.4 6.60002C7.63 6.60002 7 7.23002 7 8.00002C7 8.77002 7.63 9.40002 8.4 9.40002C9.17 9.40002 9.8 8.77002 9.8 8.00002C9.8 7.23002 9.17 6.60002 8.4 6.60002ZM8.4 10.8C7.63 10.8 7 11.43 7 12.2C7 12.97 7.63 13.6 8.4 13.6C9.17 13.6 9.8 12.97 9.8 12.2C9.8 11.43 9.17 10.8 8.4 10.8Z"
            fill="currentColor"
        />
    </s.Svg>
);
