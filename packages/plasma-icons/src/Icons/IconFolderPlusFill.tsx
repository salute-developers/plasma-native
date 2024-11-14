import React from 'react';

import { FolderPlusFill as Icon16 } from '../Icon.assets.16/FolderPlusFill';
import { FolderPlusFill as Icon24 } from '../Icon.assets.24/FolderPlusFill';
import { FolderPlusFill as Icon36 } from '../Icon.assets.36/FolderPlusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFolderPlusFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};