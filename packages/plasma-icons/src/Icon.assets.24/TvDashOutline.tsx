import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TvDashOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.0536 4.0042C21.308 3.70955 21.2953 3.26398 21.0157 2.98432C20.7228 2.69143 20.2479 2.69143 19.955 2.98432L18.9395 3.99989H3.13678C3.07941 3.99984 2.99821 3.99979 2.92474 4.00579C2.83667 4.01298 2.69611 4.03241 2.54602 4.10888C2.35786 4.20476 2.20488 4.35774 2.10901 4.5459C2.03253 4.69599 2.01311 4.83655 2.00591 4.92462C1.99991 4.99806 1.99997 5.07922 2.00001 5.13659L2.00001 15.8631C1.99997 15.9205 1.99991 16.0017 2.00591 16.0752C2.01311 16.1632 2.03253 16.3038 2.10901 16.4539C2.20488 16.642 2.35786 16.795 2.54602 16.8909C2.69611 16.9674 2.83667 16.9868 2.92474 16.994C2.99821 17 3.07942 16.9999 3.13679 16.9999H5.93944L2.98446 19.9549C2.69157 20.2478 2.69157 20.7226 2.98446 21.0155C3.27735 21.3084 3.75223 21.3084 4.04512 21.0155L21.0156 4.04511C21.0298 4.03091 21.0444 4.01741 21.0594 4.00459L21.0536 4.0042ZM17.4394 5.49989H3.50001V15.4999H7.43945L17.4394 5.49989Z"
            fill="currentColor"
        />
        <s.Path
            d="M20.5 15.4999H11.6821L10.1821 16.9999H20.8632C20.9206 16.9999 21.0018 17 21.0753 16.994C21.1634 16.9868 21.3039 16.9674 21.454 16.8909C21.6422 16.795 21.7951 16.642 21.891 16.4539C21.9675 16.3038 21.9869 16.1632 21.9941 16.0752C22.0001 16.0017 22.0001 15.9205 22 15.8631V5.18198L20.5 6.68198V15.4999Z"
            fill="currentColor"
        />
        <s.Path d="M9.18212 17.9999L7.68212 19.4999H20V17.9999H9.18212Z" fill="currentColor" />
    </s.Svg>
);
