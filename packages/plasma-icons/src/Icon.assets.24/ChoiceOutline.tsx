import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChoiceOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M4.75 3C3.7835 3 3 3.7835 3 4.75V9.25C3 10.2165 3.7835 11 4.75 11H9.25C10.2165 11 11 10.2165 11 9.25V4.75C11 3.7835 10.2165 3 9.25 3H4.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.75 3C13.7835 3 13 3.7835 13 4.75V9.25C13 10.2165 13.7835 11 14.75 11H19.25C20.2165 11 21 10.2165 21 9.25V4.75C21 3.7835 20.2165 3 19.25 3H14.75ZM14.5 4.75C14.5 4.61193 14.6119 4.5 14.75 4.5H19.25C19.3881 4.5 19.5 4.61193 19.5 4.75V9.25C19.5 9.38807 19.3881 9.5 19.25 9.5H14.75C14.6119 9.5 14.5 9.38807 14.5 9.25V4.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 14.75C13 13.7835 13.7835 13 14.75 13H19.25C20.2165 13 21 13.7835 21 14.75V19.25C21 20.2165 20.2165 21 19.25 21H14.75C13.7835 21 13 20.2165 13 19.25V14.75ZM14.75 14.5C14.6119 14.5 14.5 14.6119 14.5 14.75V19.25C14.5 19.3881 14.6119 19.5 14.75 19.5H19.25C19.3881 19.5 19.5 19.3881 19.5 19.25V14.75C19.5 14.6119 19.3881 14.5 19.25 14.5H14.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.75 13C3.7835 13 3 13.7835 3 14.75V19.25C3 20.2165 3.7835 21 4.75 21H9.25C10.2165 21 11 20.2165 11 19.25V14.75C11 13.7835 10.2165 13 9.25 13H4.75ZM4.5 14.75C4.5 14.6119 4.61193 14.5 4.75 14.5H9.25C9.38807 14.5 9.5 14.6119 9.5 14.75V19.25C9.5 19.3881 9.38807 19.5 9.25 19.5H4.75C4.61193 19.5 4.5 19.3881 4.5 19.25V14.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
