import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MuteOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.20931 2.43977C7.95716 2.14685 7.57941 1.99325 7.19439 2.02708C6.89491 2.05339 6.65009 2.23394 6.45977 2.39765C6.26009 2.5694 6.02168 2.81409 5.73522 3.10811L3.89453 4.99724C3.61398 5.28517 3.22901 5.44757 2.82699 5.44757C1.81797 5.44757 1 6.26554 1 7.27456V8.72584C1 9.73486 1.81797 10.5528 2.82699 10.5528C3.22901 10.5528 3.61398 10.7152 3.89453 11.0032L4.82982 11.9631L5.53699 11.2559L4.61076 10.3053C4.14198 9.82418 3.49873 9.55283 2.82699 9.55283C2.37026 9.55283 2 9.18257 2 8.72584V7.27456C2 6.81783 2.37026 6.44757 2.82699 6.44757C3.49873 6.44757 4.14198 6.17622 4.61076 5.6951L6.43445 3.82342C6.74228 3.50749 6.9498 3.29518 7.11188 3.15577C7.22736 3.05644 7.28204 3.02892 7.29435 3.02272C7.34988 3.0214 7.4039 3.04302 7.44275 3.08271C7.44724 3.09574 7.46734 3.15402 7.48073 3.30576C7.49953 3.51871 7.5 3.8156 7.5 4.2567V9.29289L8.5 8.29289V4.23237C8.50001 3.82187 8.50002 3.48022 8.47686 3.21785C8.45479 2.96778 8.40545 2.66761 8.20931 2.43977ZM8.5 9.70711L7.5 10.7071V11.7437C7.5 12.1848 7.49953 12.4817 7.48073 12.6946C7.46734 12.8464 7.44739 12.9042 7.44289 12.9173C7.40404 12.957 7.35027 12.9792 7.29474 12.9779C7.28242 12.9717 7.22736 12.944 7.11188 12.8446C6.9498 12.7052 6.74228 12.4929 6.43445 12.177L6.23491 11.9722L5.52775 12.6794L5.73521 12.8923C6.02164 13.1863 6.26011 13.431 6.45977 13.6028C6.65009 13.7665 6.89491 13.947 7.19439 13.9733C7.57941 14.0071 7.95716 13.8535 8.20931 13.5606C8.40545 13.3328 8.45479 13.0326 8.47686 12.7825C8.50002 12.5202 8.50001 12.1785 8.5 11.768V9.70711ZM10.9187 7.28838L11.716 6.49107C11.9037 6.97089 12 7.48325 12 8.0002C12 8.52778 11.8997 9.05057 11.7043 9.53888C11.509 10.0272 11.2223 10.472 10.8597 10.8475C10.6678 11.0462 10.3513 11.0517 10.1527 10.8599C9.95403 10.668 9.94851 10.3515 10.1403 10.1529C10.4118 9.87174 10.628 9.53706 10.7759 9.16749C10.9237 8.7979 11 8.40121 11 8.0002C11 7.75974 10.9726 7.52083 10.9187 7.28838ZM11.0209 5.77195L10.3006 6.49228C10.2481 6.45091 10.1939 6.40302 10.1403 6.34753C9.94851 6.14889 9.95403 5.83235 10.1527 5.64053C10.3513 5.4487 10.6678 5.45423 10.8597 5.65287C10.9169 5.71216 10.9568 5.73792 11.0209 5.77195ZM13.2241 4.983C13.296 5.10036 13.3663 5.25997 13.5194 5.62355C13.8368 6.37729 14 7.18485 14 8.0002C14 8.81555 13.8368 9.62311 13.5194 10.3769C13.202 11.1306 12.7366 11.816 12.1494 12.3938C11.9525 12.5874 11.9499 12.904 12.1436 13.1008C12.3372 13.2977 12.6538 13.3003 12.8506 13.1066C13.5315 12.4368 14.0721 11.6412 14.441 10.7649C14.81 9.88864 15 8.94916 15 8.0002C15 7.05123 14.81 6.11176 14.441 5.23549L14.4352 5.22165C14.2736 4.83781 14.1672 4.58517 14.0103 4.3585C13.9884 4.32691 13.9656 4.29597 13.9418 4.2653L13.2241 4.983ZM13.2345 3.55843L12.5582 4.23466C12.4586 4.04705 12.4867 3.80902 12.6436 3.64955C12.8025 3.48804 13.0441 3.4573 13.2345 3.55843Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4454 1.64645C14.6406 1.84171 14.6406 2.15829 14.4454 2.35355L2.56596 14.2329C2.37069 14.4282 2.05411 14.4282 1.85885 14.2329C1.66359 14.0377 1.66359 13.7211 1.85885 13.5258L13.7382 1.64645C13.9335 1.45118 14.2501 1.45118 14.4454 1.64645Z"
            fill="currentColor"
        />
    </s.Svg>
);