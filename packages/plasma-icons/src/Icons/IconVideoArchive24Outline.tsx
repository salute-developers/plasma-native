import React from 'react';

import { VideoArchive24Outline as Icon16 } from '../Icon.assets.16/VideoArchive24Outline';
import { VideoArchive24Outline as Icon24 } from '../Icon.assets.24/VideoArchive24Outline';
import { VideoArchive24Outline as Icon36 } from '../Icon.assets.36/VideoArchive24Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVideoArchive24Outline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};