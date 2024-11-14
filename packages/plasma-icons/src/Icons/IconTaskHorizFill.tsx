import React from 'react';

import { TaskHorizFill as Icon16 } from '../Icon.assets.16/TaskHorizFill';
import { TaskHorizFill as Icon24 } from '../Icon.assets.24/TaskHorizFill';
import { TaskHorizFill as Icon36 } from '../Icon.assets.36/TaskHorizFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTaskHorizFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};