import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PanelSidebarRFocusFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.7437 2.5H12.2563C12.6302 2.49999 12.9423 2.49999 13.1973 2.52045C13.4632 2.54178 13.7128 2.58792 13.9489 2.70607C14.3111 2.88733 14.6056 3.17656 14.7902 3.5323C14.9105 3.76417 14.9575 4.00937 14.9792 4.27054C15 4.52095 15 4.82747 15 5.19469V10.8053C15 11.1725 15 11.4791 14.9792 11.7295C14.9575 11.9906 14.9105 12.2358 14.7902 12.4677C14.6056 12.8234 14.3111 13.1127 13.9489 13.2939C13.7128 13.4121 13.4632 13.4582 13.1973 13.4796C12.9423 13.5 12.6302 13.5 12.2563 13.5H3.74368C3.36979 13.5 3.05769 13.5 2.80273 13.4796C2.53681 13.4582 2.28715 13.4121 2.05107 13.2939C1.68886 13.1127 1.39437 12.8234 1.20981 12.4677C1.08952 12.2358 1.04254 11.9906 1.02082 11.7295C0.999987 11.4791 0.999993 11.1725 1 10.8053V5.19469C0.999993 4.82746 0.999987 4.52095 1.02082 4.27054C1.04254 4.00937 1.08952 3.76417 1.20981 3.5323C1.39437 3.17656 1.68886 2.88733 2.05107 2.70607C2.28715 2.58792 2.53681 2.54178 2.80273 2.52045C3.05769 2.49999 3.36979 2.49999 3.7437 2.5ZM11.5012 3.53106C10.9213 3.53106 10.4512 4.00116 10.4512 4.58106V11.4186C10.4512 11.9985 10.9213 12.4686 11.5012 12.4686H12.9012C13.4811 12.4686 13.9512 11.9985 13.9512 11.4186V4.58106C13.9512 4.00116 13.4811 3.53106 12.9012 3.53106H11.5012Z"
            fill="currentColor"
        />
    </s.Svg>
);