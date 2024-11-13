import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FlasherOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M12.7509 3.74902C12.7509 3.33481 12.4151 2.99902 12.0009 2.99902C11.5867 2.99902 11.2509 3.33481 11.2509 3.74902V7.24573C11.2509 7.65994 11.5867 7.99573 12.0009 7.99573C12.4151 7.99573 12.7509 7.65994 12.7509 7.24573V3.74902Z"
            fill="currentColor"
        />
        <s.Path
            d="M19.7802 6.65565C20.0731 6.36275 20.0731 5.88788 19.7802 5.59499C19.4873 5.30209 19.0124 5.30209 18.7195 5.59499L16.9518 7.36275C16.6589 7.65565 16.6589 8.13052 16.9518 8.42341C17.2447 8.71631 17.7195 8.71631 18.0124 8.42341L19.7802 6.65565Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.22162 5.60695C4.51452 5.31406 4.98939 5.31406 5.28228 5.60695L7.05005 7.37472C7.34294 7.66761 7.34294 8.14248 7.05005 8.43538C6.75716 8.72827 6.28228 8.72827 5.98939 8.43538L4.22162 6.66761C3.92873 6.37472 3.92873 5.89984 4.22162 5.60695Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.87 13.0847L17.2077 19.491H18.2509C18.6651 19.491 19.0009 19.8268 19.0009 20.241C19.0009 20.6552 18.6651 20.991 18.2509 20.991H5.75092C5.3367 20.991 5.00092 20.6552 5.00092 20.241C5.00092 19.8268 5.3367 19.491 5.75092 19.491H6.78471L7.12241 13.0847C7.21339 11.3586 8.63946 10.0057 10.3679 10.0057H13.6245C15.353 10.0057 16.779 11.3586 16.87 13.0847ZM8.62033 13.1636C8.66932 12.2342 9.4372 11.5057 10.3679 11.5057H13.6245C14.5552 11.5057 15.3231 12.2342 15.3721 13.1636L15.7056 19.491H8.28679L8.62033 13.1636Z"
            fill="currentColor"
        />
    </s.Svg>
);
