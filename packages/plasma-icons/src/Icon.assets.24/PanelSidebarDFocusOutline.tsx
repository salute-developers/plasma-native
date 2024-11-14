import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PanelSidebarDFocusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.7 5.5H19.3C19.9627 5.5 20.5 6.03726 20.5 6.7V17.3C20.5 17.9627 19.9627 18.5 19.3 18.5H4.7C4.03726 18.5 3.5 17.9627 3.5 17.3V6.7C3.5 6.03726 4.03726 5.5 4.7 5.5ZM2 6.7C2 5.20883 3.20883 4 4.7 4H19.3C20.7912 4 22 5.20883 22 6.7V17.3C22 18.7912 20.7912 20 19.3 20H4.7C3.20883 20 2 18.7912 2 17.3V6.7ZM5.5 13C5.22386 13 5 13.2239 5 13.5V16.5C5 16.7761 5.22386 17 5.5 17H18.5C18.7761 17 19 16.7761 19 16.5V13.5C19 13.2239 18.7761 13 18.5 13H5.5Z"
            fill="currentColor"
        />
    </s.Svg>
);