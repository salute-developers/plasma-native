import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ParkingOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25 7.5C8.83579 7.5 8.5 7.83579 8.5 8.25V15.75C8.5 16.1642 8.83579 16.5 9.25 16.5C9.66421 16.5 10 16.1642 10 15.75V13.5H13C14.6569 13.5 16 12.1569 16 10.5C16 8.84315 14.6569 7.5 13 7.5H9.25ZM13 12H10V9H13C13.8284 9 14.5 9.67157 14.5 10.5C14.5 11.3284 13.8284 12 13 12Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71858 3C7.04521 2.99999 6.49449 2.99998 6.04693 3.03655C5.58367 3.0744 5.16527 3.15514 4.77453 3.35423C4.163 3.66582 3.66582 4.163 3.35423 4.77453C3.15514 5.16527 3.0744 5.58367 3.03655 6.04693C2.99998 6.49449 2.99999 7.0452 3 7.71857V16.2814C2.99999 16.9548 2.99998 17.5055 3.03655 17.9531C3.0744 18.4163 3.15514 18.8347 3.35423 19.2255C3.66582 19.837 4.163 20.3342 4.77453 20.6458C5.16527 20.8449 5.58367 20.9256 6.04693 20.9634C6.49449 21 7.04519 21 7.71856 21H16.2814C16.9548 21 17.5055 21 17.9531 20.9634C18.4163 20.9256 18.8347 20.8449 19.2255 20.6458C19.837 20.3342 20.3342 19.837 20.6458 19.2255C20.8449 18.8347 20.9256 18.4163 20.9634 17.9531C21 17.5055 21 16.9548 21 16.2814V7.71856C21 7.04519 21 6.49449 20.9634 6.04693C20.9256 5.58367 20.8449 5.16527 20.6458 4.77453C20.3342 4.163 19.837 3.66582 19.2255 3.35423C18.8347 3.15514 18.4163 3.0744 17.9531 3.03655C17.5055 2.99998 16.9548 2.99999 16.2814 3H7.71858ZM5.45552 4.69074C5.59956 4.61735 5.79858 4.56184 6.16908 4.53157C6.54833 4.50058 7.03756 4.5 7.75 4.5H16.25C16.9624 4.5 17.4517 4.50058 17.8309 4.53157C18.2014 4.56184 18.4004 4.61735 18.5445 4.69074C18.8738 4.85852 19.1415 5.12623 19.3093 5.45552C19.3827 5.59956 19.4382 5.79858 19.4684 6.16908C19.4994 6.54833 19.5 7.03756 19.5 7.75V16.25C19.5 16.9624 19.4994 17.4517 19.4684 17.8309C19.4382 18.2014 19.3827 18.4004 19.3093 18.5445C19.1415 18.8738 18.8738 19.1415 18.5445 19.3093C18.4004 19.3827 18.2014 19.4382 17.8309 19.4684C17.4517 19.4994 16.9624 19.5 16.25 19.5H7.75C7.03756 19.5 6.54833 19.4994 6.16908 19.4684C5.79858 19.4382 5.59956 19.3827 5.45552 19.3093C5.12623 19.1415 4.85852 18.8738 4.69074 18.5445C4.61735 18.4004 4.56184 18.2014 4.53157 17.8309C4.50058 17.4517 4.5 16.9624 4.5 16.25V7.75C4.5 7.03756 4.50058 6.54833 4.53157 6.16908C4.56184 5.79858 4.61735 5.59956 4.69074 5.45552C4.85852 5.12623 5.12623 4.85852 5.45552 4.69074Z"
            fill="currentColor"
        />
    </s.Svg>
);
