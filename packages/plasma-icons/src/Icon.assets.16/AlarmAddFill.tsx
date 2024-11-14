import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AlarmAddFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.10497 0.897989C4.29938 1.0941 4.298 1.41068 4.10189 1.60509L1.60201 4.0833C1.4059 4.27771 1.08932 4.27633 0.894911 4.08022C0.700501 3.88411 0.701879 3.56753 0.897989 3.37312L3.39787 0.894911C3.59398 0.700501 3.91056 0.701879 4.10497 0.897989ZM11.8944 0.897989C12.0888 0.701879 12.4054 0.700501 12.6015 0.894911L15.1014 3.37312C15.2975 3.56753 15.2988 3.88411 15.1044 4.08022C14.91 4.27633 14.5934 4.27771 14.3973 4.0833L11.8975 1.60509C11.7013 1.41068 11.7 1.0941 11.8944 0.897989ZM3.86898 12.7397L2.51803 14.079C2.32192 14.2734 2.00534 14.272 1.81093 14.0759C1.61652 13.8798 1.61789 13.5632 1.814 13.3688L3.15887 12.0356C2.20976 10.9337 1.63672 9.50383 1.63672 7.9413C1.63672 4.45722 4.48582 1.63281 8.00037 1.63281C11.5149 1.63281 14.364 4.45722 14.364 7.9413C14.364 9.68275 13.6522 11.2594 12.5013 12.4009L13.4777 13.3688C13.6738 13.5632 13.6751 13.8798 13.4807 14.0759C13.2863 14.272 12.9697 14.2734 12.7736 14.079L11.7352 13.0496C10.6863 13.8045 9.39578 14.2498 8.00037 14.2498C6.42356 14.2498 4.98069 13.6813 3.86898 12.7397ZM7.9992 4.4627C8.27534 4.4627 8.4992 4.68656 8.4992 4.9627V7.44171H11.0043C11.2804 7.44171 11.5043 7.66556 11.5043 7.94171C11.5043 8.21785 11.2804 8.44171 11.0043 8.44171H8.4992V10.9207C8.4992 11.1969 8.27534 11.4207 7.9992 11.4207C7.72306 11.4207 7.4992 11.1969 7.4992 10.9207V8.44171H4.99414C4.718 8.44171 4.49414 8.21785 4.49414 7.94171C4.49414 7.66556 4.718 7.44171 4.99414 7.44171H7.4992V4.9627C7.4992 4.68656 7.72306 4.4627 7.9992 4.4627Z"
            fill="currentColor"
        />
    </s.Svg>
);