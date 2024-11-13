import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BallOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3289 6.1328C8.59804 7.99642 5.25 12.6072 5.25 18C5.25 19.0544 6.22862 20.3691 8.65858 21.4855C9.30169 21.781 10.0185 22.0477 10.7971 22.279C10.6031 20.9196 10.5 19.4822 10.5 18C10.5 14.0442 11.2344 10.4083 12.4699 7.71921C12.7252 7.1636 13.0118 6.62934 13.3289 6.1328ZM18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3ZM30.75 18C30.75 10.9584 25.0416 5.25 18 5.25C16.9456 5.25 15.6309 6.22862 14.5145 8.65858C13.4427 10.9912 12.75 14.2928 12.75 18C12.75 19.7174 12.8987 21.3478 13.1648 22.8352C14.6522 23.1013 16.2825 23.25 18 23.25C21.7072 23.25 25.0088 22.5573 27.3414 21.4855C29.7714 20.3691 30.75 19.0544 30.75 18ZM13.721 25.2029C15.0804 25.3969 16.5178 25.5 18 25.5C21.9558 25.5 25.5917 24.7656 28.2808 23.5301C28.8364 23.2748 29.3707 22.9882 29.8672 22.6711C28.0036 27.402 23.3928 30.75 18 30.75C16.9456 30.75 15.6309 29.7714 14.5145 27.3414C14.219 26.6983 13.9523 25.9815 13.721 25.2029ZM11.2656 24.7344C9.96395 24.4187 8.76938 24.0126 7.71921 23.5301C7.1636 23.2748 6.62933 22.9882 6.1328 22.6711C7.42661 25.9555 10.0445 28.5734 13.3289 29.8672C13.0118 29.3707 12.7252 28.8364 12.4699 28.2808C11.9874 27.2306 11.5813 26.036 11.2656 24.7344Z"
            fill="currentColor"
        />
    </s.Svg>
);
