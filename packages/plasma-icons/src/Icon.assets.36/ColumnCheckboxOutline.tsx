import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ColumnCheckboxOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.56222 3H10.6145C10.933 4.01428 11.8806 4.75 13 4.75H22C23.1194 4.75 24.067 4.01428 24.3855 3H26.4378C26.0807 5.12828 24.2297 6.75 22 6.75H13C10.7703 6.75 8.91928 5.12828 8.56222 3ZM13 11H22C23.3807 11 24.5 12.1193 24.5 13.5V22.5C24.5 23.8807 23.3807 25 22 25H13C11.6193 25 10.5 23.8807 10.5 22.5V13.5C10.5 12.1193 11.6193 11 13 11ZM8.5 13.5C8.5 11.0147 10.5147 9 13 9H22C24.4853 9 26.5 11.0147 26.5 13.5V22.5C26.5 24.9853 24.4853 27 22 27H13C10.5147 27 8.5 24.9853 8.5 22.5V13.5ZM13 31.25H22C23.1194 31.25 24.067 31.9857 24.3855 33H26.4378C26.0807 30.8717 24.2297 29.25 22 29.25H13C10.7703 29.25 8.91928 30.8717 8.56222 33H10.6145C10.933 31.9857 11.8806 31.25 13 31.25ZM22.0821 15.1797C22.3884 14.7202 22.2642 14.0993 21.8047 13.7929C21.3452 13.4866 20.7243 13.6108 20.4179 14.0703L16.6765 19.6824L14.5309 17.0003C14.1859 16.569 13.5566 16.4991 13.1253 16.8441C12.694 17.1891 12.6241 17.8184 12.9691 18.2497L15.7128 21.6793C16.2625 22.3664 17.3216 22.3204 17.8096 21.5883L22.0821 15.1797Z"
            fill="currentColor"
        />
    </s.Svg>
);