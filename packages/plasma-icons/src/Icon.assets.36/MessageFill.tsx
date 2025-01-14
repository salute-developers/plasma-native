import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.47042 17.8898C5.47042 10.909 11.1294 5.25 18.1102 5.25C25.091 5.25 30.75 10.909 30.75 17.8898C30.75 24.8706 25.091 30.5296 18.1102 30.5296C16.6084 30.5296 15.1656 30.2672 13.8267 29.785C13.023 29.4956 12.2336 29.4122 11.5389 29.6068L7.72118 30.6757C6.26096 31.0846 4.91544 29.739 5.3243 28.2788L6.39325 24.4612C6.58779 23.7664 6.50443 22.977 6.21498 22.1733C5.73278 20.8344 5.47042 19.3917 5.47042 17.8898Z"
            fill="currentColor"
        />
    </s.Svg>
);
