import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RedCrossOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M5.79309 1.88221C5.7168 2.03194 5.7168 2.22796 5.7168 2.62V5.7168H2.62C2.22796 5.7168 2.03194 5.7168 1.88221 5.79309C1.75049 5.8602 1.64341 5.96729 1.5763 6.099C1.5 6.24874 1.5 6.44476 1.5 6.8368V9.16436C1.5 9.5564 1.5 9.75242 1.5763 9.90216C1.64341 10.0339 1.75049 10.141 1.88221 10.2081C2.03194 10.2844 2.22796 10.2844 2.62 10.2844H5.7168V13.38C5.7168 13.772 5.7168 13.9681 5.79309 14.1178C5.8602 14.2495 5.96729 14.3566 6.099 14.4237C6.24874 14.5 6.44476 14.5 6.8368 14.5H9.16436C9.5564 14.5 9.75242 14.5 9.90216 14.4237C10.0339 14.3566 10.141 14.2495 10.2081 14.1178C10.2844 13.9681 10.2844 13.772 10.2844 13.38V10.2844H13.38C13.772 10.2844 13.9681 10.2844 14.1178 10.2081C14.2495 10.141 14.3566 10.0339 14.4237 9.90216C14.5 9.75242 14.5 9.5564 14.5 9.16436V6.8368C14.5 6.44476 14.5 6.24874 14.4237 6.099C14.3566 5.96729 14.2495 5.8602 14.1178 5.79309C13.9681 5.7168 13.772 5.7168 13.38 5.7168H10.2844V2.62C10.2844 2.22796 10.2844 2.03194 10.2081 1.88221C10.141 1.75049 10.0339 1.64341 9.90216 1.5763C9.75242 1.5 9.5564 1.5 9.16436 1.5H6.8368C6.44476 1.5 6.24874 1.5 6.099 1.5763C5.96729 1.64341 5.8602 1.75049 5.79309 1.88221Z"
            stroke="currentColor"
            strokeLinejoin="round"
        />
    </s.Svg>
);
