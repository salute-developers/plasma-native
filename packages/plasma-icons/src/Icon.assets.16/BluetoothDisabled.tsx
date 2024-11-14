import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BluetoothDisabled: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.3155 1.11195C8.1658 0.990315 7.95948 0.965639 7.78532 1.04854C7.61116 1.13143 7.50021 1.30712 7.50021 1.50001V6.94952L4.3155 4.36195C4.10118 4.18782 3.78628 4.22039 3.61215 4.43471C3.43802 4.64903 3.47059 4.96393 3.68491 5.13806L7.2073 8.00001L3.68491 10.8619C3.57496 10.9513 3.51284 11.0777 3.50193 11.2085L12.3323 4.37623C12.3268 4.37136 12.3212 4.3666 12.3155 4.36195L8.3155 1.11195ZM9.03202 8.19412L7.50021 9.37932V14.5C7.50021 14.6929 7.61116 14.8686 7.78532 14.9515C7.95948 15.0344 8.1658 15.0097 8.3155 14.8881L12.3155 11.6381C12.4324 11.5431 12.5002 11.4006 12.5002 11.25C12.5002 11.0994 12.4324 10.9569 12.3155 10.8619L9.03202 8.19412ZM11.2073 11.25L8.50021 9.05049V13.4495L11.2073 11.25ZM8.50021 2.55049V6.94952L11.2073 4.75001L8.50021 2.55049Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.3522 2.19403C14.5212 2.41244 14.4811 2.72647 14.2627 2.89546L1.80599 12.5335C1.58759 12.7025 1.27356 12.6625 1.10457 12.444C0.935589 12.2256 0.975652 11.9116 1.19405 11.7426L13.6508 2.10455C13.8692 1.93557 14.1832 1.97563 14.3522 2.19403Z"
            fill="currentColor"
        />
    </s.Svg>
);