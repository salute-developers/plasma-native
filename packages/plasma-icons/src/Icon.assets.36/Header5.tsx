import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header5: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 19.0743V26H18.25V10H16V16.3609H10.7153V10H8.5V26H10.7153V19.0743H16ZM20 21.6836C20.8524 22.678 22.2797 23.3333 23.9053 23.3107C25.7489 23.3107 26.5617 22.1808 26.5617 20.6667C26.5617 18.9718 25.3722 18.113 23.37 18.113C22.1608 18.113 21.1101 18.3616 20.3767 18.6554L20.8524 10H28.2863V12.5989H22.8546L22.6564 15.9887C23.0727 15.8757 23.8062 15.7853 24.3216 15.7853C27.3943 15.7853 29 17.7966 29 20.6667C29 24.1243 26.859 26 23.9846 26C22.0022 26 20.5947 25.1638 20 24.5537V21.6836Z"
            fill="currentColor"
        />
    </s.Svg>
);