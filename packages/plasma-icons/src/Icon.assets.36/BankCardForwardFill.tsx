import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BankCardForwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.00045 13C3.00463 10.9376 3.04767 9.82609 3.49047 8.95704C3.9219 8.11031 4.61031 7.4219 5.45704 6.99047C6.41965 6.5 7.67976 6.5 10.2 6.5H25.8C28.3202 6.5 29.5804 6.5 30.543 6.99047C31.3897 7.4219 32.0781 8.11031 32.5095 8.95704C32.9523 9.82609 32.9954 10.9376 32.9995 13H3.00045ZM3 16H33V18.9004C31.252 17.4039 28.9815 16.5 26.5 16.5C20.9772 16.5 16.5 20.9772 16.5 26.5C16.5 27.5452 16.6604 28.553 16.9578 29.5H10.2C7.67976 29.5 6.41965 29.5 5.45704 29.0095C4.61031 28.5781 3.9219 27.8897 3.49047 27.043C3 26.0804 3 24.8202 3 22.3V16Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.5 35C31.1944 35 35 31.1944 35 26.5C35 21.8056 31.1944 18 26.5 18C21.8056 18 18 21.8056 18 26.5C18 31.1944 21.8056 35 26.5 35ZM27.8032 22.1064C27.5103 21.8135 27.0354 21.8135 26.7425 22.1064C26.4496 22.3993 26.4496 22.8742 26.7425 23.167L29.3258 25.7504H21.8638C21.4496 25.7504 21.1138 26.0861 21.1138 26.5004C21.1138 26.9146 21.4496 27.2504 21.8638 27.2504H29.3258L26.7425 29.8337C26.4496 30.1266 26.4496 30.6014 26.7425 30.8943C27.0354 31.1872 27.5103 31.1872 27.8032 30.8943L31.6668 27.0307C31.9597 26.7378 31.9597 26.2629 31.6668 25.97L27.8032 22.1064Z"
            fill="currentColor"
        />
    </s.Svg>
);
