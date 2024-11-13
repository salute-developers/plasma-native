import React from 'react';

import { SortSmallBig as Icon16 } from '../Icon.assets.16/SortSmallBig';
import { SortSmallBig as Icon24 } from '../Icon.assets.24/SortSmallBig';
import { SortSmallBig as Icon36 } from '../Icon.assets.36/SortSmallBig';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSortSmallBig: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
