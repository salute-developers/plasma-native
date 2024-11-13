import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const UmbrellaOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.9985 1C6.1344 1 4.34616 1.73693 3.0273 3.04945C2.01189 4.05998 1.33877 5.34801 1.08275 6.73488L1.07971 6.75129C1.0503 6.91056 1.02381 7.05405 1.01076 7.16451C1.00399 7.22182 0.997978 7.29203 1.00156 7.36327C1.00462 7.42439 1.01684 7.55461 1.10102 7.68138C1.23302 7.88018 1.45208 7.99207 1.69052 7.98246C1.85396 7.97588 1.97345 7.89805 2.01837 7.8675C2.07734 7.8274 2.13188 7.77946 2.17724 7.7371C2.26588 7.65431 2.37779 7.53699 2.50662 7.40193L2.51762 7.3904C2.87291 7.01796 3.29786 6.74337 3.76182 6.74337C4.28438 6.74337 4.62621 6.93304 4.8615 7.15985L4.86556 7.16377C5.05537 7.34674 5.20261 7.48866 5.30713 7.58616C5.35924 7.63477 5.40651 7.67777 5.44599 7.71109C5.46534 7.72741 5.48898 7.74668 5.51415 7.76471L5.51572 7.76584C5.5297 7.77595 5.59201 7.82102 5.6763 7.84773L5.68917 7.85193L5.69041 7.85235C5.69446 7.8537 5.7038 7.85683 5.71256 7.85956L5.71366 7.8599C5.73236 7.86575 5.79702 7.88596 5.88016 7.88596C5.96331 7.88596 6.02797 7.86575 6.04667 7.8599L6.04777 7.85956C6.05761 7.85649 6.06818 7.85293 6.07116 7.85193L6.08403 7.84773C6.16832 7.82102 6.23063 7.77595 6.24461 7.76584L6.24617 7.76471C6.27134 7.74668 6.29499 7.72741 6.31434 7.71109C6.35382 7.67777 6.40109 7.63477 6.4532 7.58616C6.55769 7.48869 6.70487 7.34682 6.8946 7.16392L6.89883 7.15985C7.13412 6.93304 7.47595 6.74337 7.9985 6.74337C8.52106 6.74337 8.86289 6.93304 9.09818 7.15985L9.10224 7.16377C9.29205 7.34673 9.43929 7.48866 9.54381 7.58616C9.59592 7.63477 9.64319 7.67777 9.68267 7.71109C9.70201 7.72741 9.72566 7.74668 9.75083 7.76471L9.7524 7.76584C9.76638 7.77595 9.82869 7.82102 9.91298 7.84773L9.92585 7.85193C9.92883 7.85293 9.9394 7.85649 9.94924 7.85956L9.95034 7.8599C9.96904 7.86575 10.0337 7.88596 10.1168 7.88596C10.2 7.88596 10.2646 7.86575 10.2834 7.8599L10.2845 7.85956C10.2932 7.85683 10.3025 7.85371 10.3066 7.85236L10.3078 7.85193L10.3207 7.84773C10.405 7.82102 10.4673 7.77595 10.4813 7.76584L10.4829 7.76471C10.508 7.74668 10.5317 7.72741 10.551 7.71109C10.5905 7.67777 10.6378 7.63477 10.6899 7.58616C10.7943 7.48871 10.9415 7.34689 11.1311 7.16407L11.1355 7.15985C11.3708 6.93304 11.7126 6.74337 12.2352 6.74337C12.6991 6.74337 13.1241 7.01796 13.4794 7.3904L13.4904 7.40191C13.6192 7.53697 13.7311 7.65431 13.8198 7.7371C13.8651 7.77946 13.9197 7.8274 13.9786 7.8675C14.0236 7.89805 14.143 7.97588 14.3065 7.98246C14.5449 7.99207 14.764 7.88018 14.896 7.68138C14.9802 7.55461 14.9924 7.42439 14.9955 7.36327C14.999 7.29203 14.993 7.22182 14.9862 7.16451C14.9732 7.05406 14.9467 6.9106 14.9173 6.75135L14.9143 6.73488C14.6582 5.34801 13.9851 4.05998 12.9697 3.04945C11.6509 1.73693 9.86261 1 7.9985 1ZM3.7327 3.75827C4.86365 2.63275 6.39806 2.00001 7.9985 2.00001C9.59895 2.00001 11.1334 2.63275 12.2643 3.75827C12.9882 4.47869 13.5089 5.36321 13.7899 6.32371C13.3848 6.0069 12.8611 5.74335 12.2352 5.74335C11.4329 5.74335 10.8475 6.04846 10.4415 6.43988C10.3099 6.56674 10.2027 6.67007 10.1168 6.75187C10.031 6.67007 9.9238 6.56674 9.79219 6.43988C9.38614 6.04846 8.80083 5.74335 7.9985 5.74335C7.19618 5.74335 6.61087 6.04846 6.20482 6.43988C6.07321 6.56674 5.96601 6.67007 5.88016 6.75187C5.79432 6.67007 5.68712 6.56674 5.55551 6.43988C5.14946 6.04846 4.56415 5.74335 3.76182 5.74335C3.13588 5.74335 2.61223 6.0069 2.20715 6.32371C2.48814 5.36321 3.0088 4.47868 3.7327 3.75827ZM7.99625 7.50105C8.2724 7.50105 8.49625 7.72491 8.49625 8.00106V12.9201C8.49625 12.9385 8.49525 12.9568 8.4933 12.9747C8.48636 13.2291 8.43266 13.4801 8.33475 13.7154C8.22959 13.968 8.07551 14.1974 7.88144 14.3906C7.68737 14.5837 7.45711 14.7368 7.20387 14.8412C6.95062 14.9456 6.67929 14.9993 6.40532 14.9993C6.13136 14.9993 5.86002 14.9456 5.60678 14.8412C5.35353 14.7368 5.12327 14.5837 4.9292 14.3906C4.73513 14.1974 4.58105 13.968 4.47589 13.7153C4.37073 13.4627 4.31657 13.1918 4.31657 12.9181C4.31657 12.642 4.54042 12.4181 4.81657 12.4181C5.09271 12.4181 5.31657 12.642 5.31657 12.9181C5.31657 13.0598 5.3446 13.2001 5.39911 13.3311C5.45364 13.4621 5.53361 13.5813 5.6346 13.6818C5.73559 13.7823 5.85562 13.8621 5.98788 13.9166C6.12016 13.9712 6.26201 13.9993 6.40532 13.9993C6.54863 13.9993 6.69048 13.9712 6.82276 13.9166C6.95502 13.8621 7.07505 13.7823 7.17604 13.6818C7.27703 13.5813 7.35701 13.4621 7.41153 13.3311C7.46605 13.2001 7.49408 13.0598 7.49408 12.9181C7.49408 12.9023 7.49481 12.8866 7.49625 12.8712V8.00106C7.49625 7.72491 7.72011 7.50105 7.99625 7.50105Z"
            fill="currentColor"
        />
    </s.Svg>
);
