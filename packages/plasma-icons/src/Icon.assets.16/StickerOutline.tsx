import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StickerOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.97519 2.04603C6.96641 2.0476 6.95743 2.04922 6.94822 2.05087C4.1347 2.55709 2 5.01864 2 7.97773C2 11.3037 4.69626 14 8.02227 14C10.9814 14 13.4429 11.8653 13.9491 9.05178C13.9508 9.04257 13.9524 9.03359 13.954 9.02482C13.521 9.12818 13.0694 9.18284 12.6055 9.18284C9.40868 9.18284 6.81716 6.59132 6.81716 3.39452C6.81716 2.93064 6.87183 2.47904 6.97519 2.04603ZM7.97418 2.17325C7.87178 2.56274 7.81716 2.97196 7.81716 3.39452C7.81716 6.03904 9.96097 8.18284 12.6055 8.18284C13.028 8.18284 13.4373 8.12823 13.8268 8.02582C13.7495 7.89449 13.6496 7.78987 13.3649 7.5052L8.4948 2.6351C8.21013 2.35043 8.10552 2.25048 7.97418 2.17325ZM6.7845 1.06427C7.06079 1.01454 7.26097 0.978503 7.58838 1.015C7.6451 1.02132 7.70276 1.03137 7.75787 1.04303C7.96657 1.08718 8.23185 1.17478 8.41534 1.27415C8.70567 1.4314 8.90219 1.62807 9.17037 1.89644C9.18077 1.90685 9.19128 1.91737 9.20191 1.928L14.072 6.79809C14.0826 6.80872 14.0931 6.81922 14.1035 6.82962C14.3719 7.0978 14.5686 7.29433 14.7258 7.58467C14.8252 7.76815 14.9128 8.03343 14.957 8.24214C14.9686 8.29725 14.9787 8.3549 14.985 8.41162C15.0215 8.73904 14.9855 8.93921 14.9357 9.21551L14.9333 9.22886C14.3429 12.5103 11.4739 15 8.02227 15C4.14398 15 1 11.856 1 7.97773C1 4.52613 3.48972 1.65708 6.77114 1.06668L6.7845 1.06427Z"
            fill="currentColor"
        />
    </s.Svg>
);
