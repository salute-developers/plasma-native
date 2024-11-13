import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowWideTraceR: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7343 6.29378C21.4485 6.00728 21.0182 5.92128 20.6442 6.07592C20.2702 6.23056 20.0263 6.59535 20.0263 7.00003V12.0685H11.1889C10.6366 12.0685 10.1889 12.5162 10.1889 13.0685C10.1889 13.6208 10.6366 14.0685 11.1889 14.0685H21.0263C21.5786 14.0685 22.0263 13.6208 22.0263 13.0685V9.41838L30.5864 17.9991L22.0263 26.5799V22.9297C22.0263 22.3775 21.5786 21.9297 21.0263 21.9297H4C3.44772 21.9297 3 22.3775 3 22.9297C3 23.482 3.44772 23.9297 4 23.9297H20.0263V28.9982C20.0263 29.4029 20.2702 29.7677 20.6442 29.9223C21.0182 30.077 21.4485 29.991 21.7343 29.7045L32.7068 18.7054C33.0962 18.315 33.0962 17.6832 32.7068 17.2929L21.7343 6.29378ZM6.64844 16.9989C6.09615 16.9989 5.64844 17.4466 5.64844 17.9989C5.64844 18.5512 6.09615 18.9989 6.64844 18.9989H11.9455C12.4978 18.9989 12.9455 18.5512 12.9455 17.9989C12.9455 17.4466 12.4978 16.9989 11.9455 16.9989H6.64844Z"
            fill="currentColor"
        />
    </s.Svg>
);
