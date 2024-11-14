import React from 'react';

import { ObjectsSymbolsFill as Icon16 } from '../Icon.assets.16/ObjectsSymbolsFill';
import { ObjectsSymbolsFill as Icon24 } from '../Icon.assets.24/ObjectsSymbolsFill';
import { ObjectsSymbolsFill as Icon36 } from '../Icon.assets.36/ObjectsSymbolsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconObjectsSymbolsFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};