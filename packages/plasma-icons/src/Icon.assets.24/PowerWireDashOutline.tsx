import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PowerWireDashOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99513 3C9.99513 2.44772 9.54741 2 8.99513 2C8.44284 2 7.99513 2.44772 7.99513 3V7H7.74513C6.77863 7 5.99513 7.7835 5.99513 8.75V12.1603C5.99513 13.4317 6.50457 14.645 7.40086 15.5335L2.97944 19.9549C2.68654 20.2478 2.68654 20.7226 2.97944 21.0155C3.27233 21.3084 3.7472 21.3084 4.0401 21.0155L16.4496 8.60607C16.4495 8.606 16.4496 8.60615 16.4496 8.60607L17.5126 7.54338C17.5126 7.54332 17.5127 7.54345 17.5126 7.54338L21.0107 4.04498C21.3036 3.75209 21.3036 3.27721 21.0107 2.98432C20.7178 2.69143 20.2429 2.69143 19.95 2.98432L15.9951 6.93919V3C15.9951 2.44772 15.5474 2 14.9951 2C14.4428 2 13.9951 2.44772 13.9951 3V7H9.99513V3ZM14.4343 8.5H7.74513C7.60706 8.5 7.49513 8.61193 7.49513 8.75V12.1603C7.49513 13.0324 7.84544 13.8645 8.46153 14.4728L14.4343 8.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.49513 22V17.6822L10.696 16.4814C10.889 16.7676 10.9951 17.1077 10.9951 17.4599V20.5H12.9951V17.4599C12.9951 16.9491 13.2184 16.4637 13.6062 16.1312L15.3602 14.6278C16.0806 14.0104 16.4951 13.109 16.4951 12.1603V10.6822L17.9951 9.18221V12.1603C17.9951 13.5469 17.3892 14.8643 16.3364 15.7667L14.5824 17.2701C14.527 17.3176 14.4951 17.387 14.4951 17.4599V22H9.49513Z"
            fill="currentColor"
        />
    </s.Svg>
);
