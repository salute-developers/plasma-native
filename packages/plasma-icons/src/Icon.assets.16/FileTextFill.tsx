import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FileTextFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.74796 2.24217C2.5 2.72882 2.5 3.36588 2.5 4.64V11.36C2.5 12.6341 2.5 13.2712 2.74796 13.7578C2.96607 14.1859 3.3141 14.5339 3.74217 14.752C4.22882 15 4.86588 15 6.14 15H9.86C11.1341 15 11.7712 15 12.2578 14.752C12.6859 14.5339 13.0339 14.1859 13.252 13.7578C13.5 13.2712 13.5 12.6341 13.5 11.36V4.64C13.5 3.36588 13.5 2.72882 13.252 2.24217C13.0339 1.8141 12.6859 1.46607 12.2578 1.24796C11.7712 1 11.1341 1 9.86 1H6.14C4.86588 1 4.22882 1 3.74217 1.24796C3.3141 1.46607 2.96607 1.8141 2.74796 2.24217ZM5.24981 3.2998C4.97367 3.2998 4.74981 3.52366 4.74981 3.7998C4.74981 4.07595 4.97367 4.2998 5.24981 4.2998H7.31231C7.58845 4.2998 7.81231 4.07595 7.81231 3.7998C7.81231 3.52366 7.58845 3.2998 7.31231 3.2998H5.24981ZM5.24981 6.0998C4.97367 6.0998 4.74981 6.32366 4.74981 6.5998C4.74981 6.87595 4.97367 7.0998 5.24981 7.0998H10.7498C11.026 7.0998 11.2498 6.87595 11.2498 6.5998C11.2498 6.32366 11.026 6.0998 10.7498 6.0998H5.24981ZM5.24981 8.8998C4.97367 8.8998 4.74981 9.12366 4.74981 9.39981C4.74981 9.67595 4.97367 9.89981 5.24981 9.89981H10.7498C11.026 9.89981 11.2498 9.67595 11.2498 9.39981C11.2498 9.12366 11.026 8.8998 10.7498 8.8998H5.24981ZM5.24981 11.6998C4.97367 11.6998 4.74981 11.9237 4.74981 12.1998C4.74981 12.4759 4.97367 12.6998 5.24981 12.6998H10.7498C11.026 12.6998 11.2498 12.4759 11.2498 12.1998C11.2498 11.9237 11.026 11.6998 10.7498 11.6998H5.24981Z"
            fill="currentColor"
        />
    </s.Svg>
);
