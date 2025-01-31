import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchToggleOffFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 10C7.58172 10 4 13.5817 4 18C4 22.4183 7.58172 26 12 26H24C28.4183 26 32 22.4183 32 18C32 13.5817 28.4183 10 24 10H12ZM12 24.25C15.4518 24.25 18.25 21.4518 18.25 18C18.25 14.5482 15.4518 11.75 12 11.75C8.54822 11.75 5.75 14.5482 5.75 18C5.75 21.4518 8.54822 24.25 12 24.25Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8944 11C16.9797 11.833 19.25 14.6514 19.25 18C19.25 21.3486 16.9797 24.167 13.8944 25H24C27.866 25 31 21.866 31 18C31 14.134 27.866 11 24 11H13.8944ZM3 18C3 13.0294 7.02944 9 12 9H24C28.9706 9 33 13.0294 33 18C33 22.9706 28.9706 27 24 27H12C7.02944 27 3 22.9706 3 18ZM12 12.75C9.1005 12.75 6.75 15.1005 6.75 18C6.75 20.8995 9.1005 23.25 12 23.25C14.8995 23.25 17.25 20.8995 17.25 18C17.25 15.1005 14.8995 12.75 12 12.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
