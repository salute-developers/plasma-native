import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SizeMinimize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.89062 1.75C9.89062 1.47386 9.66677 1.25 9.39062 1.25C9.11448 1.25 8.89062 1.47386 8.89062 1.75V6.61125C8.89062 6.88739 9.11448 7.11125 9.39062 7.11125H14.2534C14.5295 7.11125 14.7534 6.88739 14.7534 6.61125C14.7534 6.33511 14.5295 6.11125 14.2534 6.11125H10.598L14.6069 2.10361C14.8022 1.90838 14.8022 1.59179 14.607 1.3965C14.4118 1.20121 14.0952 1.20116 13.8999 1.39639L9.89062 5.40441V1.75ZM1.75 8.88965C1.47386 8.88965 1.25 9.11351 1.25 9.38965C1.25 9.66579 1.47386 9.88965 1.75 9.88965H5.40539L1.3965 13.8973C1.20121 14.0925 1.20116 14.4091 1.39639 14.6044C1.59162 14.7997 1.90821 14.7997 2.1035 14.6045L6.11277 10.5965V14.2509C6.11277 14.527 6.33662 14.7509 6.61277 14.7509C6.88891 14.7509 7.11277 14.527 7.11277 14.2509V9.38965C7.11277 9.11351 6.88891 8.88965 6.61277 8.88965H1.75Z"
            fill="currentColor"
        />
    </s.Svg>
);