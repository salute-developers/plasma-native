import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryHoriz10Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.3 5.95455C14.6866 5.95455 15 6.26795 15 6.65455V9.34545C15 9.73205 14.6866 10.0455 14.3 10.0455H13.5157C13.4799 10.2276 13.4287 10.3839 13.3559 10.5269C13.1411 10.9484 12.7984 11.2911 12.3769 11.5059C11.8978 11.75 11.2705 11.75 10.016 11.75H4.584C3.32948 11.75 2.70222 11.75 2.22306 11.5059C1.80158 11.2911 1.4589 10.9484 1.24415 10.5269C1 10.0478 1 9.42052 1 8.166V7.834C1 6.57948 1 5.95222 1.24415 5.47306C1.4589 5.05158 1.80158 4.7089 2.22306 4.49414C2.70222 4.25 3.32948 4.25 4.584 4.25H10.016C11.2705 4.25 11.8978 4.25 12.3769 4.49414C12.7984 4.7089 13.1411 5.05158 13.3559 5.47306C13.4287 5.61611 13.4799 5.77235 13.5157 5.95455H14.3ZM2.74981 5.27254C2.36321 5.27254 2.04981 5.58594 2.04981 5.97254V10.0271C2.04981 10.4137 2.36321 10.7271 2.74981 10.7271H3.09981C3.29311 10.7271 3.44981 10.5704 3.44981 10.3771V5.62254C3.44981 5.42924 3.29311 5.27254 3.09981 5.27254H2.74981Z"
            fill="currentColor"
        />
    </s.Svg>
);
