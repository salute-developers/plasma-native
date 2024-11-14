import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMaximizeLOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2814 4H10V5.5H17.25C17.9624 5.5 18.4517 5.50058 18.8309 5.53157C19.2014 5.56184 19.4004 5.61735 19.5445 5.69074C19.8738 5.85852 20.1415 6.12623 20.3093 6.45552C20.3827 6.59956 20.4382 6.79858 20.4684 7.16908C20.4994 7.54833 20.5 8.03756 20.5 8.75V11L12.1211 11C11.7257 11 11.3847 11 11.1037 11.0229C10.8072 11.0472 10.5123 11.1006 10.2285 11.2452C9.80516 11.461 9.46095 11.8052 9.24523 12.2285C9.10064 12.5123 9.04715 12.8072 9.02293 13.1037C8.99997 13.3847 8.99999 13.7257 9 14.1211V18.5H6.75C6.03756 18.5 5.54833 18.4994 5.16908 18.4684C4.79858 18.4382 4.59956 18.3827 4.45552 18.3093C4.12623 18.1415 3.85852 17.8738 3.69074 17.5445C3.61735 17.4004 3.56184 17.2014 3.53157 16.8309C3.50058 16.4517 3.5 15.9624 3.5 15.25V12H2V15.2814C1.99999 15.9548 1.99999 16.5055 2.03655 16.9531C2.0744 17.4163 2.15514 17.8347 2.35423 18.2255C2.66582 18.837 3.163 19.3342 3.77453 19.6458C4.16527 19.8449 4.58367 19.9256 5.04693 19.9634C5.49449 20 6.04519 20 6.71856 20H17.2814C17.9548 20 18.5055 20 18.9531 19.9634C18.982 19.9611 19.0108 19.9586 19.0394 19.9558C19.4685 19.915 19.8591 19.8324 20.2255 19.6458C20.2637 19.6263 20.3015 19.6061 20.3388 19.5852C20.8984 19.2716 21.3537 18.7988 21.6458 18.2255C21.6707 18.1766 21.6937 18.1274 21.715 18.0776C21.8644 17.7294 21.9303 17.3584 21.9634 16.9531C22 16.5055 22 15.9548 22 15.2814V8.71858C22 8.04521 22 7.49449 21.9634 7.04693C21.9256 6.58367 21.8449 6.16527 21.6458 5.77453C21.3342 5.163 20.837 4.66582 20.2255 4.35423C19.8347 4.15514 19.4163 4.0744 18.9531 4.03655C18.5055 3.99998 17.9548 3.99999 17.2814 4ZM10.5 18.5V14.15C10.5 13.7176 10.5006 13.4384 10.5179 13.2259C10.5346 13.0221 10.5628 12.9466 10.5817 12.9095C10.6536 12.7684 10.7684 12.6537 10.9095 12.5817C10.9466 12.5629 11.0221 12.5346 11.2259 12.5179C11.4384 12.5006 11.7176 12.5 12.15 12.5H20.5V15.25C20.5 15.9624 20.4994 16.4517 20.4684 16.8309C20.4382 17.2014 20.3827 17.4004 20.3093 17.5445C20.1415 17.8738 19.8738 18.1415 19.5445 18.3093C19.4004 18.3827 19.2014 18.4382 18.8309 18.4684C18.4517 18.4994 17.9624 18.5 17.25 18.5L10.5 18.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.25 4.75C8.25 4.33579 7.91421 4 7.5 4H2.75C2.33579 4 2 4.33579 2 4.75V9.5C2 9.91421 2.33579 10.25 2.75 10.25C3.16421 10.25 3.5 9.91421 3.5 9.5V6.56066L7.46967 10.5303C7.76256 10.8232 8.23744 10.8232 8.53033 10.5303C8.82322 10.2374 8.82322 9.76256 8.53033 9.46967L4.56066 5.5H7.5C7.91421 5.5 8.25 5.16421 8.25 4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);