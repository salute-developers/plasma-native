import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Battery10Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.95455 1.7C5.95455 1.3134 6.26795 1 6.65455 1H9.34545C9.73205 1 10.0455 1.3134 10.0455 1.7V2.48427C10.2276 2.52013 10.3839 2.57126 10.5269 2.64415C10.9484 2.8589 11.2911 3.20158 11.5059 3.62306C11.75 4.10222 11.75 4.72948 11.75 5.984V11.416C11.75 12.6705 11.75 13.2978 11.5059 13.7769C11.2911 14.1984 10.9484 14.5411 10.5269 14.7559C10.0478 15 9.42052 15 8.166 15H7.834C6.57948 15 5.95222 15 5.47306 14.7559C5.05158 14.5411 4.7089 14.1984 4.49414 13.7769C4.25 13.2978 4.25 12.6705 4.25 11.416V5.984C4.25 4.72948 4.25 4.10222 4.49414 3.62306C4.7089 3.20158 5.05158 2.8589 5.47306 2.64415C5.61611 2.57126 5.77235 2.52013 5.95455 2.48427V1.7ZM5.27254 13.2502C5.27254 13.6368 5.58594 13.9502 5.97254 13.9502H10.0271C10.4137 13.9502 10.7271 13.6368 10.7271 13.2502V12.9002C10.7271 12.7069 10.5704 12.5502 10.3771 12.5502H5.62254C5.42924 12.5502 5.27254 12.7069 5.27254 12.9002V13.2502Z"
            fill="currentColor"
        />
    </s.Svg>
);