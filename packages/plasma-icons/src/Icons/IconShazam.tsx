import React from 'react';

import { Shazam as Icon16 } from '../Icon.assets.16/Shazam';
import { Shazam as Icon24 } from '../Icon.assets.24/Shazam';
import { Shazam as Icon36 } from '../Icon.assets.36/Shazam';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShazam: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};