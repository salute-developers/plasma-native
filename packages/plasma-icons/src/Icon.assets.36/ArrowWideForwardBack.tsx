import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowWideForwardBack: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7338 6.29378C21.448 6.00728 21.0177 5.92128 20.6437 6.07592C20.2697 6.23056 20.0258 6.59535 20.0258 7.00003V14.5856C20.0258 15.1379 20.4735 15.5856 21.0258 15.5856C21.5781 15.5856 22.0258 15.1379 22.0258 14.5856V9.41838L30.5858 17.9991L22.0258 26.5799V22.9297C22.0258 22.3775 21.5781 21.9297 21.0258 21.9297H10.4316C9.87936 21.9297 9.43164 22.3775 9.43164 22.9297C9.43164 23.482 9.87936 23.9297 10.4316 23.9297H20.0258V28.9982C20.0258 29.4029 20.2697 29.7677 20.6437 29.9223C21.0177 30.077 21.448 29.991 21.7338 29.7045L32.7063 18.7054C33.0957 18.315 33.0957 17.6832 32.7063 17.2929L21.7338 6.29378ZM8.11323 11.8779C8.50328 11.4869 8.50252 10.8537 8.11152 10.4637C7.72052 10.0736 7.08736 10.0744 6.69731 10.4654L3.29204 13.8789C2.90265 14.2692 2.90265 14.9011 3.29204 15.2914L6.69731 18.7049C7.08736 19.0959 7.72052 19.0967 8.11152 18.7066C8.50252 18.3166 8.50328 17.6834 8.11323 17.2924L6.41009 15.5852H16.486C17.0383 15.5852 17.486 15.1375 17.486 14.5852C17.486 14.0329 17.0383 13.5852 16.486 13.5852H6.41009L8.11323 11.8779Z"
            fill="currentColor"
        />
    </s.Svg>
);
