import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoClipFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.883 4H9.117C8.02486 3.99999 7.15935 3.99999 6.46173 4.05699C5.74835 4.11527 5.14472 4.23688 4.59355 4.51772C3.69978 4.97312 2.97312 5.69978 2.51772 6.59355C2.23688 7.14472 2.11527 7.74834 2.05699 8.46173C1.99999 9.15935 1.99999 10.0249 2 11.117V12.883C1.99999 13.9751 1.99999 14.8406 2.05699 15.5383C2.11527 16.2517 2.23688 16.8553 2.51772 17.4065C2.97312 18.3002 3.69978 19.0269 4.59355 19.4823C5.14472 19.7631 5.74835 19.8847 6.46173 19.943C7.15934 20 8.02481 20 9.11691 20H14.883C15.9751 20 16.8407 20 17.5383 19.943C18.2517 19.8847 18.8553 19.7631 19.4065 19.4823C20.3002 19.0269 21.0269 18.3002 21.4823 17.4065C21.7631 16.8553 21.8847 16.2517 21.943 15.5383C22 14.8406 22 13.9752 22 12.883V11.117C22 10.0248 22 9.15935 21.943 8.46173C21.8847 7.74834 21.7631 7.14472 21.4823 6.59355C21.0269 5.69978 20.3002 4.97312 19.4065 4.51772C18.8553 4.23688 18.2517 4.11527 17.5383 4.05699C16.8406 3.99999 15.9751 3.99999 14.883 4ZM15.25 12.866C15.9167 12.4811 15.9167 11.5188 15.25 11.1339L10.75 8.53586C10.0833 8.15096 9.25 8.63208 9.25 9.40188V14.598C9.25 15.3678 10.0833 15.849 10.75 15.4641L15.25 12.866Z"
            fill="currentColor"
        />
    </s.Svg>
);