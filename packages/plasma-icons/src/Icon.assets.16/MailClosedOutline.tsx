import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MailClosedOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.83849 2.5H11.1579C11.7277 2.5 12.1858 2.49999 12.5564 2.53027C12.9375 2.56141 13.2699 2.62704 13.5768 2.78338C14.066 3.03265 14.4638 3.4304 14.713 3.91963C14.8694 4.22647 14.935 4.55891 14.9661 4.94001C14.9964 5.31062 14.9964 5.76867 14.9964 6.33847V8.64264C14.6965 8.37475 14.3604 8.14646 13.9964 7.96598V6.36C13.9964 5.76369 13.996 5.34654 13.9695 5.02144C13.9434 4.70218 13.8946 4.51599 13.822 4.37362C13.6686 4.07256 13.4239 3.82779 13.1228 3.67439C12.9804 3.60185 12.7942 3.55304 12.475 3.52695C12.1499 3.50039 11.7327 3.5 11.1364 3.5H4.86C4.26369 3.5 3.84654 3.50039 3.52144 3.52695C3.20218 3.55304 3.01599 3.60185 2.87362 3.67439C2.57256 3.82779 2.32779 4.07256 2.17439 4.37362C2.10185 4.51599 2.05304 4.70218 2.02695 5.02144C2.00039 5.34654 2 5.76369 2 6.36V9.64122C2 10.2375 2.00039 10.6547 2.02695 10.9798C2.05304 11.299 2.10185 11.4852 2.17439 11.6276C2.32779 11.9287 2.57256 12.1734 2.87362 12.3268C3.01599 12.3994 3.20218 12.4482 3.52144 12.4743C3.84653 12.5008 4.26369 12.5012 4.86 12.5012H7.5276C7.56602 12.848 7.64385 13.1828 7.75649 13.5012H4.83847C4.26867 13.5012 3.81061 13.5012 3.44001 13.4709C3.05891 13.4398 2.72647 13.3742 2.41963 13.2178C1.9304 12.9686 1.53265 12.5708 1.28338 12.0816C1.12704 11.7748 1.06141 11.4423 1.03027 11.0612C0.999992 10.6906 0.999995 10.2325 1 9.66274V6.33849C0.999995 5.76868 0.999992 5.31062 1.03027 4.94001C1.06141 4.55891 1.12704 4.22647 1.28338 3.91963C1.53265 3.4304 1.9304 3.03265 2.41963 2.78338C2.72647 2.62704 3.05891 2.56141 3.44001 2.53027C3.81062 2.49999 4.26869 2.5 4.83849 2.5ZM3.00564 5.32811C3.14845 5.09176 3.45581 5.01593 3.69216 5.15873L7.17248 7.26153C7.68127 7.56894 8.31854 7.56894 8.82732 7.26154L12.3076 5.15873C12.544 5.01593 12.8514 5.09176 12.9942 5.32811C13.137 5.56446 13.0611 5.87183 12.8248 6.01463L9.34445 8.11744C8.51768 8.61697 7.48212 8.61697 6.65535 8.11744L3.17503 6.01463C2.93868 5.87183 2.86284 5.56446 3.00564 5.32811Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75ZM14.3698 11.3223C14.4664 11.1548 14.4091 10.9408 14.2417 10.8441C14.0743 10.7475 13.8602 10.8048 13.7636 10.9723C13.6227 11.2162 13.4333 11.4275 13.2078 11.5936C13.1472 11.6383 13.0839 11.6797 13.0182 11.7176C12.7086 11.8963 12.3575 11.9904 12 11.9904C11.6426 11.9904 11.2914 11.8963 10.9818 11.7176C10.9162 11.6797 10.8529 11.6383 10.7922 11.5936C10.5668 11.4275 10.3773 11.2162 10.2365 10.9723C10.1398 10.8048 9.92578 10.7475 9.75838 10.8441C9.59098 10.9408 9.53362 11.1549 9.63027 11.3223C9.75165 11.5325 9.89992 11.7247 10.0706 11.8944L9.53118 12.4339C9.3945 12.5705 9.3945 12.7921 9.53118 12.9288C9.66787 13.0655 9.88947 13.0655 10.0262 12.9288L10.6314 12.3236C10.9457 12.505 11.2924 12.6218 11.65 12.668V13.3632C11.65 13.5565 11.8067 13.7132 12 13.7132C12.1933 13.7132 12.35 13.5565 12.35 13.3632V12.668C12.7077 12.6218 13.0539 12.5053 13.3682 12.3238L13.9739 12.9288C14.1106 13.0655 14.3322 13.0655 14.4689 12.9288C14.6056 12.7921 14.6056 12.5705 14.4689 12.4339L13.9295 11.8944C14.1001 11.7247 14.2484 11.5325 14.3698 11.3223Z"
            fill="currentColor"
        />
    </s.Svg>
);
