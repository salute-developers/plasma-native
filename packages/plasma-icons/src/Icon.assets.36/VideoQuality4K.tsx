import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoQuality4K: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M3.75 19.4571L10.403 10.5H13.793V19.2857H15.4456V22.1357H13.793V25.5H10.5936V22.1357H3.75V19.4571ZM6.94935 19.2857H10.5936V14.5071L6.94935 19.2857Z"
            fill="currentColor"
        />
        <s.Path
            d="M21.4231 19.3929V25.5H18.033V10.5H21.4231V16.4571H23.3723L27.2285 10.5H31.2542L26.2962 17.5286L32.25 25.5H27.9701L23.563 19.3929H21.4231Z"
            fill="currentColor"
        />
    </s.Svg>
);
