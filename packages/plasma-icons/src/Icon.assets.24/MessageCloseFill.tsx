import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageCloseFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.9497 11.7631C3.9497 7.18603 7.66014 3.47559 12.2372 3.47559C16.8143 3.47559 20.5247 7.18603 20.5247 11.7631C20.5247 16.3401 16.8143 20.0506 12.2372 20.0506C11.2525 20.0506 10.3065 19.8786 9.42866 19.5624C8.90171 19.3726 8.38412 19.318 7.92857 19.4455L5.42545 20.1464C4.46803 20.4145 3.58581 19.5323 3.85389 18.5748L4.55476 16.0717C4.68232 15.6162 4.62767 15.0986 4.43788 14.5716C4.12172 13.6938 3.9497 12.7478 3.9497 11.7631ZM9.79254 8.68256C9.49964 8.38967 9.02477 8.38967 8.73188 8.68256C8.43898 8.97545 8.43898 9.45033 8.73188 9.74322L10.964 11.9754L8.73188 14.2076C8.43898 14.5005 8.43898 14.9753 8.73188 15.2682C9.02477 15.5611 9.49964 15.5611 9.79254 15.2682L12.0247 13.0361L14.2569 15.2682C14.5498 15.5611 15.0246 15.5611 15.3175 15.2682C15.6104 14.9753 15.6104 14.5005 15.3175 14.2076L13.0854 11.9754L15.3175 9.74322C15.6104 9.45033 15.6104 8.97545 15.3175 8.68256C15.0246 8.38967 14.5498 8.38967 14.2569 8.68256L12.0247 10.9147L9.79254 8.68256Z"
            fill="currentColor"
        />
    </s.Svg>
);