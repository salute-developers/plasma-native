import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureRight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.03022 17.0306C6.73732 16.7377 6.73732 16.2628 7.03022 15.9699L10.9999 12.0002L7.03022 8.03057C6.73732 7.73768 6.73732 7.26281 7.03022 6.96991C7.32311 6.67702 7.79798 6.67702 8.09088 6.96991L13.1212 12.0002L8.09088 17.0306C7.79798 17.3235 7.32311 17.3235 7.03022 17.0306Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4089 17.0303C12.116 16.7374 12.116 16.2626 12.4089 15.9697L16.3786 12L12.4089 8.03033C12.116 7.73744 12.116 7.26256 12.4089 6.96967C12.7018 6.67678 13.1767 6.67678 13.4695 6.96967L18.4999 12L13.4695 17.0303C13.1767 17.3232 12.7018 17.3232 12.4089 17.0303Z"
            fill="currentColor"
        />
    </s.Svg>
);
