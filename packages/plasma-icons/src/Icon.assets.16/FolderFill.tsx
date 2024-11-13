import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FolderFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.87741 2.50005C6.42074 2.50005 6.58987 2.50473 6.7155 2.53994C7.07685 2.64121 7.35923 2.92359 7.4605 3.28494C7.48009 3.35483 7.49023 3.43818 7.49537 3.59195H4.36C3.18389 3.59195 2.59583 3.59195 2.14662 3.82083C2.10666 3.8412 2.06745 3.86278 2.02904 3.88555C2.03181 3.74831 2.03667 3.63062 2.04519 3.52631C2.06412 3.29459 2.09863 3.17323 2.14256 3.08701C2.24562 2.88474 2.41008 2.72028 2.61235 2.61722C2.69857 2.57329 2.81994 2.53878 3.05165 2.51985C3.2892 2.50044 3.5961 2.50005 4.04539 2.50005H5.87741ZM1.02539 5.61408L1.02539 4.49926C1.02538 4.07589 1.02538 3.72797 1.04851 3.44488C1.07249 3.15132 1.12382 2.88371 1.25155 2.63302C1.45049 2.24258 1.76792 1.92515 2.15836 1.72621C2.40905 1.59848 2.67666 1.54715 2.97022 1.52317C3.25331 1.50004 3.60122 1.50004 4.0246 1.50005L5.95076 1.50002C6.38881 1.4998 6.70918 1.49963 6.98537 1.57704C7.68286 1.77252 8.22792 2.31758 8.4234 3.01507C8.47101 3.18495 8.48928 3.37154 8.49623 3.59195H11.64C12.8161 3.59195 13.4042 3.59195 13.8534 3.82083C14.2485 4.02217 14.5698 4.34343 14.7711 4.73857C15 5.18778 15 5.77584 15 6.95195V10.1392C15 11.3153 15 11.9034 14.7711 12.3526C14.5698 12.7477 14.2485 13.069 13.8534 13.2703C13.4042 13.4992 12.8161 13.4992 11.64 13.4992H4.36C3.18389 13.4992 2.59583 13.4992 2.14662 13.2703C1.75148 13.069 1.43022 12.7477 1.22889 12.3526C1 11.9034 1 11.3153 1 10.1392V6.95194C1 6.38684 1 5.95749 1.02539 5.61408Z"
            fill="currentColor"
        />
    </s.Svg>
);
