import React from 'react';

import { PanelSidebarRFill as Icon16 } from '../Icon.assets.16/PanelSidebarRFill';
import { PanelSidebarRFill as Icon24 } from '../Icon.assets.24/PanelSidebarRFill';
import { PanelSidebarRFill as Icon36 } from '../Icon.assets.36/PanelSidebarRFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarRFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
