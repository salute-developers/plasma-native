import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureRight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3637 25.5455C9.92434 25.1062 9.92434 24.3938 10.3637 23.9545L16.3182 18L10.3637 12.0455C9.92434 11.6062 9.92434 10.8938 10.3637 10.4545C10.803 10.0152 11.5153 10.0152 11.9547 10.4545L19.5002 18L11.9547 25.5455C11.5153 25.9848 10.803 25.9848 10.3637 25.5455Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.374 25.5456C17.9347 25.1063 17.9347 24.394 18.374 23.9546L24.3285 18.0001L18.374 12.0456C17.9347 11.6063 17.9347 10.894 18.374 10.4546C18.8134 10.0153 19.5257 10.0153 19.965 10.4546L27.5105 18.0001L19.965 25.5456C19.5257 25.985 18.8134 25.985 18.374 25.5456Z"
            fill="currentColor"
        />
    </s.Svg>
);
