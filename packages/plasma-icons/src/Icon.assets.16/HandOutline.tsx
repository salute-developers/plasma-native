import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HandOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.40917 2.25C8.20601 2.25 8.04125 2.41472 8.04125 2.61798V7.30504C8.04125 7.58118 7.8174 7.80504 7.54125 7.80504C7.26511 7.80504 7.04125 7.58118 7.04125 7.30504V3.65955C7.04125 3.45629 6.8765 3.29157 6.67333 3.29157C6.47017 3.29157 6.30541 3.45629 6.30541 3.65955L6.30541 9.55725C6.30541 9.7999 6.13119 10.0075 5.89223 10.0497C5.65327 10.0918 5.41855 9.95627 5.33556 9.72825L4.46378 7.33289C4.39427 7.14191 4.18314 7.04348 3.99222 7.11297C3.80129 7.18246 3.70281 7.39362 3.77232 7.58462L5.13781 11.3365C5.83031 13.2393 7.93403 14.2203 9.83658 13.5278C11.314 12.99 12.2368 11.6005 12.2498 10.1141C12.2491 10.1037 12.2488 10.0932 12.2488 10.0826V6.26347C12.2488 6.06021 12.084 5.8955 11.8809 5.8955C11.6777 5.8955 11.5129 6.06021 11.5129 6.26347V8.34661C11.5129 8.62275 11.2891 8.84661 11.0129 8.84661C10.7368 8.84661 10.5129 8.62275 10.5129 8.34661V4.00674C10.5129 3.80348 10.3482 3.63876 10.145 3.63876C9.94185 3.63876 9.77709 3.80348 9.77709 4.00674V7.82583C9.77709 8.10197 9.55324 8.32583 9.27709 8.32583C9.00095 8.32583 8.77709 8.10197 8.77709 7.82583V2.61798C8.77709 2.41472 8.61234 2.25 8.40917 2.25ZM9.77709 2.68881C9.89416 2.65619 10.0175 2.63876 10.145 2.63876C10.9005 2.63876 11.5129 3.25125 11.5129 4.00674V4.94554C11.63 4.91293 11.7534 4.8955 11.8809 4.8955C12.6364 4.8955 13.2488 5.50799 13.2488 6.26347V10.0489C13.2495 10.06 13.2499 10.0713 13.2499 10.0826C13.2498 11.9877 12.0741 13.7775 10.1786 14.4675C7.75703 15.3489 5.07948 14.1002 4.19811 11.6785L2.83262 7.92662C2.57425 7.2167 2.94025 6.43169 3.65018 6.17328C4.28561 5.94199 4.98115 6.21098 5.30541 6.77904L5.30541 3.65955C5.30541 2.90406 5.91782 2.29157 6.67333 2.29157C6.81041 2.29157 6.94278 2.31173 7.06764 2.34926C7.19249 1.72244 7.74564 1.25 8.40917 1.25C9.16468 1.25 9.77709 1.86249 9.77709 2.61798V2.68881Z"
            fill="currentColor"
        />
    </s.Svg>
);