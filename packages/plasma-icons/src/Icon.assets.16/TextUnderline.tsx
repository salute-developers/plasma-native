import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TextUnderline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0393 8.932L11.0193 11.55H12.4053L8.61134 1.75H7.33734L3.59934 11.55H4.88734L5.85334 8.932H10.0393ZM6.27334 7.812L7.93934 3.318L9.61934 7.812H6.27334ZM3 13.2539C2.72386 13.2539 2.5 13.4778 2.5 13.7539C2.5 14.03 2.72386 14.2539 3 14.2539H13.0012C13.2773 14.2539 13.5012 14.03 13.5012 13.7539C13.5012 13.4778 13.2773 13.2539 13.0012 13.2539H3Z"
            fill="currentColor"
        />
    </s.Svg>
);
