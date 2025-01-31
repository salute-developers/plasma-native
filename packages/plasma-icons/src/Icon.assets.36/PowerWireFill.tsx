import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PowerWireFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4375 4C14.4375 3.44772 13.9898 3 13.4375 3C12.8852 3 12.4375 3.44772 12.4375 4V10.2598H11.5352C10.1351 10.2598 9 11.4037 9 12.8148V18.0428C9 20.1312 9.90552 22.1153 11.4789 23.4745L14.1469 25.7792C14.2593 25.8763 14.3239 26.018 14.3239 26.1672V32.9993H21.6761V26.1672C21.6761 26.018 21.7407 25.8763 21.8531 25.7792L24.5211 23.4745C26.0945 22.1153 27 20.1312 27 18.0428V12.8148C27 11.4037 25.8649 10.2598 24.4648 10.2598H23.5643V4C23.5643 3.44772 23.1165 3 22.5643 3C22.012 3 21.5643 3.44772 21.5643 4V10.2598H14.4375V4Z"
            fill="currentColor"
        />
    </s.Svg>
);
