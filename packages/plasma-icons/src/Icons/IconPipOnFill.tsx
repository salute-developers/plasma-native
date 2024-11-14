import React from 'react';

import { PipOnFill as Icon16 } from '../Icon.assets.16/PipOnFill';
import { PipOnFill as Icon24 } from '../Icon.assets.24/PipOnFill';
import { PipOnFill as Icon36 } from '../Icon.assets.36/PipOnFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPipOnFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};