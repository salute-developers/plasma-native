import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LocationPinFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1C4.96243 1 2.5 3.50721 2.5 6.6C2.5 8.71193 3.66983 10.6693 4.85339 12.1199C6.04845 13.5845 7.32863 14.6186 7.69063 14.895C7.87396 15.035 8.12604 15.035 8.30937 14.895C8.67137 14.6186 9.95155 13.5845 11.1466 12.1199C12.3302 10.6693 13.5 8.71193 13.5 6.6C13.5 3.50721 11.0376 1 8 1ZM8 9.05039C9.32894 9.05039 10.4062 7.95349 10.4062 6.60039C10.4062 5.24729 9.32894 4.15039 8 4.15039C6.67106 4.15039 5.59375 5.24729 5.59375 6.60039C5.59375 7.95349 6.67106 9.05039 8 9.05039Z"
            fill="currentColor"
        />
    </s.Svg>
);
