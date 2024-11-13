import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RupiahFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM13.875 10.5C13.2537 10.5 12.75 11.0037 12.75 11.625C12.75 12.2463 13.2537 12.75 13.875 12.75H16.875C17.741 12.75 18.3763 13.1295 18.8188 13.659C18.9751 13.8461 19.1032 14.0473 19.2043 14.25H14.625C14.0037 14.25 13.5 14.7537 13.5 15.375C13.5 15.9963 14.0037 16.5 14.625 16.5H19.2043C19.1032 16.7027 18.9751 16.9039 18.8188 17.091C18.3763 17.6205 17.741 18 16.875 18H13.875C13.2537 18 12.75 18.5037 12.75 19.125C12.75 19.4674 12.903 19.7741 13.1443 19.9804C13.1633 20.0027 13.1834 20.0244 13.2045 20.0455L19.0795 25.9205C19.5188 26.3598 20.2312 26.3598 20.6705 25.9205C21.1098 25.4812 21.1098 24.7688 20.6705 24.3295L16.591 20.25H16.875C18.4943 20.25 19.734 19.5045 20.5452 18.534C21.0556 17.9233 21.4109 17.2079 21.5975 16.5H22.875C23.4963 16.5 24 15.9963 24 15.375C24 14.7537 23.4963 14.25 22.875 14.25H21.5975C21.463 13.7399 21.241 13.2259 20.9364 12.75H22.875C23.4963 12.75 24 12.2463 24 11.625C24 11.0037 23.4963 10.5 22.875 10.5H13.875Z"
            fill="currentColor"
        />
    </s.Svg>
);
