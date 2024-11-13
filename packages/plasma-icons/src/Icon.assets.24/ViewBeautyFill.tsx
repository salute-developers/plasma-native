import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ViewBeautyFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M19.2375 3.72268C19.1621 3.49348 18.8379 3.49348 18.7625 3.72268L18.4834 4.57139C18.4825 4.57406 18.4816 4.57674 18.4807 4.57942C18.4793 4.58384 18.4778 4.58826 18.4763 4.59267C18.177 5.4805 17.4799 6.17756 16.592 6.47689C16.5877 6.47836 16.5833 6.47983 16.5789 6.48128C16.5762 6.48218 16.5735 6.48307 16.5708 6.48396L15.7221 6.76309C15.5502 6.81962 15.5072 7.01613 15.5932 7.14265C15.6102 7.16763 15.6321 7.18988 15.6592 7.20779C15.6778 7.22012 15.6988 7.2304 15.7221 7.23809L16.5708 7.51721L16.6002 7.52703C16.9282 7.63867 17.2301 7.80465 17.4952 8.0145C17.9247 8.35443 18.258 8.80946 18.4505 9.33506C18.4588 9.35778 18.4669 9.38064 18.4747 9.40363C18.4776 9.41232 18.4805 9.42103 18.4834 9.42976L18.7625 10.2785C18.7672 10.2928 18.7729 10.3062 18.7794 10.3188C18.8093 10.376 18.8568 10.4145 18.9105 10.4344C19.0333 10.48 19.1883 10.428 19.2375 10.2785L19.5166 9.42979L19.5265 9.40044C19.8264 8.51916 20.5186 7.82695 21.3999 7.52703L21.4292 7.51721L21.9816 7.33553C21.9816 7.33552 21.9816 7.33554 21.9816 7.33553L22.2779 7.23806C22.5071 7.16268 22.5071 6.83847 22.2779 6.76309L21.4292 6.48399C21.4206 6.48114 21.4119 6.47823 21.4033 6.47531C21.2992 6.44004 21.1978 6.39931 21.0994 6.35344C20.4067 6.03078 19.8607 5.45413 19.5776 4.73975C19.5595 4.69398 19.5424 4.64763 19.5265 4.60076L19.5166 4.57141"
            fill="currentColor"
        />
        <s.Path d="M19.2375 3.72268L19.3565 4.08451L19.2375 3.72268Z" fill="currentColor" />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7416 8.46716L21.9998 8.38224C22 8.48882 22 8.59879 22 8.71225V15.282C22 15.9554 22 16.5061 21.9634 16.9536C21.9256 17.4169 21.8449 17.8353 21.6458 18.226C21.3342 18.8376 20.837 19.3348 20.2255 19.6463C19.8347 19.8454 19.4163 19.9262 18.9531 19.964C18.5056 20.0006 17.9549 20.0006 17.2816 20.0006H6.71856C6.04528 20.0006 5.49445 20.0006 5.04693 19.964C4.58367 19.9262 4.16527 19.8454 3.77453 19.6463C3.163 19.3348 2.66582 18.8376 2.35423 18.226C2.15514 17.8353 2.0744 17.4169 2.03655 16.9536C1.99999 16.5061 1.99999 15.9554 2 15.282V8.71916C1.99999 8.04579 1.99999 7.49506 2.03655 7.04751C2.0744 6.58424 2.15514 6.16585 2.35423 5.77511C2.66582 5.16358 3.163 4.66639 3.77453 4.3548C4.16527 4.15571 4.58367 4.07498 5.04693 4.03713C5.4945 4.00056 6.0452 4.00057 6.71858 4.00057H17.2814C17.3973 4.00057 17.5097 4.00057 17.6184 4.00076L17.5335 4.25899C17.335 4.86237 16.8618 5.33561 16.2584 5.53404L15.4097 5.81317C14.2637 6.19005 14.2637 7.81114 15.4097 8.18803L16.2584 8.46715C16.8618 8.66559 17.335 9.13883 17.5335 9.7422L17.8126 10.5909C18.1895 11.7369 19.8106 11.7369 20.1875 10.5909L20.4666 9.74221C20.665 9.13883 21.1383 8.66559 21.7416 8.46716ZM12 12.0006C13.3807 12.0006 14.5 10.8813 14.5 9.50057C14.5 8.11986 13.3807 7.00057 12 7.00057C10.6193 7.00057 9.5 8.11986 9.5 9.50057C9.5 10.8813 10.6193 12.0006 12 12.0006ZM16.994 15.5378C17.0368 15.1222 16.8481 14.719 16.5295 14.4883C15.2307 13.5481 13.6738 13.0006 12.0001 13.0006C10.3263 13.0006 8.76931 13.5481 7.47048 14.4885C7.15185 14.7191 6.96314 15.1224 7.00605 15.5379C7.02917 15.7619 7.06989 15.9365 7.1416 16.0906C7.28757 16.4042 7.52049 16.6591 7.80697 16.8189C8.13266 17.0006 8.559 17.0006 9.4117 17.0006H14.5883C15.441 17.0006 15.8673 17.0006 16.193 16.8189C16.4795 16.6591 16.7124 16.4042 16.8584 16.0906C16.9301 15.9365 16.9708 15.7618 16.994 15.5378ZM7.19112 9.1203C7.13312 8.93222 6.86689 8.93222 6.80888 9.1203L6.60444 9.78323C6.40952 10.4153 5.91471 10.9101 5.28265 11.105L4.61973 11.3095C4.43165 11.3675 4.43165 11.6337 4.61973 11.6917L5.28265 11.8961C5.91471 12.0911 6.40952 12.5859 6.60444 13.2179L6.80888 13.8808C6.86689 14.0689 7.13312 14.0689 7.19112 13.8808L7.39556 13.2179C7.59048 12.5859 8.08529 12.0911 8.71735 11.8961L9.38027 11.6917C9.56835 11.6337 9.56835 11.3675 9.38027 11.3095L8.71735 11.105C8.08529 10.9101 7.59048 10.4153 7.39556 9.78323L7.19112 9.1203Z"
            fill="currentColor"
        />
    </s.Svg>
);
