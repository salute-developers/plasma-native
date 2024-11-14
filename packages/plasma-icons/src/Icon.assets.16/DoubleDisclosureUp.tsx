import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.49998 7.99972C4.69524 8.19498 5.01182 8.19498 5.20708 7.99972L8.00353 5.20328L10.8 7.99972C10.9952 8.19498 11.3118 8.19498 11.5071 7.99972C11.7023 7.80446 11.7023 7.48788 11.5071 7.29262L8.00353 3.78906L4.49998 7.29262C4.30471 7.48788 4.30471 7.80446 4.49998 7.99972Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.49996 11.4998C4.69522 11.6951 5.01181 11.6951 5.20707 11.4998L8.00352 8.70339L10.8 11.4998C10.9952 11.6951 11.3118 11.6951 11.5071 11.4998C11.7023 11.3046 11.7023 10.988 11.5071 10.7927L8.00352 7.28917L4.49996 10.7927C4.3047 10.988 4.3047 11.3046 4.49996 11.4998Z"
            fill="currentColor"
        />
    </s.Svg>
);
