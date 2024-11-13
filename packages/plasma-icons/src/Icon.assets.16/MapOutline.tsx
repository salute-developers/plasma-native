import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MapOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8104 2.60801C14.9302 2.70285 15 2.84723 15 3V11.9655C15 12.1975 14.8404 12.399 14.6146 12.4522L10.2227 13.4867C10.1458 13.5048 10.0657 13.5044 9.98896 13.4856L5.88951 12.4798L1.61463 13.4867C1.46593 13.5217 1.30938 13.4868 1.18961 13.392C1.06984 13.2972 1 13.1528 1 13V4.03449C1 3.80251 1.15956 3.60099 1.38537 3.54781L5.77726 2.51332C5.85418 2.49521 5.93429 2.49558 6.01104 2.51441L10.1105 3.52024L14.3854 2.51332C14.5341 2.4783 14.6906 2.51318 14.8104 2.60801ZM9.60811 4.42664L6.39189 3.63751V11.5734L9.60811 12.3625V4.42664ZM10.6081 12.3685L14 11.5696V3.63146L10.6081 4.4304V12.3685ZM5.39189 11.5696V3.63146L2 4.4304V12.3685L5.39189 11.5696Z"
            fill="currentColor"
        />
    </s.Svg>
);
