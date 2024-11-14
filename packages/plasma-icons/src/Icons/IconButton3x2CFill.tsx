import React from 'react';

import { Button3x2CFill as Icon16 } from '../Icon.assets.16/Button3x2CFill';
import { Button3x2CFill as Icon24 } from '../Icon.assets.24/Button3x2CFill';
import { Button3x2CFill as Icon36 } from '../Icon.assets.36/Button3x2CFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconButton3x2CFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};