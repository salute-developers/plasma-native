import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Contrast0Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 23.3521C14.7659 23.0998 12.625 20.7999 12.625 18C12.625 15.2001 14.7659 12.9002 17.5 12.6479L17.5 23.3521ZM18 10.625C22.0731 10.625 25.375 13.9269 25.375 18C25.375 22.0731 22.0731 25.375 18 25.375C13.9269 25.375 10.625 22.0731 10.625 18C10.625 13.9269 13.9269 10.625 18 10.625Z"
            fill="currentColor"
        />
    </s.Svg>
);
