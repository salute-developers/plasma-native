import React from 'react';

import { RewindBackwardOutline as Icon16 } from '../Icon.assets.16/RewindBackwardOutline';
import { RewindBackwardOutline as Icon24 } from '../Icon.assets.24/RewindBackwardOutline';
import { RewindBackwardOutline as Icon36 } from '../Icon.assets.36/RewindBackwardOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRewindBackwardOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};