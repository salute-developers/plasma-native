import React from 'react';

import { SwapVertCircOutline as Icon16 } from '../Icon.assets.16/SwapVertCircOutline';
import { SwapVertCircOutline as Icon24 } from '../Icon.assets.24/SwapVertCircOutline';
import { SwapVertCircOutline as Icon36 } from '../Icon.assets.36/SwapVertCircOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwapVertCircOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
