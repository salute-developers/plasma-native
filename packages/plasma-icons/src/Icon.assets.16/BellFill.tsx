import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BellFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.29548 1.86424C9.36586 2.0341 9.40208 2.21615 9.40208 2.4H9.28943C9.99665 2.58026 10.5658 2.91843 11.0141 3.38978C11.6916 4.10202 12.0401 5.06365 12.2341 6.06764C12.4285 7.0739 12.4782 8.18288 12.5137 9.22995L12.5242 9.54728C12.5494 10.3194 12.5733 11.0475 12.643 11.7H13.253C13.5291 11.7 13.753 11.9239 13.753 12.2C13.753 12.4761 13.5291 12.7 13.253 12.7H2.75C2.47386 12.7 2.25 12.4761 2.25 12.2C2.25 11.9239 2.47386 11.7 2.75 11.7H3.35999C3.42972 11.0474 3.45354 10.3194 3.4788 9.54728L3.48931 9.22995C3.52477 8.18288 3.57444 7.0739 3.76888 6.06764C3.96289 5.06365 4.31138 4.10202 4.98884 3.38978C5.43716 2.91843 6.00633 2.58026 6.71354 2.4H6.60129C6.60129 2.21615 6.63751 2.0341 6.70789 1.86424C6.77826 1.69439 6.88142 1.54005 7.01146 1.41005C7.14149 1.28005 7.29587 1.17693 7.46578 1.10657C7.63568 1.03621 7.81778 1 8.00169 1C8.18559 1 8.36769 1.03621 8.53759 1.10657C8.7075 1.17693 8.86188 1.28005 8.99192 1.41005C9.12195 1.54005 9.22511 1.69439 9.29548 1.86424ZM11.6379 11.7C11.5718 11.0306 11.5482 10.3053 11.5248 9.58528L11.5142 9.2638C11.4786 8.21087 11.4298 7.1761 11.2523 6.25736C11.0743 5.33635 10.7773 4.59173 10.2896 4.07897C9.81806 3.58326 9.11617 3.25 8.00149 3.25C6.8868 3.25 6.18492 3.58326 5.71342 4.07897C5.2257 4.59173 4.92869 5.33635 4.75072 6.25736C4.57319 7.1761 4.52439 8.21087 4.48874 9.2638L4.47815 9.58525C4.45475 10.3053 4.43119 11.0306 4.36511 11.7H11.6379ZM6.02002 13.6001C6.30838 14.4157 7.08647 15.0001 8.00108 15.0001C8.9157 15.0001 9.69379 14.4157 9.98215 13.6001H6.02002Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.05 4.75L6 3.35L8 2.26317L9.95 3.35L11.1667 4.75L12.05 8.6V12.45H4V8.6L5.05 4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
