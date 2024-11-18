import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Variable: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 17 16" width={17} height={16} fill="none" {...props}>
        <s.G clipPath="url(#clip0_43673_20)">
            <s.Path
                d="M0.143066 7.89286C0.542694 7.89286 1.50157 6.89926 1.50157 5.99939V3.9997C1.50157 2.59991 1.98911 2 2.88428 2H3.57164V2.95012H2.88428C2.42878 3.07143 2.34878 3.61226 2.34878 4.21217V6.01189C2.34878 7.03674 2.2129 7.65539 1.50157 7.89286C2.2129 8.14282 2.34878 8.77397 2.34878 9.78632V11.5735C2.34878 12.186 2.42878 12.7143 2.91625 12.8551H3.57164V13.7857H2.88428C1.98911 13.7857 1.50157 13.1858 1.50157 11.786V9.79882C1.50157 8.89895 0.542694 7.89286 0.143066 7.89286Z"
                fill="currentColor"
            />
            <s.Path
                d="M16.1431 7.89286C15.7434 7.89286 14.7846 6.89926 14.7846 5.99939V3.9997C14.7846 2.59991 14.297 2 13.4019 2H12.7145V2.95012H13.4019C13.8574 3.07143 13.9374 3.61226 13.9374 4.21217V6.01189C13.9374 7.03674 14.0732 7.65539 14.7846 7.89286C14.0732 8.14282 13.9374 8.77397 13.9374 9.78632V11.5735C13.9374 12.186 13.8574 12.7143 13.3699 12.8551H12.7145V13.7857H13.4019C14.297 13.7857 14.7846 13.1858 14.7846 11.786V9.79882C14.7846 8.89895 15.7434 7.89286 16.1431 7.89286Z"
                fill="currentColor"
            />
            <s.Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.13176 7.08147V4H8.34609V10.8988H9.08414V10.1078C9.13176 10.2243 9.19525 10.3377 9.27461 10.4481C9.35926 10.5523 9.45713 10.6474 9.56824 10.7332C9.68463 10.813 9.81425 10.8774 9.9571 10.9264C10.1052 10.9755 10.2666 11 10.4412 11C10.7163 11 10.965 10.954 11.1872 10.862C11.4147 10.77 11.6051 10.6259 11.7586 10.4297C11.912 10.2273 12.031 9.96978 12.1157 9.65703C12.2003 9.33815 12.2427 8.95182 12.2427 8.49803C12.2427 8.0933 12.2003 7.74682 12.1157 7.45861C12.0363 7.17039 11.9199 6.9343 11.7665 6.75033C11.6184 6.56636 11.4385 6.43145 11.2269 6.3456C11.0152 6.25361 10.7798 6.20762 10.5206 6.20762C10.1396 6.20762 9.83806 6.29654 9.61586 6.47438C9.39365 6.64608 9.23228 6.84845 9.13176 7.08147ZM9.46507 9.8502C9.25873 9.6233 9.14763 9.30136 9.13176 8.88436V8.31406C9.15292 7.90933 9.25609 7.59658 9.44126 7.37582C9.63173 7.14893 9.91742 7.03548 10.2984 7.03548C10.4729 7.03548 10.629 7.06308 10.7666 7.11827C10.9094 7.16732 11.0285 7.25318 11.1237 7.37582C11.2242 7.49233 11.3009 7.64564 11.3538 7.83574C11.412 8.02584 11.4411 8.26194 11.4411 8.54402C11.4411 9.13885 11.3486 9.56198 11.1634 9.8134C10.9835 10.0587 10.6899 10.1813 10.2825 10.1813C9.94917 10.1813 9.6767 10.071 9.46507 9.8502Z"
                fill="currentColor"
            />
            <s.Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.09183 6.33651C4.85904 6.42236 4.67651 6.52354 4.54424 6.64006V7.85425C4.6818 7.59669 4.86169 7.39126 5.08389 7.23795C5.31139 7.08465 5.59444 7.00799 5.93305 7.00799C6.20816 7.00799 6.42244 7.07545 6.57586 7.21036C6.73459 7.33914 6.81395 7.58136 6.81395 7.93703V8.22219H5.89337C5.63941 8.22219 5.40927 8.24365 5.20293 8.28657C5.00189 8.3295 4.82994 8.40309 4.68709 8.50734C4.54424 8.60545 4.43314 8.74036 4.35378 8.91207C4.27971 9.07764 4.24268 9.2892 4.24268 9.54676C4.24268 10.0067 4.35907 10.3593 4.59186 10.6046C4.82465 10.8499 5.13945 10.9725 5.53625 10.9725C5.85369 10.9725 6.1288 10.8928 6.36159 10.7334C6.59438 10.5678 6.76104 10.3562 6.86156 10.0987V10.8989H7.60755V7.86345C7.60755 7.55683 7.57051 7.29928 7.49644 7.09078C7.42766 6.87615 7.32185 6.70444 7.179 6.57567C7.03615 6.44689 6.85892 6.35491 6.64729 6.29972C6.44095 6.23839 6.20287 6.20773 5.93305 6.20773C5.60503 6.20773 5.32462 6.25066 5.09183 6.33651ZM6.22668 10.0527C6.0997 10.1079 5.94627 10.1355 5.76639 10.1355C5.52831 10.1355 5.34843 10.0741 5.22674 9.95149C5.10506 9.82884 5.04421 9.6694 5.04421 9.47317C5.04421 9.24014 5.11828 9.08377 5.26642 9.00405C5.41456 8.9182 5.64735 8.87527 5.96479 8.87527H6.81395V9.3168C6.80336 9.39652 6.77691 9.48544 6.73459 9.58355C6.69226 9.67554 6.62877 9.76445 6.54412 9.85031C6.45947 9.93003 6.35366 9.99748 6.22668 10.0527Z"
                fill="currentColor"
            />
        </s.G>
        <s.Defs>
            <s.ClipPath id="clip0_43673_20">
                <s.Rect width="16" height="16" fill="currentColor" transform="translate(0.143066)" />
            </s.ClipPath>
        </s.Defs>
    </s.Svg>
);