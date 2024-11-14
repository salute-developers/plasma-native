import React from 'react';

import { Contrast2Fill as Icon16 } from '../Icon.assets.16/Contrast2Fill';
import { Contrast2Fill as Icon24 } from '../Icon.assets.24/Contrast2Fill';
import { Contrast2Fill as Icon36 } from '../Icon.assets.36/Contrast2Fill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconContrast2Fill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};