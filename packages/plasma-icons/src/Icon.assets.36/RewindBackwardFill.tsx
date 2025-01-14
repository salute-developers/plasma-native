import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RewindBackwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1008 22.9952V13.0091L27.5752 9.08C29.0747 8.17003 30.9925 9.24954 30.9925 11.0035V25.0007C30.9925 26.7547 29.0747 27.8342 27.5752 26.9242L21.1008 22.9952ZM4.08367 16.0786C2.64008 16.9547 2.64008 19.0496 4.08367 19.9256L15.6161 26.9242C17.1156 27.8342 19.0334 26.7547 19.0334 25.0007V11.0035C19.0334 9.24954 17.1156 8.17003 15.6161 9.08L4.08367 16.0786Z"
            fill="currentColor"
        />
    </s.Svg>
);
