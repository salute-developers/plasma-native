import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MapOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7143 4.16104C21.8947 4.30325 22 4.5203 22 4.75001V17.75C22 18.0968 21.7622 18.3984 21.425 18.4793L15.175 19.9793C15.0577 20.0075 14.9352 20.0069 14.8181 19.9776L8.99636 18.5222L2.92503 19.9793C2.70166 20.0329 2.46605 19.9812 2.28566 19.839C2.10527 19.6968 2 19.4797 2 19.25V6.25001C2 5.90322 2.23776 5.60165 2.57497 5.52072L8.82497 4.02072C8.94235 3.99255 9.06479 3.99312 9.1819 4.0224L15.0036 5.47783L21.075 4.02072C21.2983 3.96711 21.534 4.01882 21.7143 4.16104ZM14.25 6.83559L9.75 5.71059V17.1644L14.25 18.2894V6.83559ZM15.75 18.2987L20.5 17.1587V5.7013L15.75 6.8413V18.2987ZM8.25 17.1587V5.7013L3.5 6.8413V18.2987L8.25 17.1587Z"
            fill="currentColor"
        />
    </s.Svg>
);
