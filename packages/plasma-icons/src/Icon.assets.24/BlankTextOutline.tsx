import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlankTextOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M8 12.25C7.58579 12.25 7.25 12.5858 7.25 13C7.25 13.4142 7.58579 13.75 8 13.75H16C16.4142 13.75 16.75 13.4142 16.75 13C16.75 12.5858 16.4142 12.25 16 12.25H8Z"
            fill="currentColor"
        />
        <s.Path
            d="M8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.71858 2C8.04521 1.99999 7.49449 1.99998 7.04693 2.03655C6.58367 2.0744 6.16527 2.15514 5.77453 2.35423C5.163 2.66582 4.66582 3.163 4.35423 3.77453C4.15514 4.16527 4.0744 4.58367 4.03655 5.04693C3.99998 5.49449 3.99999 6.0452 4 6.71857V17.2814C3.99999 17.9548 3.99998 18.5055 4.03655 18.9531C4.0744 19.4163 4.15514 19.8347 4.35423 20.2255C4.66582 20.837 5.163 21.3342 5.77453 21.6458C6.16527 21.8449 6.58367 21.9256 7.04693 21.9634C7.49449 22 8.04519 22 8.71856 22H15.2814C15.9548 22 16.5055 22 16.9531 21.9634C17.4163 21.9256 17.8347 21.8449 18.2255 21.6458C18.837 21.3342 19.3342 20.837 19.6458 20.2255C19.8449 19.8347 19.9256 19.4163 19.9634 18.9531C20 18.5055 20 17.9548 20 17.2814V8.75C20 8.55109 19.921 8.36032 19.7803 8.21967L13.7803 2.21967C13.6397 2.07902 13.4489 2 13.25 2H8.71858ZM6.45552 3.69074C6.59956 3.61735 6.79858 3.56184 7.16908 3.53157C7.54833 3.50058 8.03756 3.5 8.75 3.5H12.5V5.58043C12.5 6.11459 12.5 6.56044 12.5297 6.92467C12.5608 7.30456 12.6279 7.66121 12.7997 7.99848C13.0634 8.51592 13.4841 8.93662 14.0015 9.20027C14.3388 9.37211 14.6954 9.43922 15.0753 9.47026C15.4396 9.50002 15.8854 9.50001 16.4196 9.5H18.5V17.25C18.5 17.9624 18.4994 18.4517 18.4684 18.8309C18.4382 19.2014 18.3827 19.4004 18.3093 19.5445C18.1415 19.8738 17.8738 20.1415 17.5445 20.3093C17.4004 20.3827 17.2014 20.4382 16.8309 20.4684C16.4517 20.4994 15.9624 20.5 15.25 20.5H8.75C8.03756 20.5 7.54833 20.4994 7.16908 20.4684C6.79858 20.4382 6.59956 20.3827 6.45552 20.3093C6.12623 20.1415 5.85852 19.8738 5.69074 19.5445C5.61735 19.4004 5.56184 19.2014 5.53157 18.8309C5.50058 18.4517 5.5 17.9624 5.5 17.25V6.75C5.5 6.03756 5.50058 5.54833 5.53157 5.16908C5.56184 4.79858 5.61735 4.59956 5.69074 4.45552C5.85852 4.12623 6.12623 3.85852 6.45552 3.69074ZM17.4393 8L14 4.56066V5.55C14 6.12243 14.0006 6.50664 14.0248 6.80252C14.0482 7.08965 14.0901 7.22693 14.1362 7.31749C14.2561 7.55269 14.4473 7.74392 14.6825 7.86376C14.7731 7.9099 14.9104 7.95178 15.1975 7.97524C15.4934 7.99942 15.8776 8 16.45 8H17.4393Z"
            fill="currentColor"
        />
    </s.Svg>
);
