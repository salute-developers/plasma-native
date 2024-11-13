import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryEmptyOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 4.5C13.5 3.67157 14.1716 3 15 3H21C21.8284 3 22.5 3.67157 22.5 4.5V6.06766C23.2866 6.1338 23.8716 6.26457 24.3792 6.52317C25.2823 6.98336 26.0166 7.71767 26.4768 8.62085C27 9.64762 27 10.9917 27 13.68V25.32C27 28.0083 27 29.3524 26.4768 30.3792C26.0166 31.2823 25.2823 32.0166 24.3792 32.4768C23.3524 33 22.0083 33 19.32 33H16.68C13.9917 33 12.6476 33 11.6208 32.4768C10.7177 32.0166 9.98336 31.2823 9.52317 30.3792C9 29.3524 9 28.0083 9 25.32V13.68C9 10.9917 9 9.64762 9.52317 8.62085C9.98336 7.71767 10.7177 6.98336 11.6208 6.52317C12.1284 6.26457 12.7134 6.1338 13.5 6.06766V4.5ZM14.25 8.25C12.5931 8.25 11.25 9.59315 11.25 11.25V27.75C11.25 29.4069 12.5931 30.75 14.25 30.75H21.75C23.4069 30.75 24.75 29.4069 24.75 27.75V11.25C24.75 9.59315 23.4069 8.25 21.75 8.25H14.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
