import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HouseFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71839 2.03756C7.90281 1.9875 8.09724 1.9875 8.28165 2.03756C8.46691 2.08786 8.65185 2.2201 9.24279 2.68129L14.6924 6.9343C14.9101 7.1042 15.2243 7.06544 15.3942 6.84774C15.5641 6.63004 15.5253 6.31584 15.3076 6.14594L9.78037 1.83226C9.30263 1.45884 8.94915 1.18256 8.54363 1.07247C8.18767 0.975842 7.81238 0.975842 7.45641 1.07247C7.05089 1.18256 6.69742 1.45885 6.21968 1.83226L0.692406 6.14594C0.47471 6.31584 0.435958 6.63004 0.60585 6.84774C0.775742 7.06544 1.08994 7.1042 1.30764 6.9343L6.75725 2.68129C7.3482 2.2201 7.53313 2.08786 7.71839 2.03756ZM7.77593 3.13588C7.92297 3.0966 8.07764 3.0966 8.22469 3.13588C8.39763 3.18209 8.54218 3.29418 8.62996 3.36225L8.65549 3.38195L13.6487 7.19112L13.6809 7.21563C13.8106 7.31419 13.9494 7.41959 14.0537 7.55899C14.1446 7.68051 14.2124 7.81792 14.2537 7.96429C14.3011 8.13218 14.3007 8.30718 14.3004 8.47085L14.3003 8.51152V11.9555C14.3003 12.3811 14.3003 12.7323 14.2771 13.0184C14.253 13.3156 14.2012 13.5888 14.0714 13.8454C13.8701 14.2433 13.5488 14.5668 13.1537 14.7695C12.8989 14.9002 12.6276 14.9524 12.3325 14.9766C12.0484 15 11.6996 15 11.277 15H4.72361C4.30101 15 3.95222 15 3.6681 14.9766C3.373 14.9524 3.10173 14.9002 2.84693 14.7695C2.45179 14.5668 2.13053 14.2433 1.92919 13.8454C1.79937 13.5888 1.74762 13.3156 1.72351 13.0184C1.70029 12.7323 1.7003 12.3811 1.70031 11.9555L1.70031 8.51152L1.70025 8.47087C1.69992 8.3072 1.69956 8.13219 1.74692 7.96429C1.7882 7.81792 1.85602 7.68051 1.94694 7.55899C2.05125 7.41958 2.18999 7.31419 2.31975 7.21562L2.35196 7.19112L7.34512 3.38195L7.37065 3.36225C7.45843 3.29418 7.60298 3.18209 7.77593 3.13588ZM5.90039 10.0522C5.90039 8.89242 6.84059 7.95221 8.00039 7.95221C9.16019 7.95221 10.1004 8.89242 10.1004 10.0522V13.9439H5.90039V10.0522Z"
            fill="currentColor"
        />
    </s.Svg>
);
