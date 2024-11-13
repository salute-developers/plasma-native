import React from 'react';

import { MailFill as Icon16 } from '../Icon.assets.16/MailFill';
import { MailFill as Icon24 } from '../Icon.assets.24/MailFill';
import { MailFill as Icon36 } from '../Icon.assets.36/MailFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
