import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ZoomMinusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M7 9.75C6.58579 9.75 6.25 10.0858 6.25 10.5C6.25 10.9142 6.58579 11.25 7 11.25H14C14.4142 11.25 14.75 10.9142 14.75 10.5C14.75 10.0858 14.4142 9.75 14 9.75H7Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.25 10.5C3.25 6.49594 6.49594 3.25 10.5 3.25C14.5041 3.25 17.75 6.49594 17.75 10.5C17.75 12.2319 17.1427 13.8219 16.1295 15.0689L21.0303 19.9697C21.3232 20.2626 21.3232 20.7374 21.0303 21.0303C20.7374 21.3232 20.2626 21.3232 19.9697 21.0303L15.0689 16.1295C13.8219 17.1427 12.2319 17.75 10.5 17.75C6.49594 17.75 3.25 14.5041 3.25 10.5ZM10.5 4.75C7.32436 4.75 4.75 7.32436 4.75 10.5C4.75 13.6756 7.32436 16.25 10.5 16.25C13.6756 16.25 16.25 13.6756 16.25 10.5C16.25 7.32436 13.6756 4.75 10.5 4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
