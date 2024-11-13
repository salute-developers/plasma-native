import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BankCardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.26637 3.87711C1.06385 4.27996 1.0153 4.7765 1.00367 5.59961H14.9963C14.9847 4.7765 14.9362 4.27996 14.7336 3.87711C14.4923 3.39714 14.1029 3.00766 13.6229 2.76637C13.093 2.5 12.4011 2.5 11.0172 2.5H4.98276C3.59889 2.5 2.90696 2.5 2.37711 2.76637C1.89714 3.00766 1.50766 3.39714 1.26637 3.87711ZM15 7.09961H1V9.5C1 10.9001 1 11.6002 1.27248 12.135C1.51217 12.6054 1.89462 12.9878 2.36502 13.2275C2.8998 13.5 3.59987 13.5 5 13.5H11.8C12.9201 13.5 13.4802 13.5 13.908 13.282C14.2843 13.0903 14.5903 12.7843 14.782 12.408C15 11.9802 15 11.4201 15 10.3V7.09961Z"
            fill="currentColor"
        />
    </s.Svg>
);
