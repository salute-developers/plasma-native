import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryHorizEmptyFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 6.65455C15 6.26795 14.6866 5.95455 14.3 5.95455H13.5157C13.4799 5.77235 13.4287 5.61611 13.3559 5.47306C13.1411 5.05158 12.7984 4.7089 12.3769 4.49415C11.8978 4.25 11.2705 4.25 10.016 4.25H4.584C3.32948 4.25 2.70222 4.25 2.22306 4.49415C1.80158 4.7089 1.4589 5.05158 1.24415 5.47306C1 5.95222 1 6.57948 1 7.834V8.166C1 9.42052 1 10.0478 1.24415 10.5269C1.4589 10.9484 1.80158 11.2911 2.22306 11.5059C2.70222 11.75 3.32948 11.75 4.584 11.75H10.016C11.2705 11.75 11.8978 11.75 12.3769 11.5059C12.7984 11.2911 13.1411 10.9484 13.3559 10.5269C13.4287 10.3839 13.4799 10.2276 13.5157 10.0455H14.3C14.6866 10.0455 15 9.73205 15 9.34545V6.65455Z"
            fill="currentColor"
        />
    </s.Svg>
);
