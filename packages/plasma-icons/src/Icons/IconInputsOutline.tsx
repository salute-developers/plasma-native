import React from 'react';

import { InputsOutline as Icon16 } from '../Icon.assets.16/InputsOutline';
import { InputsOutline as Icon24 } from '../Icon.assets.24/InputsOutline';
import { InputsOutline as Icon36 } from '../Icon.assets.36/InputsOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconInputsOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
