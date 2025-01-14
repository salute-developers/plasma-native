import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M7.96342 4C4.88753 4 3 6.64788 3 8.81975C3 12.6854 6.67415 16.3227 10.1085 19.036C10.8264 19.6032 11.1854 19.8868 11.6388 20.0111C12.0139 20.1139 12.4861 20.1139 12.8612 20.0111C13.3146 19.8868 13.6736 19.6032 14.3915 19.036C17.8259 16.3227 21.5 12.6854 21.5 8.81975C21.5 6.64788 19.6125 4 16.5366 4C14.8187 4 13.3512 5.34819 12.25 6.62895C11.1488 5.34819 9.68125 4 7.96342 4Z"
            fill="currentColor"
        />
    </s.Svg>
);
