import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SquareFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M1.69922 2.92501C1.69922 2.24846 2.24767 1.70001 2.92422 1.70001H13.0742C13.7508 1.70001 14.2992 2.24846 14.2992 2.92501V13.075C14.2992 13.7516 13.7508 14.3 13.0742 14.3H2.92422C2.24767 14.3 1.69922 13.7516 1.69922 13.075V2.92501Z"
            fill="currentColor"
        />
    </s.Svg>
);
