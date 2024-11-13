import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SecurityCameraOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M6 7.75012C6 7.33591 6.33579 7.00012 6.75 7.00012H10.25C10.6642 7.00012 11 7.33591 11 7.75012C11 8.16434 10.6642 8.50012 10.25 8.50012H6.75C6.33579 8.50012 6 8.16434 6 7.75012Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25458 4.00293C4.01194 4.00293 3.00458 5.01029 3.00458 6.25293V11.7501C3.00458 12.9928 4.01194 14.0001 5.25458 14.0001H11.25V16.0041C11.25 16.4183 10.9142 16.7541 10.5 16.7541H3.5V15.75C3.5 15.3358 3.16421 15 2.75 15C2.33579 15 2 15.3358 2 15.75V19.25C2 19.6643 2.33579 20 2.75 20C3.16421 20 3.5 19.6643 3.5 19.25V18.2541H10.5C11.7426 18.2541 12.75 17.2467 12.75 16.0041V14.0001H16.75C17.9926 14.0001 19 12.9928 19 11.7501V6.25293C19 5.01029 17.9926 4.00293 16.75 4.00293H5.25458ZM4.50458 6.25293C4.50458 5.83872 4.84036 5.50293 5.25458 5.50293H16.75C17.1642 5.50293 17.5 5.83872 17.5 6.25293V11.7501C17.5 12.1643 17.1642 12.5001 16.75 12.5001H5.25458C4.84036 12.5001 4.50458 12.1643 4.50458 11.7501V6.25293Z"
            fill="currentColor"
        />
        <s.Path
            d="M22.0014 6.75012C22.0014 6.49034 21.867 6.24906 21.6461 6.11235C21.4252 5.97565 21.1492 5.96301 20.9167 6.07893L20.4153 6.32893C20.1608 6.45582 20 6.71574 20 7.00012V11.0001C20 11.2846 20.161 11.5446 20.4156 11.6715L20.917 11.9212C21.1495 12.037 21.4254 12.0243 21.6462 11.8875C21.867 11.7508 22.0014 11.5096 22.0014 11.2499V6.75012Z"
            fill="currentColor"
        />
    </s.Svg>
);
