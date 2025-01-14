import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoRecFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 13.2857C3 10.9188 4.91879 9 7.28574 9H19.7146C22.0815 9 24.0003 10.9188 24.0003 13.2857V22.7143C24.0003 25.0812 22.0815 27 19.7146 27H7.28574C4.91879 27 3 25.0812 3 22.7143V13.2857ZM13.5 21.5C15.433 21.5 17 19.933 17 18C17 16.067 15.433 14.5 13.5 14.5C11.567 14.5 10 16.067 10 18C10 19.933 11.567 21.5 13.5 21.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M30.5615 12.1886C31.4615 11.2887 33.0003 11.9261 33.0003 13.1988V23.2526C33.0003 24.5513 31.4077 25.1763 30.5244 24.2242L25.6858 19.0088C25.1633 18.4456 25.1797 17.5702 25.7229 17.027L30.5615 12.1886Z"
            fill="currentColor"
        />
    </s.Svg>
);
