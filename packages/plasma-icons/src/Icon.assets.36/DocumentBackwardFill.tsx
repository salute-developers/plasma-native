import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DocumentBackwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 10.8C6 8.06974 6 6.70462 6.53134 5.6618C6.99873 4.74451 7.74451 3.99873 8.6618 3.53134C9.70462 3 11.0697 3 13.8 3H22.2C24.9303 3 26.2954 3 27.3382 3.53134C28.2555 3.99873 29.0013 4.74451 29.4687 5.6618C30 6.70462 30 8.06974 30 10.8V17.1296C28.9107 16.7225 27.7313 16.5 26.5 16.5C20.9772 16.5 16.5 20.9772 16.5 26.5C16.5 28.9815 17.4039 31.252 18.9004 33H13.8C11.0697 33 9.70462 33 8.6618 32.4687C7.74451 32.0013 6.99873 31.2555 6.53134 30.3382C6 29.2954 6 27.9303 6 25.2V10.8ZM11 10.125C11 9.57272 11.4477 9.125 12 9.125H24C24.5523 9.125 25 9.57272 25 10.125C25 10.6773 24.5523 11.125 24 11.125H12C11.4477 11.125 11 10.6773 11 10.125ZM11 15C11 14.4477 11.4477 14 12 14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H12C11.4477 16 11 15.5523 11 15Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.5 35C31.1944 35 35 31.1944 35 26.5C35 21.8056 31.1944 18 26.5 18C21.8056 18 18 21.8056 18 26.5C18 31.1944 21.8056 35 26.5 35ZM26.2577 23.167C26.5506 22.8742 26.5506 22.3993 26.2577 22.1064C25.9648 21.8135 25.49 21.8135 25.1971 22.1064L21.3334 25.97C21.0405 26.2629 21.0405 26.7378 21.3334 27.0307L25.1971 30.8943C25.49 31.1872 25.9648 31.1872 26.2577 30.8943C26.5506 30.6014 26.5506 30.1266 26.2577 29.8337L23.6744 27.2504H31.1365C31.5507 27.2504 31.8865 26.9146 31.8865 26.5004C31.8865 26.0861 31.5507 25.7504 31.1365 25.7504H23.6744L26.2577 23.167Z"
            fill="currentColor"
        />
    </s.Svg>
);