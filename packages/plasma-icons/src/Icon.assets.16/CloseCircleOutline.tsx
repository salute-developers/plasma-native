import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CloseCircleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7.99821C2 4.68549 4.68549 2 7.99821 2C11.3109 2 13.9964 4.68549 13.9964 7.99821C13.9964 11.3109 11.3109 13.9964 7.99821 13.9964C4.68549 13.9964 2 11.3109 2 7.99821ZM7.99821 1C4.1332 1 1 4.1332 1 7.99821C1 11.8632 4.1332 14.9964 7.99821 14.9964C11.8632 14.9964 14.9964 11.8632 14.9964 7.99821C14.9964 4.1332 11.8632 1 7.99821 1ZM5.54301 4.83442C5.34774 4.63916 5.03116 4.63916 4.8359 4.83442C4.64064 5.02969 4.64064 5.34627 4.8359 5.54153L7.29238 7.99801L4.8359 10.4545C4.64064 10.6498 4.64064 10.9663 4.8359 11.1616C5.03116 11.3569 5.34774 11.3569 5.54301 11.1616L7.99949 8.70512L10.456 11.1616C10.6512 11.3569 10.9678 11.3569 11.1631 11.1616C11.3583 10.9663 11.3583 10.6498 11.1631 10.4545L8.7066 7.99801L11.1631 5.54153C11.3583 5.34627 11.3583 5.02969 11.1631 4.83442C10.9678 4.63916 10.6512 4.63916 10.456 4.83442L7.99949 7.29091L5.54301 4.83442Z"
            fill="currentColor"
        />
    </s.Svg>
);
