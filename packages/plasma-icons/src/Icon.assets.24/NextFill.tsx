import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NextFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.25 4.25C20.6642 4.25 21 4.58579 21 5V19.5C21 19.9142 20.6642 20.25 20.25 20.25C19.8358 20.25 19.5 19.9142 19.5 19.5V5C19.5 4.58579 19.8358 4.25 20.25 4.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M15.8908 10.7182C16.8521 11.3024 16.8521 12.6976 15.8908 13.2818L6.02902 19.2752C5.0294 19.8827 3.75 19.1631 3.75 17.9934L3.75 6.00664C3.75 4.83689 5.02941 4.11729 6.02902 4.72479L15.8908 10.7182Z"
            fill="currentColor"
        />
    </s.Svg>
);
