import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header4: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6582 12.705V17.25H12.0646V6.75H10.6582V10.9243H6.89486V6.75H5.5V17.25H6.89486V12.705H10.6582ZM12.8457 13.26L16.8788 6.75H18.4848V13.005H19.5957V14.64H18.4848V17.25H17.0841V14.64H12.8457V13.26ZM14.4396 13.005H17.0841V8.835L14.4396 13.005Z"
            fill="currentColor"
        />
    </s.Svg>
);