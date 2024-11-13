import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbSberOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.3999 6.575C2.3999 3.49601 4.89591 1 7.9749 1C11.0539 1 13.5499 3.49601 13.5499 6.575C13.5499 9.65399 11.0539 12.15 7.9749 12.15C4.89591 12.15 2.3999 9.65399 2.3999 6.575ZM7.9749 2C5.4482 2 3.3999 4.0483 3.3999 6.575C3.3999 9.1017 5.4482 11.15 7.9749 11.15C10.5016 11.15 12.5499 9.1017 12.5499 6.575C12.5499 6.30701 12.5269 6.0444 12.4826 5.78904L9.77531 7.78451L7.33253 6.25322V4.41103L9.77531 5.94233L11.9624 4.3304C11.1776 2.93931 9.68595 2 7.9749 2Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.5249 13.2243C5.5249 12.9893 5.76887 12.8537 5.99321 12.9237C6.61913 13.1188 7.28474 13.224 7.9749 13.224C8.66507 13.224 9.33068 13.1188 9.95659 12.9237C10.1809 12.8537 10.4249 12.9893 10.4249 13.2243C10.4249 14.5774 9.328 15.6743 7.9749 15.6743C6.6218 15.6743 5.5249 14.5774 5.5249 13.2243Z"
            fill="currentColor"
        />
    </s.Svg>
);
