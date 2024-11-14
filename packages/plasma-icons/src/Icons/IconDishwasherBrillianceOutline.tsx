import React from 'react';

import { DishwasherBrillianceOutline as Icon16 } from '../Icon.assets.16/DishwasherBrillianceOutline';
import { DishwasherBrillianceOutline as Icon24 } from '../Icon.assets.24/DishwasherBrillianceOutline';
import { DishwasherBrillianceOutline as Icon36 } from '../Icon.assets.36/DishwasherBrillianceOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherBrillianceOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};