import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureLeft: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.6366 25.5455C26.0759 25.1062 26.0759 24.3938 25.6366 23.9545L19.6821 18L25.6366 12.0455C26.0759 11.6062 26.0759 10.8938 25.6366 10.4545C25.1973 10.0152 24.4849 10.0152 24.0456 10.4545L16.5001 18L24.0456 25.5455C24.4849 25.9848 25.1973 25.9848 25.6366 25.5455Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5911 25.5456C18.0304 25.1063 18.0304 24.394 17.5911 23.9546L11.6366 18.0001L17.5911 12.0456C18.0304 11.6063 18.0304 10.894 17.5911 10.4546C17.1517 10.0153 16.4394 10.0153 16.0001 10.4546L8.45459 18.0001L16.0001 25.5456C16.4394 25.985 17.1517 25.985 17.5911 25.5456Z"
            fill="currentColor"
        />
    </s.Svg>
);
