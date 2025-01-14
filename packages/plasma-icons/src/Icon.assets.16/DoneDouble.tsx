import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoneDouble: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.G clipPath="url(#clip0_40914_61)">
            <s.Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3864 3.89097C12.5847 4.08315 12.5897 4.3997 12.3975 4.59799L5.12827 12.098C5.03409 12.1952 4.90455 12.25 4.76923 12.25C4.63391 12.25 4.50437 12.1952 4.4102 12.098L1.64097 9.24084C1.44878 9.04256 1.45372 8.72601 1.65201 8.53382C1.8503 8.34164 2.16685 8.34658 2.35903 8.54487L4.76923 11.0316L11.6794 3.90201C11.8716 3.70372 12.1882 3.69878 12.3864 3.89097ZM15.848 3.89097C16.0463 4.08315 16.0512 4.3997 15.859 4.59799L8.5898 12.098C8.39762 12.2963 8.08107 12.3012 7.88278 12.109C7.68449 11.9168 7.67955 11.6003 7.87174 11.402L15.141 3.90201C15.3332 3.70372 15.6497 3.69878 15.848 3.89097Z"
                fill="currentColor"
            />
        </s.G>
        <s.Defs>
            <s.ClipPath id="clip0_40914_61">
                <s.Rect width="16" height="16" fill="currentColor" />
            </s.ClipPath>
        </s.Defs>
    </s.Svg>
);
