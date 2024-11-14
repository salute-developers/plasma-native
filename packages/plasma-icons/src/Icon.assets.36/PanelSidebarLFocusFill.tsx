import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PanelSidebarLFocusFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.1207 6H8.87935C8.07813 5.99999 7.40934 5.99997 6.863 6.04461C6.29317 6.09117 5.75818 6.19183 5.25229 6.4496C4.47612 6.84508 3.84508 7.47612 3.4496 8.25229C3.19183 8.75818 3.09117 9.29317 3.04461 9.863C2.99997 10.4093 2.99999 11.0781 3 11.8793V24.1207C2.99999 24.9219 2.99997 25.5907 3.04461 26.137C3.09117 26.7068 3.19183 27.2418 3.4496 27.7477C3.84508 28.5239 4.47612 29.1549 5.25229 29.5504C5.75818 29.8082 6.29317 29.9088 6.863 29.9554C7.40931 30 8.07803 30 8.87919 30H27.1207C27.9218 30 28.5907 30 29.137 29.9554C29.7068 29.9088 30.2418 29.8082 30.7477 29.5504C31.5239 29.1549 32.1549 28.5239 32.5504 27.7477C32.8082 27.2418 32.9088 26.7068 32.9554 26.137C33 25.5907 33 24.9219 33 24.1207V11.8793C33 11.0781 33 10.4093 32.9554 9.863C32.9088 9.29317 32.8082 8.75818 32.5504 8.25229C32.1549 7.47612 31.5239 6.84508 30.7477 6.4496C30.2418 6.19183 29.7068 6.09117 29.137 6.04461C28.5907 5.99997 27.9219 5.99999 27.1207 6ZM10.5 8.25C11.7426 8.25 12.75 9.25736 12.75 10.5V25.5C12.75 26.7426 11.7426 27.75 10.5 27.75H7.5C6.25736 27.75 5.25 26.7426 5.25 25.5V10.5C5.25 9.25736 6.25736 8.25 7.5 8.25H10.5Z"
            fill="currentColor"
        />
    </s.Svg>
);