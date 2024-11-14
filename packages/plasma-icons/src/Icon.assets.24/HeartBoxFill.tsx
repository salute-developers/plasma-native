import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartBoxFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 3C6 2.58579 6.33579 2.25 6.75 2.25H17.25C17.6642 2.25 18 2.58579 18 3C18 3.41421 17.6642 3.75 17.25 3.75H6.75C6.33579 3.75 6 3.41421 6 3Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0804 5.25H6.91957C6.38542 5.24999 5.93956 5.24998 5.57533 5.27974C5.19545 5.31078 4.83879 5.37789 4.50153 5.54973C3.98408 5.81339 3.56338 6.23408 3.29973 6.75153C3.12789 7.08879 3.06078 7.44545 3.02974 7.82533C2.99998 8.18956 2.99999 8.63541 3 9.16956V17.3304C2.99999 17.8646 2.99998 18.3104 3.02974 18.6747C3.06078 19.0546 3.12789 19.4112 3.29973 19.7485C3.56338 20.2659 3.98408 20.6866 4.50153 20.9503C4.83879 21.1221 5.19545 21.1892 5.57533 21.2203C5.93952 21.25 6.3853 21.25 6.91936 21.25H17.0805C17.6145 21.25 18.0605 21.25 18.4247 21.2203C18.8046 21.1892 19.1612 21.1221 19.4985 20.9503C20.0159 20.6866 20.4366 20.2659 20.7003 19.7485C20.8721 19.4112 20.9392 19.0546 20.9703 18.6747C21 18.3104 21 17.8646 21 17.3305V9.16955C21 8.6354 21 8.18956 20.9703 7.82533C20.9392 7.44545 20.8721 7.08879 20.7003 6.75153C20.4366 6.23408 20.0159 5.81339 19.4985 5.54973C19.1612 5.37789 18.8046 5.31078 18.4247 5.27974C18.0604 5.24998 17.6146 5.24999 17.0804 5.25ZM7 11.6053C7 10.4313 8.02029 9 9.68293 9C10.6115 9 11.4048 9.72875 12 10.4211C12.5952 9.72875 13.3885 9 14.3171 9C15.9797 9 17 10.4313 17 11.6053C17 13.7809 14.847 15.8227 12.929 17.3062C12.612 17.5514 12.4535 17.674 12.2603 17.7261C12.0979 17.7699 11.9021 17.7699 11.7397 17.7261C11.5465 17.674 11.388 17.5514 11.071 17.3062C9.15299 15.8227 7 13.7809 7 11.6053Z"
            fill="currentColor"
        />
    </s.Svg>
);