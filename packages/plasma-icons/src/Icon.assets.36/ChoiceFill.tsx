import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChoiceFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M19.5 7.125C19.5 5.67525 20.6753 4.5 22.125 4.5H28.875C30.3247 4.5 31.5 5.67525 31.5 7.125V13.875C31.5 15.3247 30.3247 16.5 28.875 16.5H22.125C20.6753 16.5 19.5 15.3247 19.5 13.875V7.125Z"
            fill="currentColor"
        />
        <s.Path
            d="M7.125 19.5C5.67525 19.5 4.5 20.6753 4.5 22.125V28.875C4.5 30.3247 5.67525 31.5 7.125 31.5H13.875C15.3247 31.5 16.5 30.3247 16.5 28.875V22.125C16.5 20.6753 15.3247 19.5 13.875 19.5H7.125Z"
            fill="currentColor"
        />
        <s.Path
            d="M22.125 19.5C20.6753 19.5 19.5 20.6753 19.5 22.125V28.875C19.5 30.3247 20.6753 31.5 22.125 31.5H28.875C30.3247 31.5 31.5 30.3247 31.5 28.875V22.125C31.5 20.6753 30.3247 19.5 28.875 19.5H22.125Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.125 4.5C5.67525 4.5 4.5 5.67525 4.5 7.125V13.875C4.5 15.3247 5.67525 16.5 7.125 16.5H13.875C15.3247 16.5 16.5 15.3247 16.5 13.875V7.125C16.5 5.67525 15.3247 4.5 13.875 4.5H7.125ZM6.75 7.125C6.75 6.91789 6.91789 6.75 7.125 6.75H13.875C14.0821 6.75 14.25 6.91789 14.25 7.125V13.875C14.25 14.0821 14.0821 14.25 13.875 14.25H7.125C6.91789 14.25 6.75 14.0821 6.75 13.875V7.125Z"
            fill="currentColor"
        />
    </s.Svg>
);
