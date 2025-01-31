import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TvFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.20436 7.02377C3 7.42485 3 7.9499 3 9V22.7097C3 23.7598 3 24.2848 3.20436 24.6859C3.38413 25.0387 3.67096 25.3256 4.02377 25.5053C4.42485 25.7097 4.9499 25.7097 6 25.7097H30C31.0501 25.7097 31.5751 25.7097 31.9762 25.5053C32.329 25.3256 32.6159 25.0387 32.7956 24.6859C33 24.2848 33 23.7598 33 22.7097V9C33 7.9499 33 7.42485 32.7956 7.02377C32.6159 6.67096 32.329 6.38413 31.9762 6.20436C31.5751 6 31.0501 6 30 6H6C4.9499 6 4.42485 6 4.02377 6.20436C3.67096 6.38413 3.38413 6.67096 3.20436 7.02377ZM30 27.5H6V29.5H30V27.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
