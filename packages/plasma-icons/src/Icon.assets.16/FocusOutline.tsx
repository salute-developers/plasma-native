import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FocusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5ZM0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.3111 7.4998C10.3111 9.05217 9.05263 10.3106 7.50026 10.3106C5.9479 10.3106 4.68945 9.05217 4.68945 7.4998C4.68945 5.94744 5.9479 4.68899 7.50026 4.68899C9.05263 4.68899 10.3111 5.94744 10.3111 7.4998Z"
            fill="currentColor"
        />
    </s.Svg>
);
