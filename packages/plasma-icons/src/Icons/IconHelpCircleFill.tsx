import React from 'react';

import { HelpCircleFill as Icon16 } from '../Icon.assets.16/HelpCircleFill';
import { HelpCircleFill as Icon24 } from '../Icon.assets.24/HelpCircleFill';
import { HelpCircleFill as Icon36 } from '../Icon.assets.36/HelpCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHelpCircleFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
