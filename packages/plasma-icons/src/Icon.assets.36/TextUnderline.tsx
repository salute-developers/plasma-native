import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TextUnderline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.3676 19.89L24.4676 25.5H27.4376L19.3076 4.5H16.5776L8.56763 25.5H11.3276L13.3976 19.89H22.3676ZM14.2976 17.49L17.8676 7.86L21.4676 17.49H14.2976ZM7 29.4951C6.44772 29.4951 6 29.9428 6 30.4951C6 31.0474 6.44772 31.4951 7 31.4951H28.9982C29.5505 31.4951 29.9982 31.0474 29.9982 30.4951C29.9982 29.9428 29.5505 29.4951 28.9982 29.4951H7Z"
            fill="currentColor"
        />
    </s.Svg>
);
