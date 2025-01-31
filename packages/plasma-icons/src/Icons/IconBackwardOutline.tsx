import React from 'react';

import { BackwardOutline as Icon16 } from '../Icon.assets.16/BackwardOutline';
import { BackwardOutline as Icon24 } from '../Icon.assets.24/BackwardOutline';
import { BackwardOutline as Icon36 } from '../Icon.assets.36/BackwardOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBackwardOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
