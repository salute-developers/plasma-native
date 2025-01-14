import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureRightFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6468 10.3513C15.2526 10.532 15 10.9248 15 11.3572V24.6428C15 25.0752 15.2526 25.468 15.6468 25.6487C16.041 25.8294 16.5048 25.7648 16.8342 25.4834L24.612 18.8406C24.8583 18.6303 25 18.3232 25 18C25 17.6768 24.8583 17.3697 24.612 17.1594L16.8342 10.5166C16.5048 10.2352 16.041 10.1706 15.6468 10.3513Z"
            fill="currentColor"
        />
    </s.Svg>
);
