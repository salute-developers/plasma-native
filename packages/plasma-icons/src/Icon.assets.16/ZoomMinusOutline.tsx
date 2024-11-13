import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ZoomMinusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7ZM7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C8.20074 12 9.30262 11.5767 10.1646 10.8713L13.6964 14.4035C13.8917 14.5988 14.2083 14.5988 14.4035 14.4036C14.5988 14.2083 14.5988 13.8917 14.4036 13.6965L10.8716 10.1641C11.5769 9.30225 12 8.20053 12 7C12 4.23858 9.76142 2 7 2Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.19922 7C4.19922 6.72386 4.42308 6.5 4.69922 6.5H9.29922C9.57536 6.5 9.79922 6.72386 9.79922 7C9.79922 7.27614 9.57536 7.5 9.29922 7.5H4.69922C4.42308 7.5 4.19922 7.27614 4.19922 7Z"
            fill="currentColor"
        />
    </s.Svg>
);
