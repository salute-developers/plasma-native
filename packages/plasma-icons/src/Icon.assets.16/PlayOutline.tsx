import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlayOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.175 6.6576C14.2083 7.2542 14.2083 8.74568 13.175 9.34228L5.825 13.5858C4.79167 14.1824 3.5 13.4367 3.5 12.2435L3.5 3.75641C3.5 2.56322 4.79167 1.81748 5.825 2.41407L13.175 6.6576ZM12.675 8.47625C13.0417 8.26456 13.0417 7.73532 12.675 7.52363L5.325 3.2801C4.95833 3.0684 4.5 3.33302 4.5 3.75641L4.5 12.2435C4.5 12.6669 4.95833 12.9315 5.325 12.7198L12.675 8.47625Z"
            fill="currentColor"
        />
    </s.Svg>
);
