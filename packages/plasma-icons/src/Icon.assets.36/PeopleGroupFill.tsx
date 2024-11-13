import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PeopleGroupFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7501 12C18.7501 14.8995 16.3996 17.25 13.5001 17.25C10.6006 17.25 8.25004 14.8995 8.25004 12C8.25004 9.10051 10.6006 6.75 13.5001 6.75C16.3996 6.75 18.7501 9.10051 18.7501 12ZM4.60641 22.1724C7.15629 20.4835 10.215 19.5 13.5001 19.5C16.7851 19.5 19.8439 20.4835 22.3938 22.1724C23.4735 22.8876 24.0002 24.098 24.0002 25.2804C24.0002 27.4727 22.2229 29.25 20.0305 29.25H6.96965C4.77727 29.25 3 27.4727 3 25.2804C3 24.098 3.52661 22.8876 4.60641 22.1724ZM25.5002 25.5C25.5002 26.0632 25.4226 26.6082 25.2775 27.125H29.9807C31.6494 27.125 33.0022 25.7723 33.0022 24.1036C33.0022 23.209 32.6032 22.2753 31.7633 21.719C30.0039 20.5536 27.893 19.875 25.6271 19.875C24.5496 19.875 23.5071 20.0285 22.5209 20.3147C24.3028 21.3551 25.5002 23.2877 25.5002 25.5ZM25.5002 18C27.5712 18 29.2502 16.3211 29.2502 14.25C29.2502 12.1789 27.5712 10.5 25.5002 10.5C23.4291 10.5 21.7501 12.1789 21.7501 14.25C21.7501 16.3211 23.4291 18 25.5002 18Z"
            fill="currentColor"
        />
    </s.Svg>
);
