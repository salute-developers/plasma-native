import React from 'react';

import { MessageAltOutline as Icon16 } from '../Icon.assets.16/MessageAltOutline';
import { MessageAltOutline as Icon24 } from '../Icon.assets.24/MessageAltOutline';
import { MessageAltOutline as Icon36 } from '../Icon.assets.36/MessageAltOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageAltOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
