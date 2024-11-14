import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Nested: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 5C6.55228 5 7 5.44772 7 6V9C7 11.1167 7.00078 12.6441 7.09886 13.8446C7.19599 15.0334 7.38353 15.8132 7.70846 16.4509C8.33163 17.674 9.32601 18.6684 10.5491 19.2915C11.1868 19.6165 11.9666 19.804 13.1554 19.9011C14.3559 19.9992 15.8833 20 18 20H27.5858L22.9289 15.3431C22.5384 14.9526 22.5384 14.3195 22.9289 13.9289C23.3195 13.5384 23.9526 13.5384 24.3431 13.9289L30.7071 20.2929C31.0976 20.6834 31.0976 21.3166 30.7071 21.7071L24.3431 28.0711C23.9526 28.4616 23.3195 28.4616 22.9289 28.0711C22.5384 27.6805 22.5384 27.0474 22.9289 26.6569L27.5858 22H17.9549C15.8929 22 14.284 22 12.9926 21.8945C11.6801 21.7873 10.6077 21.5661 9.64108 21.0736C8.0417 20.2586 6.74137 18.9583 5.92644 17.3589C5.43392 16.3923 5.21274 15.3199 5.1055 14.0074C4.99999 12.716 4.99999 11.1071 5 9.04508V6C5 5.44772 5.44772 5 6 5Z"
            fill="currentColor"
        />
    </s.Svg>
);