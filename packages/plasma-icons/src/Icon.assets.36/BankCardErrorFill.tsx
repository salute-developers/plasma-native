import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BankCardErrorFill: React.FC<IconProps> = (props) => (
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
            d="M26.5 35C31.1944 35 35 31.1944 35 26.5C35 21.8056 31.1944 18 26.5 18C21.8056 18 18 21.8056 18 26.5C18 31.1944 21.8056 35 26.5 35ZM23.7521 22.6913C23.4592 22.3984 22.9843 22.3984 22.6914 22.6913C22.3985 22.9842 22.3985 23.459 22.6914 23.7519L25.4395 26.5L22.6914 29.2481C22.3985 29.541 22.3985 30.0158 22.6914 30.3087C22.9843 30.6016 23.4592 30.6016 23.7521 30.3087L26.5002 27.5607L29.2482 30.3087C29.5411 30.6016 30.016 30.6016 30.3089 30.3087C30.6018 30.0158 30.6018 29.541 30.3089 29.2481L27.5608 26.5L30.3089 23.7519C30.6018 23.459 30.6018 22.9842 30.3089 22.6913C30.016 22.3984 29.5411 22.3984 29.2482 22.6913L26.5002 25.4393L23.7521 22.6913Z"
            fill="currentColor"
        />
    </s.Svg>
);
