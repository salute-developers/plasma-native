import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MusicOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.1558 5.04982C27.9541 4.82233 28.7484 5.42186 28.7484 6.25197V8.56444L14.8301 12.5306V9.50569C14.8301 8.94727 15.2005 8.45658 15.7375 8.30355L27.1558 5.04982ZM28.7484 21.3095V10.6441L14.8301 14.6102V28.1938C14.8301 28.2022 14.8301 28.2107 14.8301 28.2191C14.8301 30.8616 12.6831 32.9992 10.0401 32.9992C7.39709 32.9992 5.25 30.8616 5.25 28.2191C5.25 25.5767 7.39709 23.4391 10.0401 23.4391C11.0805 23.4391 12.0441 23.7704 12.8301 24.3333V9.50569C12.8301 8.05379 13.7931 6.77801 15.1894 6.38012L26.6077 3.12639C28.6834 2.53492 30.7484 4.09369 30.7484 6.25197V25.1954C30.7483 27.8377 28.6009 29.9752 25.958 29.9752C23.3151 29.9752 21.168 27.8376 21.168 25.1952C21.168 22.5527 23.3151 20.4151 25.958 20.4151C26.9986 20.4151 27.9623 20.7465 28.7484 21.3095ZM12.8301 28.1999C12.8197 26.6758 11.577 25.4391 10.0401 25.4391C8.49665 25.4391 7.25 26.6863 7.25 28.2191C7.25 29.752 8.49665 30.9992 10.0401 30.9992C11.5834 30.9992 12.83 29.7522 12.8301 28.2194L12.8301 28.1999ZM25.958 22.4151C24.4146 22.4151 23.168 23.6623 23.168 25.1952C23.168 26.728 24.4146 27.9752 25.958 27.9752C27.5015 27.9752 28.7481 26.728 28.7481 25.1952C28.7481 23.6623 27.5015 22.4151 25.958 22.4151Z"
            fill="currentColor"
        />
    </s.Svg>
);
