import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlockOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.54135 8.12713L27.8717 26.4575C32.2569 21.3503 32.0301 13.6461 27.1914 8.80745C22.3528 3.96877 14.6486 3.742 9.54135 8.12713ZM26.4575 27.8717L8.12713 9.54135C3.742 14.6486 3.96877 22.3528 8.80745 27.1914C13.6461 32.0301 21.3503 32.2569 26.4575 27.8717ZM7.39323 7.39323C13.2509 1.53559 22.748 1.53559 28.6056 7.39323C34.4633 13.2509 34.4633 22.748 28.6056 28.6056C22.748 34.4633 13.2509 34.4633 7.39323 28.6056C1.53559 22.748 1.53559 13.2509 7.39323 7.39323Z"
            fill="currentColor"
        />
    </s.Svg>
);
