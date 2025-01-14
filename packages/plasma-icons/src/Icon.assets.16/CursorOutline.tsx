import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CursorOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.26134 2.41596C3.6132 2.10145 2.89221 2.6853 3.06509 3.38466L5.78475 14.3865C5.98744 15.2064 7.13232 15.2609 7.41197 14.464L9.10961 9.62605L14.1948 8.97137C15.0325 8.86353 15.2172 7.73234 14.4573 7.36361L4.26134 2.41596ZM4.11266 3.45534L13.5684 8.04376L8.89017 8.64605C8.57141 8.68709 8.30306 8.9044 8.19665 9.20765L6.63487 13.6584L4.11266 3.45534Z"
            fill="currentColor"
        />
    </s.Svg>
);
