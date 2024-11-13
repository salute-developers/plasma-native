import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Button3x2LOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.13352 4.16886C1 4.4309 1 4.77394 1 5.46V10.54C1 11.2261 1 11.5691 1.13352 11.8311C1.25096 12.0616 1.43836 12.249 1.66886 12.3665C1.9309 12.5 2.27394 12.5 2.96 12.5H3.24C3.92606 12.5 4.2691 12.5 4.53114 12.3665C4.76164 12.249 4.94904 12.0616 5.06648 11.8311C5.2 11.5691 5.2 11.2261 5.2 10.54V5.46C5.2 4.77394 5.2 4.4309 5.06648 4.16886C4.94904 3.93836 4.76164 3.75096 4.53114 3.63352C4.2691 3.5 3.92606 3.5 3.24 3.5H2.96C2.27394 3.5 1.9309 3.5 1.66886 3.63352C1.43836 3.75096 1.25096 3.93836 1.13352 4.16886ZM7.94878 4.55762H8.75122C8.8842 4.5576 9.0123 4.55759 9.12053 4.56643C9.239 4.57611 9.37696 4.59882 9.51534 4.66934C9.70821 4.76761 9.86501 4.92441 9.96328 5.11728C10.0338 5.25566 10.0565 5.39362 10.0662 5.51208C10.075 5.62032 10.075 5.74842 10.075 5.88139V10.1185C10.075 10.2514 10.075 10.3795 10.0662 10.4878C10.0565 10.6062 10.0338 10.7442 9.96328 10.8826C9.86501 11.0754 9.70821 11.2322 9.51534 11.3305C9.37696 11.401 9.239 11.4237 9.12053 11.4334C9.0123 11.4423 8.88419 11.4422 8.75121 11.4422H7.94879C7.81581 11.4422 7.6877 11.4423 7.57947 11.4334C7.461 11.4237 7.32305 11.401 7.18466 11.3305C6.99179 11.2322 6.83499 11.0754 6.73672 10.8826C6.66621 10.7442 6.64349 10.6062 6.63381 10.4878C6.62497 10.3795 6.62498 10.2514 6.625 10.1185V5.8814C6.62498 5.74842 6.62497 5.62032 6.63381 5.51208C6.64349 5.39362 6.66621 5.25566 6.73672 5.11728C6.83499 4.92441 6.99179 4.76761 7.18466 4.66934C7.32305 4.59882 7.461 4.57611 7.57946 4.56643C7.6877 4.55759 7.8158 4.5576 7.94878 4.55762ZM7.63338 5.566C7.63249 5.5726 7.63146 5.58163 7.63049 5.59351C7.62539 5.65598 7.625 5.74235 7.625 5.89762V10.1022C7.625 10.2575 7.62539 10.3439 7.63049 10.4063C7.63146 10.4182 7.63249 10.4272 7.63338 10.4338C7.63999 10.4347 7.64901 10.4358 7.6609 10.4367C7.72336 10.4418 7.80974 10.4422 7.965 10.4422H8.735C8.89026 10.4422 8.97664 10.4418 9.0391 10.4367C9.05099 10.4358 9.06001 10.4347 9.06662 10.4338C9.06751 10.4272 9.06854 10.4182 9.06951 10.4063C9.07461 10.3439 9.075 10.2575 9.075 10.1022V5.89762C9.075 5.74235 9.07461 5.65598 9.06951 5.59351C9.06854 5.58163 9.06751 5.5726 9.06662 5.566C9.06001 5.56511 9.05099 5.56408 9.0391 5.56311C8.97664 5.55801 8.89026 5.55762 8.735 5.55762H7.965C7.80974 5.55762 7.72336 5.55801 7.6609 5.56311C7.64901 5.56408 7.63999 5.56511 7.63338 5.566ZM12.8492 4.55762H13.6516C13.7846 4.5576 13.9127 4.55759 14.0209 4.56643C14.1394 4.57611 14.2773 4.59882 14.4157 4.66934C14.6086 4.76761 14.7654 4.92441 14.8637 5.11728C14.9342 5.25566 14.9569 5.39362 14.9666 5.51208C14.9754 5.62032 14.9754 5.74842 14.9754 5.88139V10.1185C14.9754 10.2514 14.9754 10.3795 14.9666 10.4878C14.9569 10.6062 14.9342 10.7442 14.8637 10.8826C14.7654 11.0754 14.6086 11.2322 14.4157 11.3305C14.2773 11.401 14.1394 11.4237 14.0209 11.4334C13.9127 11.4423 13.7846 11.4422 13.6516 11.4422H12.8492C12.7162 11.4422 12.5881 11.4423 12.4799 11.4334C12.3614 11.4237 12.2234 11.401 12.0851 11.3305C11.8922 11.2322 11.7354 11.0754 11.6371 10.8826C11.5666 10.7442 11.5439 10.6062 11.5342 10.4878C11.5254 10.3795 11.5254 10.2514 11.5254 10.1185V5.8814C11.5254 5.74842 11.5254 5.62032 11.5342 5.51208C11.5439 5.39362 11.5666 5.25566 11.6371 5.11728C11.7354 4.92441 11.8922 4.76761 12.0851 4.66934C12.2234 4.59882 12.3614 4.57611 12.4799 4.56643C12.5881 4.55759 12.7162 4.5576 12.8492 4.55762ZM12.5338 5.566C12.5329 5.5726 12.5319 5.58163 12.5309 5.59351C12.5258 5.65598 12.5254 5.74235 12.5254 5.89762V10.1022C12.5254 10.2575 12.5258 10.3439 12.5309 10.4063C12.5319 10.4182 12.5329 10.4272 12.5338 10.4338C12.5404 10.4347 12.5494 10.4358 12.5613 10.4367C12.6237 10.4418 12.7101 10.4422 12.8654 10.4422H13.6354C13.7907 10.4422 13.877 10.4418 13.9395 10.4367C13.9514 10.4358 13.9604 10.4347 13.967 10.4338C13.9679 10.4272 13.9689 10.4182 13.9699 10.4063C13.975 10.3439 13.9754 10.2575 13.9754 10.1022V5.89762C13.9754 5.74235 13.975 5.65598 13.9699 5.59351C13.9689 5.58163 13.9679 5.5726 13.967 5.566C13.9604 5.56511 13.9514 5.56408 13.9395 5.56311C13.877 5.55801 13.7907 5.55762 13.6354 5.55762H12.8654C12.7101 5.55762 12.6237 5.55801 12.5613 5.56311C12.5494 5.56408 12.5404 5.56511 12.5338 5.566Z"
            fill="currentColor"
        />
    </s.Svg>
);
