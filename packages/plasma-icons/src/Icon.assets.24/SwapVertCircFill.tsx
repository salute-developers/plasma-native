import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwapVertCircFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.0303 9.28035C16.7374 9.57325 16.2626 9.57325 15.9697 9.28035L15.25 8.56068V17.25C15.25 17.6642 14.9142 18 14.5 18C14.0858 18 13.75 17.6642 13.75 17.25V6.75002C13.75 6.44668 13.9327 6.1732 14.213 6.05711C14.4932 5.94103 14.8158 6.00519 15.0303 6.21969L17.0303 8.21969C17.3232 8.51259 17.3232 8.98746 17.0303 9.28035ZM6.96967 14.7197C7.26256 14.4268 7.73744 14.4268 8.03033 14.7197L8.75 15.4394V6.75002C8.75 6.33581 9.08579 6.00002 9.5 6.00002C9.91421 6.00002 10.25 6.33581 10.25 6.75002V17.25C10.25 17.5534 10.0673 17.8268 9.78701 17.9429C9.50676 18.059 9.18417 17.9949 8.96967 17.7804L6.96967 15.7804C6.67678 15.4875 6.67678 15.0126 6.96967 14.7197Z"
            fill="currentColor"
        />
    </s.Svg>
);
