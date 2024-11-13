import React from 'react';

import { Minus as Icon16 } from '../Icon.assets.16/Minus';
import { Minus as Icon24 } from '../Icon.assets.24/Minus';
import { Minus as Icon36 } from '../Icon.assets.36/Minus';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMinus: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
