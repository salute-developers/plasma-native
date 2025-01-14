import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const InfoCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8.7 5.2C8.7 5.5866 8.3866 5.9 8 5.9C7.6134 5.9 7.3 5.5866 7.3 5.2C7.3 4.8134 7.6134 4.5 8 4.5C8.3866 4.5 8.7 4.8134 8.7 5.2ZM8 6.775C8.28995 6.775 8.525 7.01005 8.525 7.3V11.5C8.525 11.7899 8.28995 12.025 8 12.025C7.71005 12.025 7.475 11.7899 7.475 11.5V7.3C7.475 7.01005 7.71005 6.775 8 6.775Z"
            fill="currentColor"
        />
    </s.Svg>
);
