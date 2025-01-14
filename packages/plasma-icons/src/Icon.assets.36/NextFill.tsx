import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NextFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.0007 28.9982C31.0007 29.5505 30.553 29.9982 30.0007 29.9982C29.4485 29.9982 29.0007 29.5505 29.0007 28.9982V7C29.0007 6.44772 29.4485 6 30.0007 6C30.553 6 31.0007 6.44772 31.0007 7V28.9982ZM23.4321 16.4568C24.8725 17.3334 24.8725 19.4244 23.4321 20.301L8.41966 29.4366C6.92026 30.349 5 29.2697 5 27.5145L5 9.2433C5 7.4881 6.92026 6.40878 8.41966 7.32122L23.4321 16.4568Z"
            fill="currentColor"
        />
    </s.Svg>
);
