import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RubleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 7C10.3358 7 10 7.33579 10 7.75V11.5H9.25C8.83579 11.5 8.5 11.8358 8.5 12.25C8.5 12.6642 8.83579 13 9.25 13H10V14H9.25C8.83579 14 8.5 14.3358 8.5 14.75C8.5 15.1642 8.83579 15.5 9.25 15.5H10V16.25C10 16.6642 10.3358 17 10.75 17C11.1642 17 11.5 16.6642 11.5 16.25V15.5H13.25C13.6642 15.5 14 15.1642 14 14.75C14 14.3358 13.6642 14 13.25 14H11.5V13H13C14.6569 13 16 11.6569 16 10C16 8.34315 14.6569 7 13 7H10.75ZM13 11.5H11.5V8.5H13C13.8284 8.5 14.5 9.17157 14.5 10C14.5 10.8284 13.8284 11.5 13 11.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
            fill="currentColor"
        />
    </s.Svg>
);
