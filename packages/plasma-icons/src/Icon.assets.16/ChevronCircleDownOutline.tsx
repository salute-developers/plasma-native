import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleDownOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM4.85355 6.39645C4.65829 6.20118 4.34171 6.20118 4.14645 6.39645C3.95118 6.59171 3.95118 6.90829 4.14645 7.10355L7.64645 10.6036C7.84171 10.7988 8.15829 10.7988 8.35355 10.6036L11.8536 7.10355C12.0488 6.90829 12.0488 6.59171 11.8536 6.39645C11.6583 6.20118 11.3417 6.20118 11.1464 6.39645L8 9.54289L4.85355 6.39645Z"
            fill="currentColor"
        />
    </s.Svg>
);
