import React from 'react';

import { LocationPinFill as Icon16 } from '../Icon.assets.16/LocationPinFill';
import { LocationPinFill as Icon24 } from '../Icon.assets.24/LocationPinFill';
import { LocationPinFill as Icon36 } from '../Icon.assets.36/LocationPinFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLocationPinFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};