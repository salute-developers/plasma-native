import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DropOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7138 2.31129L12.5471 2.18161C12.2256 1.93946 11.7744 1.93946 11.4529 2.18161L11.121 2.44418L10.9258 2.60514C10.7256 2.77226 10.5107 2.95776 10.284 3.16074C9.42252 3.93218 8.56151 4.80122 7.75612 5.75167C5.41633 8.5129 4 11.3939 4 14.2856C4 18.5459 7.58197 22 12 22C16.418 22 20 18.5459 20 14.2856C20 11.3939 18.5837 8.5129 16.2439 5.75167C15.4385 4.80122 14.5775 3.93218 13.716 3.16074C13.4893 2.95776 13.2744 2.77226 13.0742 2.60514L12.7138 2.31129ZM12.1195 3.7621L11.9993 3.66414L11.8836 3.75956C11.6981 3.91448 11.4975 4.08764 11.2847 4.2782C10.4694 5.00826 9.65726 5.82834 8.90052 6.72139C6.67828 9.3439 5.5 11.8906 5.5 14.2856C5.5 17.6666 8.35853 20.5 12 20.5C15.6415 20.5 18.5 17.6666 18.5 14.2856C18.5 11.8906 17.3217 9.3439 15.0995 6.72139C14.3427 5.82834 13.5306 5.00826 12.7153 4.2782C12.5037 4.08868 12.3041 3.91638 12.1195 3.7621Z"
            fill="currentColor"
        />
    </s.Svg>
);