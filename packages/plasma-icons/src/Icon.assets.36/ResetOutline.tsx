import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ResetOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.875 3C12.3748 3 7.5736 5.98506 5 10.4207V7.08333C5 6.53105 4.55228 6.08333 4 6.08333C3.44772 6.08333 3 6.53105 3 7.08333V12.4792C3 13.0315 3.44772 13.4792 4 13.4792H5.06516C5.08031 13.4795 5.09543 13.4795 5.11052 13.4792H9.39583C9.94812 13.4792 10.3958 13.0315 10.3958 12.4792C10.3958 11.9269 9.94812 11.4792 9.39583 11.4792H6.69819C8.9191 7.60659 13.0936 5 17.875 5C24.9857 5 30.75 10.7643 30.75 17.875C30.75 24.9857 24.9857 30.75 17.875 30.75C12.5418 30.75 7.96372 27.5071 6.00943 22.8816C5.79449 22.3729 5.20782 22.1347 4.69908 22.3497C4.19034 22.5646 3.95218 23.1513 4.16712 23.66C6.42317 28.9997 11.71 32.75 17.875 32.75C26.0902 32.75 32.75 26.0902 32.75 17.875C32.75 9.65976 26.0902 3 17.875 3ZM17.875 20.875C19.5319 20.875 20.875 19.5319 20.875 17.875C20.875 16.2181 19.5319 14.875 17.875 14.875C16.2181 14.875 14.875 16.2181 14.875 17.875C14.875 19.5319 16.2181 20.875 17.875 20.875Z"
            fill="currentColor"
        />
    </s.Svg>
);