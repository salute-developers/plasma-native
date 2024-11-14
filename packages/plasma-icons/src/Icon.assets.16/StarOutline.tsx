import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StarOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.36764 1.63921C7.63115 1.12287 8.36894 1.12287 8.63245 1.63921L10.4282 5.15794L14.3296 5.77842C14.9021 5.86948 15.1301 6.57116 14.7204 6.98133L11.9288 9.77651L12.5443 13.6787C12.6346 14.2513 12.0378 14.685 11.5211 14.4222L8.00005 12.6309L4.47902 14.4222C3.96234 14.685 3.36545 14.2513 3.45577 13.6787L4.07125 9.77651L1.27966 6.98133C0.870007 6.57116 1.098 5.86948 1.6705 5.77842L5.57192 5.15794L7.36764 1.63921ZM8.00005 2.59993L6.39557 5.7439C6.29241 5.94605 6.09882 6.08671 5.87468 6.12235L2.38878 6.67676L4.88306 9.17424C5.04344 9.33483 5.11738 9.5624 5.08202 9.78659L4.53209 13.2732L7.67812 11.6728C7.8804 11.5699 8.11969 11.5699 8.32197 11.6728L11.468 13.2732L10.9181 9.78659C10.8827 9.5624 10.9567 9.33483 11.117 9.17424L13.6113 6.67676L10.1254 6.12235C9.90127 6.08671 9.70769 5.94605 9.60452 5.7439L8.00005 2.59993Z"
            fill="currentColor"
        />
    </s.Svg>
);