import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FilterOff: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M31.1632 5.70711C31.5537 5.31658 31.5537 4.68342 31.1632 4.29289C30.7727 3.90237 30.1395 3.90237 29.749 4.29289L25.542 8.49985H5.50003C4.94775 8.49985 4.50003 8.94756 4.50003 9.49985C4.50003 10.0521 4.94775 10.4998 5.50003 10.4998H23.542L17.542 16.4998H9.50003C8.94775 16.4998 8.50003 16.9476 8.50003 17.4998C8.50003 18.0521 8.94775 18.4998 9.50003 18.4998H15.542L4.29314 29.7487C3.90261 30.1393 3.90261 30.7724 4.29314 31.163C4.68366 31.5535 5.31683 31.5535 5.70735 31.163L31.1632 5.70711Z"
            fill="currentColor"
        />
        <s.Path
            d="M23.1291 16.4998L21.1291 18.4998H26.5C27.0523 18.4998 27.5 18.0521 27.5 17.4998C27.5 16.9476 27.0523 16.4998 26.5 16.4998H23.1291Z"
            fill="currentColor"
        />
        <s.Path
            d="M15.1291 24.4998L13.1291 26.4998H23C23.5523 26.4998 24 26.0521 24 25.4998C24 24.9476 23.5523 24.4998 23 24.4998H15.1291Z"
            fill="currentColor"
        />
        <s.Path
            d="M30.997 8.6319L29.1291 10.4998H30.5C31.0523 10.4998 31.5 10.0521 31.5 9.49985C31.5 9.12847 31.2976 8.80438 30.997 8.6319Z"
            fill="currentColor"
        />
    </s.Svg>
);
