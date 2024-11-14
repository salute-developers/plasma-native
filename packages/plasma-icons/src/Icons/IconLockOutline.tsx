import React from 'react';

import { LockOutline as Icon16 } from '../Icon.assets.16/LockOutline';
import { LockOutline as Icon24 } from '../Icon.assets.24/LockOutline';
import { LockOutline as Icon36 } from '../Icon.assets.36/LockOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLockOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};