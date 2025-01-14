import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleDownFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM4.85355 6.39645C4.65829 6.20118 4.34171 6.20118 4.14645 6.39645C3.95118 6.59171 3.95118 6.90829 4.14645 7.10355L7.64645 10.6036C7.84171 10.7988 8.15829 10.7988 8.35355 10.6036L11.8536 7.10355C12.0488 6.90829 12.0488 6.59171 11.8536 6.39645C11.6583 6.20118 11.3417 6.20118 11.1464 6.39645L8 9.54289L4.85355 6.39645Z"
            fill="currentColor"
        />
    </s.Svg>
);
