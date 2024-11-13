import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M12.0594 10.4858C11.6201 10.0464 10.9077 10.0464 10.4684 10.4858C10.0291 10.9251 10.0291 11.6374 10.4684 12.0767L18.0139 19.6222L25.5594 12.0767C25.9987 11.6374 25.9987 10.9251 25.5594 10.4858C25.1201 10.0464 24.4077 10.0464 23.9684 10.4858L18.0139 16.4403L12.0594 10.4858Z"
            fill="currentColor"
        />
        <s.Path
            d="M12.0455 18.4086C11.6062 17.9692 10.8938 17.9692 10.4545 18.4086C10.0152 18.8479 10.0152 19.5602 10.4545 19.9996L18 27.5451L25.5455 19.9996C25.9848 19.5602 25.9848 18.8479 25.5455 18.4086C25.1062 17.9692 24.3938 17.9692 23.9545 18.4086L18 24.3631L12.0455 18.4086Z"
            fill="currentColor"
        />
    </s.Svg>
);
