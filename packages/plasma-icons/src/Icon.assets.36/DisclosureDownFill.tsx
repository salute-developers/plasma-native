import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureDownFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.6487 15.0257C25.468 14.6315 25.0752 14.3789 24.6428 14.3789H11.3572C10.9248 14.3789 10.532 14.6315 10.3513 15.0257C10.1706 15.42 10.2352 15.8837 10.5166 16.2131L17.1594 23.9909C17.3697 24.2372 17.6768 24.3789 18 24.3789C18.3232 24.3789 18.6303 24.2372 18.8406 23.9909L25.4834 16.2131C25.7648 15.8837 25.8294 15.42 25.6487 15.0257Z"
            fill="currentColor"
        />
    </s.Svg>
);
