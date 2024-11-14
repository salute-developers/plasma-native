import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SctivityOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.49213 2.60547L8.19322 7.2839L9.57402 6.48669C8.90139 5.0926 8.73199 3.56837 9.00635 2.13642C7.84577 1.93674 6.62122 2.07879 5.49213 2.60547ZM10.0243 2.40546C9.81433 3.57796 9.95354 4.81784 10.4863 5.95998L12.8716 4.58281C12.1489 3.55035 11.1447 2.80985 10.0243 2.40546ZM13.3966 5.49214L11.0113 6.86931C11.734 7.90177 12.7382 8.64227 13.8586 9.04666C14.0686 7.87416 13.9294 6.63428 13.3966 5.49214ZM13.5826 10.0628C12.2053 9.5844 10.97 8.67558 10.099 7.39602L8.71822 8.19322L11.4193 12.8716C12.44 12.1572 13.1753 11.1677 13.5826 10.0628ZM10.51 13.3966L7.8089 8.71822L6.4281 9.51543C7.10073 10.9095 7.27013 12.4337 6.99577 13.8657C8.15634 14.0654 9.3809 13.9233 10.51 13.3966ZM5.97779 13.5967C6.18779 12.4242 6.04858 11.1843 5.51581 10.0421L3.13047 11.4193C3.85321 12.4518 4.85738 13.1923 5.97779 13.5967ZM2.60547 10.51L4.99081 9.13281C4.26807 8.10035 3.26391 7.35985 2.1435 6.95546C1.9335 8.12796 2.0727 9.36784 2.60547 10.51ZM2.41949 5.93935C3.79678 6.41772 5.0321 7.32654 5.9031 8.6061L7.2839 7.8089L4.58281 3.13047C3.56214 3.84495 2.82685 4.83442 2.41949 5.93935ZM4.50106 1.93888C6.1614 0.980283 8.05231 0.779345 9.77079 1.22846C11.5172 1.68489 13.089 2.8136 14.0632 4.50106C15.0375 6.18852 15.2291 8.11404 14.7512 9.85472C14.2809 11.5675 13.1614 13.1046 11.5011 14.0632C9.84072 15.0218 7.9498 15.2228 6.23132 14.7737C4.48488 14.3172 2.91313 13.1885 1.93888 11.5011C0.964627 9.8136 0.773007 7.88808 1.25095 6.1474C1.72124 4.43459 2.84072 2.89748 4.50106 1.93888Z"
            fill="currentColor"
        />
    </s.Svg>
);