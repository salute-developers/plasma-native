import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const UsbCFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 5.25C2.23122 5.25 1 6.48122 1 8C1 9.51878 2.23122 10.75 3.75 10.75H12.25C13.7688 10.75 15 9.51878 15 8C15 6.48122 13.7688 5.25 12.25 5.25H3.75ZM4.32422 7.49981C4.04808 7.49981 3.82422 7.72367 3.82422 7.99981C3.82422 8.27595 4.04808 8.49981 4.32422 8.49981H11.6742C11.9504 8.49981 12.1742 8.27595 12.1742 7.99981C12.1742 7.72367 11.9504 7.49981 11.6742 7.49981H4.32422Z"
            fill="currentColor"
        />
    </s.Svg>
);
