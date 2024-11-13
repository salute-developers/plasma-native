import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CaseOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.636 5.25C16.0396 5.24998 15.5324 5.24997 15.1162 5.28398C14.6792 5.31968 14.2551 5.39781 13.85 5.60423C13.2384 5.91582 12.7413 6.41301 12.4297 7.02453C12.2233 7.42965 12.1451 7.85374 12.1094 8.29077C12.0754 8.70699 12.0754 9.21412 12.0754 9.81058L12.0754 11.25H11.4575C10.4435 11.25 9.62178 11.25 8.95558 11.3044C8.26841 11.3606 7.6591 11.4796 7.09355 11.7677C6.19978 12.2231 5.47312 12.9498 5.01772 13.8435C4.72956 14.4091 4.61056 15.0184 4.55441 15.7056C4.49998 16.3718 4.49999 17.1935 4.5 18.2075V23.5425C4.49999 24.5565 4.49998 25.3782 4.55441 26.0444C4.61056 26.7316 4.72956 27.3409 5.01772 27.9065C5.47312 28.8002 6.19978 29.5269 7.09355 29.9823C7.6591 30.2705 8.26841 30.3895 8.95557 30.4456C9.62177 30.5 10.4435 30.5 11.4575 30.5H24.541C25.555 30.5 26.3767 30.5 27.0429 30.4456C27.73 30.3895 28.3394 30.2705 28.9049 29.9823C29.7987 29.5269 30.5253 28.8002 30.9807 27.9065C31.2689 27.3409 31.3879 26.7316 31.444 26.0444C31.4985 25.3782 31.4985 24.5565 31.4985 23.5425V18.2075C31.4985 17.1935 31.4985 16.3718 31.444 15.7056C31.3879 15.0184 31.2689 14.4091 30.9807 13.8435C30.5253 12.9498 29.7987 12.2231 28.9049 11.7677C28.3394 11.4796 27.73 11.3606 27.0429 11.3044C26.3767 11.25 25.555 11.25 24.541 11.25H23.9233V9.81055C23.9233 9.21411 23.9233 8.70699 23.8893 8.29077C23.8536 7.85374 23.7755 7.42965 23.5691 7.02453C23.2575 6.41301 22.7603 5.91582 22.1488 5.60423C21.7437 5.39781 21.3196 5.31968 20.8825 5.28398C20.4663 5.24997 19.9592 5.24998 19.3627 5.25H16.636ZM21.9233 11.25V9.85C21.9233 9.20344 21.9225 8.77866 21.896 8.45364C21.8704 8.14029 21.8259 8.0087 21.7871 7.93251C21.6672 7.69731 21.476 7.50609 21.2408 7.38624C21.1646 7.34743 21.033 7.30294 20.7197 7.27734C20.3947 7.25078 19.9699 7.25 19.3233 7.25H16.6754C16.0289 7.25 15.6041 7.25078 15.2791 7.27734C14.9657 7.30294 14.8341 7.34743 14.758 7.38624C14.5228 7.50609 14.3315 7.69731 14.2117 7.93251C14.1729 8.0087 14.1284 8.14029 14.1028 8.45364C14.0762 8.77866 14.0754 9.20344 14.0754 9.85V11.25H21.9233ZM8.00153 13.5497C8.23814 13.4292 8.55496 13.3438 9.11844 13.2978C9.69359 13.2508 10.4334 13.25 11.5 13.25H24.4985C25.5651 13.25 26.3049 13.2508 26.88 13.2978C27.4435 13.3438 27.7603 13.4292 27.9969 13.5497C28.5144 13.8134 28.9351 14.2341 29.1987 14.7515C29.3193 14.9881 29.4046 15.305 29.4507 15.8684C29.4977 16.4436 29.4985 17.1834 29.4985 18.25V23.5C29.4985 24.5666 29.4977 25.3064 29.4507 25.8816C29.4046 26.445 29.3193 26.7619 29.1987 26.9985C28.9351 27.5159 28.5144 27.9366 27.9969 28.2003C27.7603 28.3208 27.4435 28.4062 26.88 28.4522C26.3049 28.4992 25.5651 28.5 24.4985 28.5H11.5C10.4334 28.5 9.69359 28.4992 9.11844 28.4522C8.55496 28.4062 8.23814 28.3208 8.00153 28.2003C7.48408 27.9366 7.06338 27.5159 6.79973 26.9985C6.67917 26.7619 6.59381 26.445 6.54777 25.8816C6.50078 25.3064 6.5 24.5666 6.5 23.5V18.25C6.5 17.1834 6.50078 16.4436 6.54777 15.8684C6.59381 15.305 6.67917 14.9881 6.79973 14.7515C7.06338 14.2341 7.48408 13.8134 8.00153 13.5497Z"
            fill="currentColor"
        />
    </s.Svg>
);
