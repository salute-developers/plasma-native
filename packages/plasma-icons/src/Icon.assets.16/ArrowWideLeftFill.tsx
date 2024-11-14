import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowWideLeftFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M6.7027 3.50001L2 8.00001L6.7027 12.5V9.76787H13.25C13.6642 9.76787 14 9.43208 14 9.01787V6.98215C14 6.56794 13.6642 6.23216 13.25 6.23216H6.7027V3.50001Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.89912 3.04021C7.08325 3.11886 7.2027 3.29978 7.2027 3.50001V5.73216H13.25C13.9404 5.73216 14.5 6.2918 14.5 6.98215V9.01787C14.5 9.70823 13.9404 10.2679 13.25 10.2679H7.2027V12.5C7.2027 12.7002 7.08325 12.8812 6.89912 12.9598C6.71499 13.0385 6.50169 12.9997 6.35702 12.8613L1.65432 8.36127C1.55575 8.26694 1.5 8.13644 1.5 8.00001C1.5 7.86358 1.55575 7.73308 1.65432 7.63876L6.35702 3.13876C6.50169 3.00033 6.71499 2.96155 6.89912 3.04021ZM2.72321 8.00001L6.2027 11.3295V9.76787C6.2027 9.49173 6.42656 9.26787 6.7027 9.26787H13.25C13.3881 9.26787 13.5 9.15594 13.5 9.01787V6.98215C13.5 6.84408 13.3881 6.73216 13.25 6.73216H6.7027C6.42656 6.73216 6.2027 6.5083 6.2027 6.23216V4.6705L2.72321 8.00001Z"
            fill="currentColor"
        />
    </s.Svg>
);