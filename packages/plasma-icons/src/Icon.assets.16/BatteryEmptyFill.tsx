import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryEmptyFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.65455 1C6.26795 1 5.95455 1.3134 5.95455 1.7V2.48427C5.77235 2.52013 5.61611 2.57126 5.47306 2.64414C5.05158 2.8589 4.7089 3.20158 4.49415 3.62306C4.25 4.10222 4.25 4.72948 4.25 5.984V11.416C4.25 12.6705 4.25 13.2978 4.49415 13.7769C4.7089 14.1984 5.05158 14.5411 5.47306 14.7559C5.95222 15 6.57948 15 7.834 15H8.166C9.42052 15 10.0478 15 10.5269 14.7559C10.9484 14.5411 11.2911 14.1984 11.5059 13.7769C11.75 13.2978 11.75 12.6705 11.75 11.416V5.984C11.75 4.72948 11.75 4.10222 11.5059 3.62306C11.2911 3.20158 10.9484 2.8589 10.5269 2.64414C10.3839 2.57126 10.2276 2.52013 10.0455 2.48427V1.7C10.0455 1.3134 9.73205 1 9.34545 1H6.65455Z"
            fill="currentColor"
        />
    </s.Svg>
);