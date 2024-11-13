import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AppleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.54054 4.61539C8.54054 3.99938 9.04876 3.5 9.67568 3.5C13.11 3.5 15.4476 5.07045 16.9236 7.01606C17.1022 7.25143 17.2682 7.49217 17.4223 7.73622C17.4494 7.62319 17.4777 7.5111 17.5073 7.40018C17.749 6.49307 18.0942 5.57895 18.6046 4.86739C19.1233 4.14434 19.9184 3.5 21.027 3.5C21.6539 3.5 22.1622 3.99938 22.1622 4.61539C22.1622 5.2314 21.6539 5.73077 21.027 5.73077C20.9249 5.73077 20.7361 5.76806 20.4602 6.15264C20.1761 6.54872 19.9159 7.16825 19.7035 7.9652C19.4169 9.04073 19.2571 10.2842 19.1843 11.3811C19.4315 11.2948 19.6856 11.1997 19.9643 11.0955C20.1999 11.0073 20.4531 10.9126 20.7344 10.8111C22.0557 10.3341 23.7279 9.80948 25.5745 9.82051C27.1953 9.8302 28.8225 10.4623 30.0393 11.7431C31.2609 13.029 32 14.8933 32 17.2564C32 22.6824 30.4183 26.4662 28.4441 28.9167C27.4616 30.1361 26.3863 31.0192 25.3734 31.6031C24.3836 32.1737 23.3791 32.5 22.5405 32.5C21.1119 32.5 20.1481 32.0164 19.4233 31.6094C19.3772 31.5835 19.3329 31.5586 19.2903 31.5347C18.6211 31.1581 18.3628 31.0128 18 31.0128C17.6372 31.0128 17.3789 31.1581 16.7096 31.5347C16.667 31.5586 16.6228 31.5835 16.5767 31.6094C15.8519 32.0163 14.8881 32.4999 13.4595 32.4999C12.6209 32.4999 11.6164 32.1736 10.6266 31.603C9.61371 31.0191 8.53837 30.136 7.55595 28.9167C5.58165 26.4662 4 22.6824 4 17.2563C4 14.8933 4.73914 13.029 5.96069 11.7431C7.15852 10.4822 8.75406 9.85006 10.3497 9.82142C9.88574 9.35376 9.49475 8.8133 9.19683 8.16488C8.74374 7.17872 8.54054 6.01807 8.54054 4.61539ZM16.3817 10.76C16.1824 10.6666 15.9882 10.5761 15.7997 10.4884C15.5045 10.3509 15.2234 10.22 14.958 10.0941C13.9321 9.60744 13.1473 9.19878 12.5356 8.74469C11.9459 8.30687 11.5394 7.84205 11.266 7.24699C11.0914 6.86697 10.9576 6.40421 10.8815 5.81875C12.832 6.11468 14.1742 7.12454 15.1034 8.34932C15.6804 9.10985 16.0967 9.9548 16.3817 10.76Z"
            fill="currentColor"
        />
    </s.Svg>
);
