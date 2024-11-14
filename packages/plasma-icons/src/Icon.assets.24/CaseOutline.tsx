import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CaseOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1211 3C10.7257 2.99999 10.3847 2.99998 10.1037 3.02293C9.80722 3.04715 9.51231 3.10064 9.22852 3.24524C8.80516 3.46095 8.46095 3.80516 8.24524 4.22852C8.10064 4.51231 8.04715 4.80722 8.02293 5.10373C7.99998 5.38466 7.99999 5.72573 8 6.12109L8 7L7.71858 7C7.04521 6.99999 6.49449 6.99999 6.04693 7.03655C5.58367 7.0744 5.16527 7.15514 4.77453 7.35423C4.163 7.66582 3.66582 8.16301 3.35423 8.77453C3.15514 9.16527 3.0744 9.58367 3.03655 10.0469C2.99998 10.4945 2.99999 11.0452 3 11.7186V15.2814C2.99999 15.9548 2.99998 16.5055 3.03655 16.9531C3.0744 17.4163 3.15514 17.8347 3.35423 18.2255C3.66582 18.837 4.163 19.3342 4.77453 19.6458C5.16527 19.8449 5.58367 19.9256 6.04693 19.9634C6.49448 20 7.04515 20 7.71849 20H16.2814C16.9548 20 17.5055 20 17.9531 19.9634C18.4163 19.9256 18.8347 19.8449 19.2255 19.6458C19.837 19.3342 20.3342 18.837 20.6458 18.2255C20.8449 17.8347 20.9256 17.4163 20.9634 16.9531C21 16.5055 21 15.9548 21 15.2814V11.7186C21 11.0452 21 10.4945 20.9634 10.0469C20.9256 9.58367 20.8449 9.16527 20.6458 8.77453C20.3342 8.16301 19.837 7.66582 19.2255 7.35423C18.8347 7.15514 18.4163 7.0744 17.9531 7.03655C17.5055 6.99999 16.9548 6.99999 16.2814 7L16 7L16 6.1211C16 5.72574 16 5.38466 15.9771 5.10373C15.9528 4.80722 15.8994 4.51231 15.7548 4.22852C15.5391 3.80516 15.1948 3.46095 14.7715 3.24524C14.4877 3.10064 14.1928 3.04715 13.8963 3.02293C13.6154 2.99998 13.2743 2.99999 12.8789 3H11.1211ZM14.5 7V6.15C14.5 5.71759 14.4994 5.43838 14.4821 5.22588C14.4654 5.02213 14.4372 4.94659 14.4183 4.90951C14.3463 4.76839 14.2316 4.65365 14.0905 4.58175C14.0534 4.56285 13.9779 4.53459 13.7741 4.51795C13.5616 4.50059 13.2824 4.5 12.85 4.5H11.15C10.7176 4.5 10.4384 4.50059 10.2259 4.51795C10.0221 4.53459 9.94659 4.56285 9.90951 4.58175C9.76839 4.65365 9.65365 4.76839 9.58175 4.90951C9.56285 4.94659 9.53459 5.02213 9.51795 5.22588C9.50058 5.43838 9.5 5.71759 9.5 6.15V7H14.5ZM5.45552 8.69074C5.59956 8.61735 5.79858 8.56184 6.16908 8.53157C6.54833 8.50059 7.03756 8.5 7.75 8.5H16.25C16.9624 8.5 17.4517 8.50059 17.8309 8.53157C18.2014 8.56184 18.4004 8.61735 18.5445 8.69074C18.8738 8.85852 19.1415 9.12624 19.3093 9.45552C19.3827 9.59956 19.4382 9.79858 19.4684 10.1691C19.4994 10.5483 19.5 11.0376 19.5 11.75V15.25C19.5 15.9624 19.4994 16.4517 19.4684 16.8309C19.4382 17.2014 19.3827 17.4004 19.3093 17.5445C19.1415 17.8738 18.8738 18.1415 18.5445 18.3093C18.4004 18.3827 18.2014 18.4382 17.8309 18.4684C17.4517 18.4994 16.9624 18.5 16.25 18.5H7.75C7.03756 18.5 6.54833 18.4994 6.16908 18.4684C5.79858 18.4382 5.59956 18.3827 5.45552 18.3093C5.12623 18.1415 4.85852 17.8738 4.69074 17.5445C4.61735 17.4004 4.56184 17.2014 4.53157 16.8309C4.50058 16.4517 4.5 15.9624 4.5 15.25V11.75C4.5 11.0376 4.50058 10.5483 4.53157 10.1691C4.56184 9.79858 4.61735 9.59956 4.69074 9.45552C4.85852 9.12624 5.12623 8.85852 5.45552 8.69074Z"
            fill="currentColor"
        />
    </s.Svg>
);