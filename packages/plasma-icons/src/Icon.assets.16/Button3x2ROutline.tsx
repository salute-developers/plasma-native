import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Button3x2ROutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8665 4.16886C15 4.4309 15 4.77394 15 5.46V10.54C15 11.2261 15 11.5691 14.8665 11.8311C14.749 12.0616 14.5616 12.249 14.3311 12.3665C14.0691 12.5 13.726 12.5 13.04 12.5H12.7526C12.0665 12.5 11.7235 12.5 11.4614 12.3665C11.2309 12.249 11.0435 12.0616 10.9261 11.8311C10.7926 11.5691 10.7926 11.2261 10.7926 10.54V5.46C10.7926 4.77394 10.7926 4.4309 10.9261 4.16886C11.0435 3.93836 11.2309 3.75096 11.4614 3.63352C11.7235 3.5 12.0665 3.5 12.7526 3.5H13.04C13.726 3.5 14.0691 3.5 14.3311 3.63352C14.5616 3.75096 14.749 3.93836 14.8665 4.16886ZM8.03948 4.55762H7.23272C7.09974 4.5576 6.97164 4.55759 6.86341 4.56643C6.74494 4.57611 6.60699 4.59882 6.4686 4.66934C6.27573 4.76761 6.11893 4.92441 6.02066 5.11728C5.95015 5.25566 5.92743 5.39362 5.91775 5.51208C5.90891 5.62031 5.90893 5.7484 5.90894 5.88137V10.1185C5.90893 10.2514 5.90891 10.3795 5.91775 10.4878C5.92743 10.6062 5.95015 10.7442 6.02066 10.8826C6.11893 11.0754 6.27573 11.2322 6.4686 11.3305C6.60699 11.401 6.74494 11.4237 6.86341 11.4334C6.97164 11.4423 7.09975 11.4422 7.23273 11.4422H8.03947C8.17245 11.4422 8.30055 11.4423 8.40879 11.4334C8.52726 11.4237 8.66521 11.401 8.8036 11.3305C8.99646 11.2322 9.15327 11.0754 9.25154 10.8826C9.32205 10.7442 9.34476 10.6062 9.35444 10.4878C9.36329 10.3795 9.36327 10.2514 9.36326 10.1185V5.8814C9.36327 5.74842 9.36329 5.62032 9.35444 5.51208C9.34476 5.39362 9.32205 5.25566 9.25154 5.11728C9.15327 4.92441 8.99646 4.76761 8.8036 4.66934C8.66521 4.59882 8.52726 4.57611 8.40879 4.56643C8.30056 4.55759 8.17246 4.5576 8.03948 4.55762ZM8.35487 5.566C8.35577 5.5726 8.35679 5.58163 8.35776 5.59351C8.36287 5.65598 8.36326 5.74235 8.36326 5.89762V10.1022C8.36326 10.2575 8.36287 10.3439 8.35776 10.4063C8.35679 10.4182 8.35577 10.4272 8.35487 10.4338C8.34827 10.4347 8.33924 10.4358 8.32736 10.4367C8.2649 10.4418 8.17852 10.4422 8.02326 10.4422H7.24894C7.09368 10.4422 7.0073 10.4418 6.94484 10.4367C6.93295 10.4358 6.92393 10.4347 6.91733 10.4338C6.91643 10.4272 6.91541 10.4182 6.91443 10.4063C6.90933 10.3439 6.90894 10.2575 6.90894 10.1022V5.89762C6.90894 5.74235 6.90933 5.65598 6.91443 5.59351C6.91541 5.58163 6.91643 5.5726 6.91733 5.566C6.92393 5.56511 6.93295 5.56408 6.94484 5.56311C7.0073 5.55801 7.09368 5.55762 7.24894 5.55762H8.02326C8.17852 5.55762 8.2649 5.55801 8.32736 5.56311C8.33924 5.56408 8.34827 5.56511 8.35487 5.566ZM3.13139 4.55762H2.32463C2.19166 4.5576 2.06356 4.55759 1.95532 4.56643C1.83686 4.57611 1.6989 4.59882 1.56052 4.66934C1.36765 4.76761 1.21085 4.92441 1.11257 5.11728C1.04206 5.25566 1.01935 5.39362 1.00967 5.51208C1.00083 5.62031 1.00084 5.7484 1.00086 5.88137V10.1185C1.00084 10.2514 1.00083 10.3795 1.00967 10.4878C1.01935 10.6062 1.04206 10.7442 1.11257 10.8826C1.21085 11.0754 1.36765 11.2322 1.56052 11.3305C1.6989 11.401 1.83686 11.4237 1.95532 11.4334C2.06356 11.4423 2.19166 11.4422 2.32464 11.4422H3.13139C3.26437 11.4422 3.39247 11.4423 3.50071 11.4334C3.61917 11.4237 3.75713 11.401 3.89551 11.3305C4.08838 11.2322 4.24518 11.0754 4.34345 10.8826C4.41396 10.7442 4.43668 10.6062 4.44636 10.4878C4.4552 10.3795 4.45519 10.2514 4.45517 10.1185V5.8814C4.45519 5.74842 4.4552 5.62032 4.44636 5.51208C4.43668 5.39362 4.41396 5.25566 4.34345 5.11728C4.24518 4.92441 4.08838 4.76761 3.89551 4.66934C3.75713 4.59882 3.61917 4.57611 3.50071 4.56643C3.39247 4.55759 3.26437 4.5576 3.13139 4.55762ZM3.44679 5.566C3.44768 5.5726 3.44871 5.58163 3.44968 5.59351C3.45478 5.65598 3.45517 5.74235 3.45517 5.89762V10.1022C3.45517 10.2575 3.45478 10.3439 3.44968 10.4063C3.44871 10.4182 3.44768 10.4272 3.44679 10.4338C3.44019 10.4347 3.43116 10.4358 3.41927 10.4367C3.35681 10.4418 3.27044 10.4422 3.11517 10.4422H2.34086C2.18559 10.4422 2.09922 10.4418 2.03675 10.4367C2.02487 10.4358 2.01584 10.4347 2.00924 10.4338C2.00835 10.4272 2.00732 10.4182 2.00635 10.4063C2.00125 10.3439 2.00086 10.2575 2.00086 10.1022V5.89762C2.00086 5.74235 2.00125 5.65598 2.00635 5.59351C2.00732 5.58163 2.00835 5.5726 2.00924 5.566C2.01584 5.56511 2.02487 5.56408 2.03675 5.56311C2.09921 5.55801 2.18559 5.55762 2.34086 5.55762H3.11517C3.27043 5.55762 3.35681 5.55801 3.41927 5.56311C3.43116 5.56408 3.44019 5.56511 3.44679 5.566Z"
            fill="currentColor"
        />
    </s.Svg>
);
