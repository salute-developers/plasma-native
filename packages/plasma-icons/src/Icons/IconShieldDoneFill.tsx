import React from 'react';

import { ShieldDoneFill as Icon16 } from '../Icon.assets.16/ShieldDoneFill';
import { ShieldDoneFill as Icon24 } from '../Icon.assets.24/ShieldDoneFill';
import { ShieldDoneFill as Icon36 } from '../Icon.assets.36/ShieldDoneFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldDoneFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
