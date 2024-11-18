import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header5: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 8.47V11.5H8V4.5H7V7.2829H4.5V4.5H3.5V11.5H4.5V8.47H7ZM8.75 9.61158C9.12885 10.0466 9.76322 10.3333 10.4857 10.3234C11.3051 10.3234 11.6663 9.8291 11.6663 9.16667C11.6663 8.42514 11.1377 8.04944 10.2478 8.04944C9.71035 8.04944 9.24339 8.15819 8.9174 8.28672L9.12885 4.5H12.4328V5.63701H10.0187L9.93062 7.12006C10.1156 7.07062 10.4416 7.03107 10.6707 7.03107C12.0363 7.03107 12.75 7.91102 12.75 9.16667C12.75 10.6794 11.7985 11.5 10.5209 11.5C9.63987 11.5 9.01432 11.1342 8.75 10.8672V9.61158Z"
            fill="currentColor"
        />
    </s.Svg>
);