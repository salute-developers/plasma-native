import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlankDocOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M11.5345 10.2654V9.62314C11.419 9.58083 11.1985 9.50391 10.8695 9.50391C9.99445 9.50391 9.62695 9.95391 9.62695 10.9231C9.62695 11.8654 9.98745 12.2962 10.866 12.2962C11.195 12.2962 11.4365 12.2154 11.5625 12.1501V11.5231C11.44 11.6193 11.216 11.727 10.9115 11.727C10.4565 11.727 10.236 11.527 10.236 10.8885C10.236 10.2808 10.4425 10.0731 10.8835 10.0731C11.202 10.0731 11.391 10.1731 11.5345 10.2654Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.92188 10.9C6.92188 9.92308 7.31388 9.5 8.13988 9.5C9.01487 9.5 9.34387 9.92692 9.34387 10.9C9.34387 11.9115 8.92738 12.3 8.13988 12.3C7.34888 12.3 6.92188 11.8808 6.92188 10.9ZM7.53087 10.9038C7.53087 11.5731 7.76888 11.7538 8.15037 11.7538C8.53188 11.7538 8.73837 11.5615 8.73837 10.9038C8.73837 10.2423 8.53188 10.0462 8.12587 10.0462C7.72338 10.0462 7.53087 10.2769 7.53087 10.9038Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 9.55768V12.2385C4.7765 12.2577 4.9795 12.2692 5.284 12.2692C6.229 12.2692 6.642 11.8115 6.642 10.8346C6.642 9.99615 6.3445 9.53076 5.3435 9.53076C4.997 9.53076 4.794 9.53845 4.5 9.55768ZM5.312 11.7269C5.2245 11.7269 5.158 11.7231 5.074 11.7115V10.0885C5.1685 10.0769 5.249 10.0731 5.354 10.0731C5.865 10.0731 6.0505 10.3038 6.0505 10.8692C6.0505 11.4769 5.837 11.7269 5.312 11.7269Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.90517 1H5.52893C5.05678 0.999995 4.67215 0.999991 4.35989 1.0255C4.03715 1.05187 3.74793 1.10797 3.47852 1.24524C3.05516 1.46095 2.71095 1.80516 2.49524 2.22852C2.35797 2.49793 2.30187 2.78715 2.2755 3.10989C2.24999 3.42215 2.24999 3.80677 2.25 4.27892V11.7211C2.24999 12.1932 2.24999 12.5778 2.2755 12.8901C2.30187 13.2128 2.35797 13.5021 2.49524 13.7715C2.71095 14.1948 3.05516 14.539 3.47852 14.7548C3.74793 14.892 4.03715 14.9481 4.35989 14.9745C4.67215 15 5.05677 15 5.52891 15H10.4711C10.9432 15 11.3278 15 11.6401 14.9745C11.9628 14.9481 12.2521 14.892 12.5215 14.7548C12.9448 14.539 13.289 14.1948 13.5048 13.7715C13.642 13.5021 13.6981 13.2128 13.7245 12.8901C13.75 12.5778 13.75 12.1932 13.75 11.721V5.71622C13.75 5.581 13.6952 5.45156 13.5982 5.35739L9.25338 1.14118C9.16008 1.05064 9.03518 1 8.90517 1ZM3.93251 2.13624C4.03745 2.08277 4.18042 2.0435 4.44132 2.02218C4.70805 2.00039 5.0517 2 5.55 2H8.40517V3.49667C8.40517 3.87132 8.40516 4.18252 8.42591 4.43645C8.44751 4.70082 8.49406 4.94683 8.61226 5.1788C8.79442 5.53631 9.08508 5.82697 9.44259 6.00913C9.67456 6.12732 9.92057 6.17388 10.1849 6.19548C10.4389 6.21623 10.7501 6.21622 11.1247 6.21622H12.75V11.7C12.75 12.1983 12.7496 12.5419 12.7278 12.8087C12.7065 13.0696 12.6672 13.2125 12.6138 13.3175C12.4939 13.5527 12.3027 13.7439 12.0675 13.8638C11.9625 13.9172 11.8196 13.9565 11.5587 13.9778C11.2919 13.9996 10.9483 14 10.45 14H5.55C5.0517 14 4.70805 13.9996 4.44132 13.9778C4.18042 13.9565 4.03745 13.9172 3.93251 13.8638C3.69731 13.7439 3.50608 13.5527 3.38624 13.3175C3.33277 13.2125 3.2935 13.0696 3.27218 12.8087C3.25039 12.5419 3.25 12.1983 3.25 11.7V4.3C3.25 3.8017 3.25039 3.45805 3.27218 3.19132C3.2935 2.93042 3.33277 2.78745 3.38624 2.68251C3.50608 2.44731 3.69731 2.25608 3.93251 2.13624ZM12.0168 5.21622L9.40517 2.68192V3.47622C9.40517 3.8765 9.40556 4.14665 9.42259 4.35502C9.43913 4.55755 9.46887 4.6573 9.50327 4.72481C9.58955 4.89415 9.72724 5.03184 9.89658 5.11812C9.96409 5.15252 10.0638 5.18226 10.2664 5.1988C10.4747 5.21583 10.7449 5.21622 11.1452 5.21622H12.0168Z"
            fill="currentColor"
        />
    </s.Svg>
);
