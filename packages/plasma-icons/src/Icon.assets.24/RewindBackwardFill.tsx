import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RewindBackwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M3.10922 12.7822C2.14792 12.198 2.14792 10.8028 3.10922 10.2185L10.8335 5.52421C11.8331 4.91671 13.1125 5.63631 13.1125 6.80605V16.1947C13.1125 17.3645 11.8331 18.0841 10.8335 17.4765L3.10922 12.7822Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 8.1582V14.8433L18.8335 17.4769C19.8331 18.0844 21.1125 17.3648 21.1125 16.1951V6.80643C21.1125 5.63669 19.8331 4.91708 18.8335 5.52459L14.5 8.1582Z"
            fill="currentColor"
        />
    </s.Svg>
);
