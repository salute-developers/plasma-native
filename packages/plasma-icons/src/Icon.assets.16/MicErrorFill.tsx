import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MicErrorFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.52339 1.14255C8.27312 1.05016 8.00451 1 7.72496 1C6.37186 1 5.27496 2.17525 5.27496 3.625V7.825C5.27496 9.27475 6.37186 10.45 7.72496 10.45C8.98872 10.45 10.029 9.4248 10.1609 8.10828C8.59242 7.40511 7.4999 5.83014 7.4999 4C7.4999 2.915 7.88389 1.91969 8.52339 1.14255ZM11.3356 8.45131C11.1924 9.28543 10.7671 10.0469 10.1286 10.6068C9.45371 11.1987 8.58668 11.525 7.68903 11.525C6.79138 11.525 5.92434 11.1987 5.24945 10.6068C4.57456 10.015 4.13785 9.19795 4.02068 8.30798C3.98464 8.0342 3.73348 7.84148 3.4597 7.87752C3.18592 7.91357 2.99319 8.16473 3.02924 8.43851C3.17807 9.56901 3.73281 10.6069 4.5901 11.3587C5.32129 11.9999 6.23004 12.3958 7.18903 12.4984V14.125C7.18903 14.4011 7.41288 14.625 7.68903 14.625C7.96517 14.625 8.18902 14.4011 8.18902 14.125V12.4984C9.14801 12.3958 10.0568 11.9999 10.7879 11.3587C11.6329 10.6177 12.184 9.59878 12.3421 8.48718C12.2292 8.49567 12.115 8.5 11.9999 8.5C11.7742 8.5 11.5524 8.48339 11.3356 8.45131Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 7.75C14.071 7.75 15.7499 6.07107 15.7499 4C15.7499 1.92893 14.071 0.25 11.9999 0.25C9.92883 0.25 8.2499 1.92893 8.2499 4C8.2499 6.07107 9.92883 7.75 11.9999 7.75ZM10.8007 2.30616C10.664 2.16947 10.4424 2.16947 10.3057 2.30616C10.169 2.44284 10.169 2.66445 10.3057 2.80113L11.5046 4L10.3057 5.19887C10.169 5.33555 10.169 5.55716 10.3057 5.69384C10.4424 5.83053 10.664 5.83053 10.8007 5.69384L11.9995 4.49497L13.1984 5.69384C13.3351 5.83053 13.5567 5.83053 13.6934 5.69384C13.8301 5.55716 13.8301 5.33555 13.6934 5.19887L12.4945 4L13.6934 2.80113C13.8301 2.66445 13.8301 2.44284 13.6934 2.30616C13.5567 2.16947 13.3351 2.16947 13.1984 2.30616L11.9995 3.50503L10.8007 2.30616Z"
            fill="currentColor"
        />
    </s.Svg>
);
