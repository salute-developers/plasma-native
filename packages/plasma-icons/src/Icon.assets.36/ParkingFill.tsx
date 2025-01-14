import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ParkingFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.375 4.5C6.68261 4.5 4.5 6.68261 4.5 9.375V26.625C4.5 29.3174 6.68261 31.5 9.375 31.5H26.625C29.3174 31.5 31.5 29.3174 31.5 26.625V9.375C31.5 6.68261 29.3174 4.5 26.625 4.5H9.375ZM13.875 11.375C13.3227 11.375 12.875 11.8227 12.875 12.375V23.625C12.875 24.1773 13.3227 24.625 13.875 24.625C14.4273 24.625 14.875 24.1773 14.875 23.625V20.125H19.5C21.9162 20.125 23.875 18.1662 23.875 15.75C23.875 13.3338 21.9162 11.375 19.5 11.375H13.875ZM19.5 18.125H14.875V13.375H19.5C20.8117 13.375 21.875 14.4383 21.875 15.75C21.875 17.0617 20.8117 18.125 19.5 18.125Z"
            fill="currentColor"
        />
    </s.Svg>
);
