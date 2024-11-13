import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StopFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M3.75 7.75C3.75 6.34987 3.75 5.6498 4.02248 5.11502C4.26217 4.64462 4.64462 4.26217 5.11502 4.02248C5.6498 3.75 6.34987 3.75 7.75 3.75H16.25C17.6501 3.75 18.3502 3.75 18.885 4.02248C19.3554 4.26217 19.7378 4.64462 19.9775 5.11502C20.25 5.6498 20.25 6.34987 20.25 7.75V16.25C20.25 17.6501 20.25 18.3502 19.9775 18.885C19.7378 19.3554 19.3554 19.7378 18.885 19.9775C18.3502 20.25 17.6501 20.25 16.25 20.25H7.75C6.34987 20.25 5.6498 20.25 5.11502 19.9775C4.64462 19.7378 4.26217 19.3554 4.02248 18.885C3.75 18.3502 3.75 17.6501 3.75 16.25V7.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
