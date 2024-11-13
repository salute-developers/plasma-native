import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbDiodeOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.9749 1C4.89423 1 2.3999 3.50585 2.3999 6.59319C2.3999 8.21002 3.08438 9.66757 4.17756 10.6883C4.51379 11.0023 4.94978 11.1321 5.36031 11.1321H10.5895C11 11.1321 11.436 11.0023 11.7722 10.6883C12.8654 9.66757 13.5499 8.21002 13.5499 6.59319C13.5499 3.50585 11.0556 1 7.9749 1ZM3.3999 6.59319C3.3999 4.05475 5.44988 2 7.9749 2C10.4999 2 12.5499 4.05475 12.5499 6.59319C12.5499 7.92212 11.9884 9.11828 11.0898 9.95739C10.9733 10.0661 10.7983 10.1321 10.5895 10.1321H5.36031C5.1515 10.1321 4.97649 10.0661 4.86003 9.95739C3.96136 9.11828 3.3999 7.92212 3.3999 6.59319Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.02491 12.5645C5.02491 12.2883 5.24877 12.0645 5.52491 12.0645H10.4249C10.7011 12.0645 10.9249 12.2883 10.9249 12.5645C10.9249 12.8406 10.7011 13.0645 10.4249 13.0645H5.52491C5.24877 13.0645 5.02491 12.8406 5.02491 12.5645Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.72491 14.4971C5.72491 14.2209 5.94876 13.9971 6.22491 13.9971H9.72491C10.001 13.9971 10.2249 14.2209 10.2249 14.4971C10.2249 14.7732 10.001 14.9971 9.72491 14.9971H6.22491C5.94876 14.9971 5.72491 14.7732 5.72491 14.4971Z"
            fill="currentColor"
        />
    </s.Svg>
);
