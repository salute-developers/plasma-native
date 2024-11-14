import React from 'react';

import { BoxOutline as Icon16 } from '../Icon.assets.16/BoxOutline';
import { BoxOutline as Icon24 } from '../Icon.assets.24/BoxOutline';
import { BoxOutline as Icon36 } from '../Icon.assets.36/BoxOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBoxOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};