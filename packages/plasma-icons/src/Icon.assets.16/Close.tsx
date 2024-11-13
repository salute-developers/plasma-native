import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Close: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.39645 3.39645C3.59171 3.20118 3.90829 3.20118 4.10355 3.39645L8 7.29289L11.8964 3.39645C12.0917 3.20118 12.4083 3.20118 12.6036 3.39645C12.7988 3.59171 12.7988 3.90829 12.6036 4.10355L8.70711 8L12.6036 11.8964C12.7988 12.0917 12.7988 12.4083 12.6036 12.6036C12.4083 12.7988 12.0917 12.7988 11.8964 12.6036L8 8.70711L4.10355 12.6036C3.90829 12.7988 3.59171 12.7988 3.39645 12.6036C3.20118 12.4083 3.20118 12.0917 3.39645 11.8964L7.29289 8L3.39645 4.10355C3.20118 3.90829 3.20118 3.59171 3.39645 3.39645Z"
            fill="currentColor"
        />
    </s.Svg>
);
