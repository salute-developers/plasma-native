import React from 'react';

import { BankCardLockOutline as Icon16 } from '../Icon.assets.16/BankCardLockOutline';
import { BankCardLockOutline as Icon24 } from '../Icon.assets.24/BankCardLockOutline';
import { BankCardLockOutline as Icon36 } from '../Icon.assets.36/BankCardLockOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardLockOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
