import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SpeedometerOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.0249 7.9999C2.0249 4.7 4.7 2.0249 7.9999 2.0249C11.2998 2.0249 13.9749 4.7 13.9749 7.9999C13.9749 11.2998 11.2998 13.9749 7.9999 13.9749C4.7 13.9749 2.0249 11.2998 2.0249 7.9999ZM7.9999 1.0249C4.14772 1.0249 1.0249 4.14772 1.0249 7.9999C1.0249 11.8521 4.14772 14.9749 7.9999 14.9749C11.8521 14.9749 14.9749 11.8521 14.9749 7.9999C14.9749 4.14772 11.8521 1.0249 7.9999 1.0249ZM6.45003 4.25819C7.27371 3.91701 8.18695 3.85715 9.04812 4.0879C9.31485 4.15937 9.58902 4.00108 9.66049 3.73435C9.73196 3.46762 9.57367 3.19345 9.30694 3.12198C8.23314 2.83425 7.09441 2.90889 6.06735 3.33431C5.04029 3.75973 4.18231 4.51216 3.62647 5.4749C3.07064 6.43764 2.848 7.55689 2.99311 8.65906C3.13821 9.76123 3.64294 10.7847 4.42901 11.5708C4.62428 11.7661 4.94086 11.7661 5.13612 11.5708C5.33138 11.3755 5.33138 11.0589 5.13612 10.8637C4.5057 10.2333 4.10092 9.41245 3.98455 8.52853C3.86818 7.64462 4.04673 6.747 4.4925 5.9749C4.93827 5.2028 5.62636 4.59937 6.45003 4.25819ZM12.2655 6.33931C12.5322 6.26784 12.8064 6.42613 12.8778 6.69287C13.1073 7.54912 13.1073 8.45069 12.8778 9.30694C12.6484 10.1632 12.1976 10.944 11.5708 11.5708C11.3755 11.7661 11.0589 11.7661 10.8637 11.5708C10.6684 11.3755 10.6684 11.0589 10.8637 10.8637C11.3664 10.361 11.7279 9.73482 11.9119 9.04812C12.0959 8.36142 12.0959 7.63839 11.9119 6.95169C11.8404 6.68495 11.9987 6.41078 12.2655 6.33931ZM11.4984 4.44166C11.344 4.31211 11.1183 4.31413 10.9663 4.44643L7.20759 7.71697C6.65304 8.1995 6.66078 9.06335 7.2239 9.53586C7.78702 10.0084 8.63908 9.866 9.01799 9.23607L11.5861 4.96656C11.69 4.79385 11.6528 4.57122 11.4984 4.44166Z"
            fill="currentColor"
        />
    </s.Svg>
);
