import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RadioOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M7 16C7 16.5523 6.55229 17 6 17C5.44772 17 5 16.5523 5 16C5 15.4477 5.44772 15 6 15C6.55229 15 7 15.4477 7 16Z"
            fill="currentColor"
        />
        <s.Path
            d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 13C11 10.7909 12.7909 9 15 9C17.2091 9 19 10.7909 19 13C19 15.2091 17.2091 17 15 17C12.7909 17 11 15.2091 11 13ZM15 10.5C13.6193 10.5 12.5 11.6193 12.5 13C12.5 14.3807 13.6193 15.5 15 15.5C16.3807 15.5 17.5 14.3807 17.5 13C17.5 11.6193 16.3807 10.5 15 10.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 3C7 2.44772 6.55229 2 6 2C5.44772 2 5 2.44772 5 3V6.04055C4.55535 6.08001 4.15203 6.16188 3.77453 6.35423C3.163 6.66582 2.66582 7.163 2.35423 7.77453C2.15514 8.16527 2.0744 8.58367 2.03655 9.04693C1.99999 9.49449 1.99999 10.0452 2 10.7186V15.2814C1.99999 15.9548 1.99999 16.5055 2.03655 16.9531C2.0744 17.4163 2.15514 17.8347 2.35423 18.2255C2.66582 18.837 3.163 19.3342 3.77453 19.6458C4.16527 19.8449 4.58367 19.9256 5.04693 19.9634C5.4945 20 6.0452 20 6.71858 20H17.2814C17.9548 20 18.5055 20 18.9531 19.9634C19.4163 19.9256 19.8347 19.8449 20.2255 19.6458C20.837 19.3342 21.3342 18.837 21.6458 18.2255C21.8449 17.8347 21.9256 17.4163 21.9634 16.9531C22 16.5055 22 15.9548 22 15.2814V10.7186C22 10.0452 22 9.4945 21.9634 9.04693C21.9256 8.58367 21.8449 8.16527 21.6458 7.77453C21.3342 7.163 20.837 6.66582 20.2255 6.35423C19.8347 6.15514 19.4163 6.0744 18.9531 6.03655C18.5055 5.99998 17.9548 5.99999 17.2815 6H7V3ZM18.8309 18.4684C19.2014 18.4382 19.4004 18.3827 19.5445 18.3093C19.8738 18.1415 20.1415 17.8738 20.3093 17.5445C20.3827 17.4004 20.4382 17.2014 20.4684 16.8309C20.4994 16.4517 20.5 15.9624 20.5 15.25V10.75C20.5 10.0376 20.4994 9.54833 20.4684 9.16908C20.4382 8.79858 20.3827 8.59956 20.3093 8.45552C20.1415 8.12623 19.8738 7.85852 19.5445 7.69074C19.4004 7.61735 19.2014 7.56184 18.8309 7.53157C18.4517 7.50058 17.9624 7.5 17.25 7.5H6.75C6.03756 7.5 5.54833 7.50058 5.16908 7.53157C4.79858 7.56184 4.59956 7.61735 4.45552 7.69074C4.12623 7.85852 3.85852 8.12623 3.69074 8.45552C3.61735 8.59956 3.56184 8.79858 3.53157 9.16908C3.50058 9.54833 3.5 10.0376 3.5 10.75V15.25C3.5 15.9624 3.50058 16.4517 3.53157 16.8309C3.56184 17.2014 3.61735 17.4004 3.69074 17.5445C3.85852 17.8738 4.12623 18.1415 4.45552 18.3093C4.59956 18.3827 4.79858 18.4382 5.16908 18.4684C5.54833 18.4994 6.03756 18.5 6.75 18.5H17.25C17.9624 18.5 18.4517 18.4994 18.8309 18.4684Z"
            fill="currentColor"
        />
    </s.Svg>
);
