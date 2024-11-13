import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PreviousOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.02482 9.31921C4.0354 8.71489 4.0354 7.27798 5.02482 6.67365L11.8916 2.47953C12.9244 1.84868 14.2495 2.59203 14.2495 3.80231V12.1906C14.2495 13.4008 12.9245 14.1442 11.8916 13.5133L5.02482 9.31921ZM5.54607 7.52706C5.19499 7.7415 5.19498 8.25137 5.54607 8.4658L12.4128 12.6599C12.7793 12.8838 13.2495 12.62 13.2495 12.1906V3.80231C13.2495 3.37286 12.7793 3.10908 12.4128 3.33294L5.54607 7.52706ZM1.75 3.09282C1.75 2.81668 1.97386 2.59282 2.25 2.59282C2.52614 2.59282 2.75 2.81668 2.75 3.09282V13.2489C2.75 13.525 2.52614 13.7489 2.25 13.7489C1.97386 13.7489 1.75 13.525 1.75 13.2489V3.09282Z"
            fill="currentColor"
        />
    </s.Svg>
);
