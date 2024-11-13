import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RewindBackwardOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6931 8.74265C16.8813 7.38235 19.671 8.98203 19.671 11.5372V14.0896L28.2721 8.74265C30.4603 7.38235 33.25 8.98204 33.25 11.5372V24.4609C33.25 27.016 30.4603 28.6157 28.2721 27.2554L19.671 21.9085V24.4609C19.671 27.016 16.8813 28.6157 14.6931 27.2554L4.29846 20.7935C2.23385 19.5101 2.23384 16.488 4.29846 15.2045L14.6931 8.74265ZM19.671 19.5536L29.328 25.5569C30.1555 26.0713 31.25 25.4809 31.25 24.4609V11.5372C31.25 10.5172 30.1555 9.92678 29.328 10.4412L19.671 16.4445V19.5536ZM17.671 11.5372C17.671 10.5172 16.5766 9.92678 15.749 10.4412L5.35436 16.9031C4.54855 17.404 4.54855 18.5941 5.35436 19.095L15.749 25.5569C16.5766 26.0713 17.671 25.4809 17.671 24.4609V11.5372Z"
            fill="currentColor"
        />
    </s.Svg>
);
