import React from 'react';

import { OpenOutline as Icon16 } from '../Icon.assets.16/OpenOutline';
import { OpenOutline as Icon24 } from '../Icon.assets.24/OpenOutline';
import { OpenOutline as Icon36 } from '../Icon.assets.36/OpenOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconOpenOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};