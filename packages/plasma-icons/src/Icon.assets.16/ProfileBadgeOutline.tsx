import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ProfileBadgeOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.52359 4.78541C5.52359 3.37556 6.64102 2.24999 7.99828 2.24999C9.35555 2.24999 10.473 3.37556 10.473 4.78541C10.473 6.19525 9.35555 7.32082 7.99828 7.32082C6.64102 7.32082 5.52359 6.19525 5.52359 4.78541ZM7.99828 1.25C6.06978 1.25 4.52359 2.84243 4.52359 4.78541C4.52359 6.72838 6.06978 8.32081 7.99828 8.32081C9.92679 8.32081 11.473 6.72838 11.473 4.78541C11.473 2.84243 9.92679 1.25 7.99828 1.25ZM3.06282 11.9788C4.47827 11.0205 6.17492 10.4629 7.99995 10.4629C9.82603 10.4629 11.5236 11.0211 12.9395 11.9805C13.1559 12.1271 13.2717 12.3719 13.2486 12.6098C13.2265 12.8378 13.1889 12.9686 13.1393 13.066C13.0194 13.3012 12.8282 13.4924 12.593 13.6122C12.4881 13.6657 12.3451 13.705 12.0842 13.7263C11.8175 13.7481 11.4738 13.7485 10.9755 13.7485H5.02671C4.52842 13.7485 4.18477 13.7481 3.91803 13.7263C3.65714 13.705 3.51416 13.6657 3.40922 13.6122C3.17402 13.4924 2.9828 13.3012 2.86296 13.066C2.81322 12.9684 2.77555 12.8373 2.75345 12.6084C2.73045 12.3702 2.84638 12.1253 3.06282 11.9788ZM7.99995 9.4629C5.96763 9.4629 4.07687 10.0846 2.50218 11.1508C2.00107 11.49 1.6978 12.0802 1.75808 12.7045C1.78668 13.0007 1.84394 13.2687 1.97195 13.52C2.18766 13.9433 2.53187 14.2875 2.95524 14.5032C3.22464 14.6405 3.51386 14.6966 3.8366 14.723C4.14886 14.7485 4.53348 14.7485 5.00563 14.7485H10.9966C11.4687 14.7485 11.8534 14.7485 12.1656 14.723C12.4884 14.6966 12.7776 14.6405 13.047 14.5032C13.4704 14.2875 13.8146 13.9433 14.0303 13.52C14.158 13.2692 14.2153 13.0018 14.244 12.7063C14.3045 12.082 14.0013 11.4919 13.5005 11.1526C11.9252 10.0853 10.0334 9.4629 7.99995 9.4629ZM9.39854 11.9638C9.1224 11.9638 8.89854 12.1876 8.89854 12.4638C8.89854 12.7399 9.1224 12.9638 9.39854 12.9638H11.4973C11.7735 12.9638 11.9973 12.7399 11.9973 12.4638C11.9973 12.1876 11.7735 11.9638 11.4973 11.9638H9.39854Z"
            fill="currentColor"
        />
    </s.Svg>
);