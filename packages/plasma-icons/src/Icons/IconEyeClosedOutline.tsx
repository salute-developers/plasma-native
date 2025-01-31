import React from 'react';

import { EyeClosedOutline as Icon16 } from '../Icon.assets.16/EyeClosedOutline';
import { EyeClosedOutline as Icon24 } from '../Icon.assets.24/EyeClosedOutline';
import { EyeClosedOutline as Icon36 } from '../Icon.assets.36/EyeClosedOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEyeClosedOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
