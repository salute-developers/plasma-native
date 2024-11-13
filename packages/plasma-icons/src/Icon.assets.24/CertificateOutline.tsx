import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CertificateOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M6.71858 4C6.04521 3.99999 5.49449 3.99998 5.04693 4.03655C4.58367 4.0744 4.16527 4.15514 3.77453 4.35423C3.16301 4.66582 2.66582 5.163 2.35423 5.77453C2.15514 6.16527 2.0744 6.58367 2.03655 7.04693C1.99999 7.49449 1.99999 8.04519 2 8.71856V15.2814C1.99999 15.9548 1.99999 16.5055 2.03655 16.9531C2.0744 17.4163 2.15514 17.8347 2.35423 18.2255C2.66582 18.837 3.16301 19.3342 3.77453 19.6458C4.16527 19.8449 4.58367 19.9256 5.04693 19.9634C5.49449 20 6.0452 20 6.71856 20H11.4982C11.3004 19.5258 11.1572 19.0232 11.0764 18.5H6.75C6.03756 18.5 5.54834 18.4994 5.16908 18.4684C4.79858 18.4382 4.59956 18.3827 4.45552 18.3093C4.12623 18.1415 3.85852 17.8738 3.69074 17.5445C3.61735 17.4004 3.56184 17.2014 3.53157 16.8309C3.50058 16.4517 3.5 15.9624 3.5 15.25V8.75C3.5 8.03756 3.50058 7.54833 3.53157 7.16908C3.56184 6.79858 3.61735 6.59956 3.69074 6.45552C3.85852 6.12623 4.12623 5.85852 4.45552 5.69074C4.59956 5.61735 4.79858 5.56184 5.16908 5.53157C5.54834 5.50058 6.03756 5.5 6.75 5.5H17.25C17.9624 5.5 18.4517 5.50058 18.8309 5.53157C19.2014 5.56184 19.4004 5.61735 19.5445 5.69074C19.8738 5.85852 20.1415 6.12623 20.3093 6.45552C20.3827 6.59956 20.4382 6.79858 20.4684 7.16908C20.4994 7.54833 20.5 8.03756 20.5 8.75V11.7322C21.051 12.0194 21.5557 12.3832 22 12.8096V8.71856C22 8.04519 22 7.49449 21.9634 7.04693C21.9256 6.58367 21.8449 6.16527 21.6458 5.77453C21.3342 5.163 20.837 4.66582 20.2255 4.35423C19.8347 4.15514 19.4163 4.0744 18.9531 4.03655C18.5055 3.99998 17.9548 3.99999 17.2814 4H6.71858Z"
            fill="currentColor"
        />
        <s.Path
            d="M6 7.25C5.58579 7.25 5.25 7.58579 5.25 8C5.25 8.41421 5.58579 8.75 6 8.75H13.5C13.9142 8.75 14.25 8.41421 14.25 8C14.25 7.58579 13.9142 7.25 13.5 7.25H6Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.25 11C5.25 10.5858 5.58579 10.25 6 10.25H13.5C13.9142 10.25 14.25 10.5858 14.25 11C14.25 11.4142 13.9142 11.75 13.5 11.75H6C5.58579 11.75 5.25 11.4142 5.25 11Z"
            fill="currentColor"
        />
        <s.Path
            d="M6 13.25C5.58579 13.25 5.25 13.5858 5.25 14C5.25 14.4142 5.58579 14.75 6 14.75H9.5C9.91421 14.75 10.25 14.4142 10.25 14C10.25 13.5858 9.91421 13.25 9.5 13.25H6Z"
            fill="currentColor"
        />
        <s.Path
            d="M17.6609 12.2181C17.581 12.1098 17.419 12.1098 17.3391 12.2181L16.3442 13.5664C16.2934 13.6352 16.2045 13.6641 16.1229 13.6383L14.5256 13.1323C14.3972 13.0916 14.2662 13.1868 14.2652 13.3215L14.2528 14.997C14.2522 15.0825 14.1972 15.1582 14.1161 15.1853L12.5264 15.7147C12.3986 15.7573 12.3486 15.9114 12.4269 16.0209L13.4018 17.3836C13.4515 17.4532 13.4515 17.5468 13.4018 17.6164L12.4269 18.9791C12.3486 19.0886 12.3986 19.2427 12.5264 19.2852L14.1161 19.8147C14.1972 19.8418 14.2522 19.9175 14.2528 20.003L14.2652 21.6785C14.2662 21.8132 14.3972 21.9084 14.5256 21.8677L16.1229 21.3617C16.2045 21.3359 16.2934 21.3648 16.3442 21.4336L17.3391 22.7819C17.419 22.8902 17.581 22.8902 17.6609 22.7819L18.6558 21.4336C18.7066 21.3648 18.7955 21.3359 18.8771 21.3617L20.4744 21.8677C20.6028 21.9084 20.7338 21.8132 20.7348 21.6785L20.7472 20.003C20.7478 19.9175 20.8028 19.8418 20.8839 19.8147L22.4736 19.2852C22.6014 19.2427 22.6514 19.0886 22.5731 18.9791L21.5982 17.6164C21.5485 17.5468 21.5485 17.4532 21.5982 17.3836L22.5731 16.0209C22.6514 15.9114 22.6014 15.7573 22.4736 15.7147L20.8839 15.1853C20.8028 15.1582 20.7478 15.0825 20.7472 14.997L20.7348 13.3215C20.7338 13.1868 20.6028 13.0916 20.4744 13.1323L18.8771 13.6383C18.7955 13.6641 18.7066 13.6352 18.6558 13.5664L17.6609 12.2181Z"
            fill="currentColor"
        />
    </s.Svg>
);
