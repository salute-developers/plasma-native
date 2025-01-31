import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChartDistributionFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.25 6.75V31.5H21.75V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H16.5C15.2574 4.5 14.25 5.50736 14.25 6.75ZM24.75 12.75V31.5H32.25V12.75C32.25 11.5074 31.2426 10.5 30 10.5H27C25.7574 10.5 24.75 11.5074 24.75 12.75ZM3.75 31.5V17.25C3.75 16.0074 4.75736 15 6 15H9C10.2426 15 11.25 16.0074 11.25 17.25V31.5H3.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
