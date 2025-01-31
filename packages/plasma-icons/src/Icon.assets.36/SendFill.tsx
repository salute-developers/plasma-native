import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SendFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.1252 19.0004C32.5078 18.8125 32.75 18.4247 32.75 18C32.75 17.5753 32.5078 17.1875 32.1252 16.9996L4.86577 3.61505C4.4427 3.40733 3.93427 3.48572 3.59412 3.81113C3.25398 4.13653 3.15501 4.63922 3.34659 5.06841L7.56174 14.5113L15.4456 17.6511C15.7606 17.7766 15.7606 18.2224 15.4456 18.3479L7.56229 21.4875L3.34659 30.9316C3.15501 31.3608 3.25398 31.8635 3.59412 32.1889C3.93427 32.5143 4.4427 32.5927 4.86577 32.3849L32.1252 19.0004Z"
            fill="currentColor"
        />
    </s.Svg>
);
