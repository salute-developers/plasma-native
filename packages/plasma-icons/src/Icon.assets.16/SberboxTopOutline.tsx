import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboxTopOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 6.2C0.5 5.53726 1.03726 5 1.7 5H14.65C15.3127 5 15.85 5.53726 15.85 6.2V8.65C15.85 9.31274 15.3127 9.85 14.65 9.85H1.7C1.03726 9.85 0.5 9.31274 0.5 8.65V6.2ZM1.7 6C1.58954 6 1.5 6.08954 1.5 6.2V8.65C1.5 8.76046 1.58954 8.85 1.7 8.85H14.65C14.7605 8.85 14.85 8.76046 14.85 8.65V6.2C14.85 6.08954 14.7605 6 14.65 6H1.7ZM9.05 7.425C9.05 7.90825 8.65825 8.3 8.175 8.3C7.69175 8.3 7.3 7.90825 7.3 7.425C7.3 6.94175 7.69175 6.55 8.175 6.55C8.65825 6.55 9.05 6.94175 9.05 7.425ZM3.97501 10.5996C3.69886 10.5996 3.47501 10.8235 3.47501 11.0996C3.47501 11.3758 3.69886 11.5996 3.97501 11.5996H12.375C12.6511 11.5996 12.875 11.3758 12.875 11.0996C12.875 10.8235 12.6511 10.5996 12.375 10.5996H3.97501Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.60001 8.97461V5.97461H3.60001V8.97461H2.60001Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 8.97461V5.97461H13.75V8.97461H12.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
