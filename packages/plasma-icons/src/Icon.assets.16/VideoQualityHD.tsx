import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoQualityHD: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M5.80424 11.5V8.65H2.54353V11.5H1V4.5H2.54353V7.15H5.80424V4.5H7.34777V11.5H5.80424Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.75835 4.5H11.0447C13.7845 4.5 15 5.71 15 7.86C15 10.35 13.4565 11.5 11.1315 11.5H8.75835V4.5ZM10.3019 10H11.1798C12.7136 10 13.3889 9.2 13.3889 7.98C13.3889 6.68 12.7908 6 11.1605 6H10.3019V10Z"
            fill="currentColor"
        />
    </s.Svg>
);
