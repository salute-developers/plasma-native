import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TvBulbFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 3.9C1 3.40995 1 3.16493 1.09537 2.97776C1.17926 2.81312 1.31312 2.67926 1.47776 2.59537C1.66493 2.5 1.90995 2.5 2.4 2.5H13.6C14.09 2.5 14.3351 2.5 14.5222 2.59537C14.6869 2.67926 14.8207 2.81312 14.9046 2.97776C15 3.16493 15 3.40995 15 3.9V6.64905C14.3158 5.73842 13.2267 5.14941 12 5.14941C9.92893 5.14941 8.25 6.82835 8.25 8.89941C8.25 10.0571 8.77462 11.0923 9.59909 11.7802H2.4C1.90995 11.7802 1.66493 11.7802 1.47776 11.6848C1.31312 11.6009 1.17926 11.4671 1.09537 11.3024C1 11.1153 1 10.8702 1 10.3802V3.9ZM10.25 12.4941H2.40039V13.5H10.25V12.4941Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5594 11.6002C13.5112 11.7179 13.4729 11.8396 13.4476 11.9659L13.3067 12.6704C13.187 13.2691 12.6613 13.7 12.0508 13.7C11.4403 13.7 10.9146 13.2691 10.7949 12.6704L10.6544 11.968C10.629 11.8409 10.5904 11.7186 10.5418 11.6002H13.5594ZM13.9674 10.9003C14.0572 10.7767 14.1518 10.6562 14.246 10.5372C14.6242 10.0598 14.85 9.45626 14.85 8.79993C14.85 7.25357 13.5964 6 12.05 6C10.5036 6 9.25 7.25357 9.25 8.79993C9.25 9.4567 9.47614 10.0607 9.8548 10.5382C9.94885 10.6568 10.0432 10.777 10.1329 10.9003H13.9674Z"
            fill="currentColor"
        />
    </s.Svg>
);
