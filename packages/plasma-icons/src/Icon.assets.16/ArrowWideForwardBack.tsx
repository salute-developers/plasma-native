import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowWideForwardBack: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75418 2.64323C9.61048 2.50214 9.39614 2.46103 9.21043 2.53896C9.02472 2.61688 8.90389 2.79862 8.90389 3.00001V6.4487C8.90389 6.72484 9.12775 6.9487 9.40389 6.9487C9.68003 6.9487 9.90389 6.72484 9.90389 6.4487V4.19163L13.7834 8.00061L9.90389 11.8096V10.2423C9.90389 9.96612 9.68003 9.74226 9.40389 9.74226H4.48633C4.21019 9.74226 3.98633 9.96612 3.98633 10.2423C3.98633 10.5184 4.21019 10.7423 4.48633 10.7423H8.90389V13.0012C8.90389 13.2026 9.02472 13.3843 9.21043 13.4623C9.39614 13.5402 9.61048 13.4991 9.75418 13.358L14.8474 8.35739C14.9431 8.26337 14.9971 8.13481 14.9971 8.00061C14.9971 7.86641 14.9431 7.73785 14.8474 7.64383L9.75418 2.64323ZM3.43289 5.25327C3.62994 5.0598 3.63284 4.74323 3.43938 4.54619C3.24592 4.34914 2.92935 4.34624 2.7323 4.5397L1.15166 6.09161C1.0559 6.18563 1.00195 6.3142 1.00195 6.44839C1.00195 6.58259 1.0559 6.71116 1.15166 6.80518L2.7323 8.35709C2.92935 8.55055 3.24592 8.54764 3.43938 8.3506C3.63284 8.15355 3.62994 7.83698 3.43289 7.64352L2.72489 6.94839H7.29765C7.57379 6.94839 7.79765 6.72454 7.79765 6.44839C7.79765 6.17225 7.57379 5.94839 7.29765 5.94839H2.72489L3.43289 5.25327Z"
            fill="currentColor"
        />
    </s.Svg>
);
