import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HourglassFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0852 3.00008C11.1395 3.00012 11.1944 3.00016 11.2502 3.00016H24.7502C24.8059 3.00016 24.8609 3.00012 24.9151 3.00008C25.7992 2.99942 26.4829 2.99892 27.0726 3.17778C28.3909 3.5777 29.4226 4.60938 29.8225 5.92773C30.0014 6.51737 30.0009 7.20113 30.0002 8.08524C30.0002 8.13945 30.0002 8.19442 30.0002 8.25016C30.0002 10.7727 28.455 13.0019 26.8406 14.6698C25.4614 16.0947 23.8954 17.2495 22.7674 18.0002C23.8954 18.7509 25.4614 19.9056 26.8406 21.3305C28.455 22.9984 30.0002 25.2277 30.0002 27.7502C30.0002 27.8059 30.0002 27.8609 30.0002 27.9151C30.0009 28.7992 30.0014 29.4829 29.8225 30.0726C29.4226 31.3909 28.3909 32.4226 27.0726 32.8225C26.4829 33.0014 25.7992 33.0009 24.9151 33.0002C24.8609 33.0002 24.8059 33.0002 24.7502 33.0002H11.2502C11.1944 33.0002 11.1395 33.0002 11.0852 33.0002C10.2011 33.0009 9.51738 33.0014 8.92774 32.8225C7.60938 32.4226 6.5777 31.3909 6.17778 30.0726C5.99892 29.4829 5.99942 28.7992 6.00008 27.9151C6.00012 27.8609 6.00016 27.8059 6.00016 27.7502C6.00016 25.2277 7.54527 22.9984 9.15971 21.3305C10.539 19.9056 12.1049 18.7509 13.2329 18.0002C12.1049 17.2495 10.539 16.0947 9.15971 14.6698C7.54527 13.0019 6.00016 10.7727 6.00016 8.25016C6.00016 8.19442 6.00012 8.13945 6.00008 8.08524C5.99942 7.20113 5.99892 6.51737 6.17778 5.92773C6.5777 4.60938 7.60938 3.5777 8.92773 3.17778C9.51737 2.99892 10.2011 2.99942 11.0852 3.00008Z"
            fill="currentColor"
        />
    </s.Svg>
);
