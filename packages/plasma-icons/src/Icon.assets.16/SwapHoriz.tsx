import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwapHoriz: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8469 1.89225C10.6493 1.69933 10.3327 1.70311 10.1398 1.9007C9.94688 2.09828 9.95067 2.41484 10.1482 2.60775L11.7689 4.19018H3C2.72386 4.19018 2.5 4.41403 2.5 4.69018C2.5 4.96632 2.72386 5.19018 3 5.19018H11.7689L10.1482 6.77258C9.95067 6.9655 9.94688 7.28206 10.1398 7.47964C10.3327 7.67722 10.6493 7.681 10.8469 7.48809L13.346 5.04793C13.4424 4.95384 13.4967 4.82486 13.4967 4.69018C13.4967 4.5555 13.4424 4.42651 13.346 4.33243L10.8469 1.89225ZM5.15119 8.51627C5.34877 8.32336 5.66533 8.32714 5.85825 8.52472C6.05116 8.7223 6.04738 9.03886 5.8498 9.23177L4.22911 10.8142H12.998C13.2742 10.8142 13.498 11.0381 13.498 11.3142C13.498 11.5903 13.2742 11.8142 12.998 11.8142H4.22912L5.8498 13.3966C6.04738 13.5895 6.05116 13.9061 5.85825 14.1037C5.66533 14.3012 5.34877 14.305 5.15119 14.1121L2.65201 11.672C2.55564 11.5779 2.50131 11.4489 2.50131 11.3142C2.50131 11.1795 2.55564 11.0505 2.65201 10.9564L5.15119 8.51627Z"
            fill="currentColor"
        />
    </s.Svg>
);
