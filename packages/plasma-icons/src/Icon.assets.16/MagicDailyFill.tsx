import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MagicDailyFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1.25C6.74263 1.25 5.725 2.27092 5.725 3.52825H2.225C1.93505 3.52825 1.7 3.76373 1.7 4.05422C1.7 4.34471 1.93505 4.58019 2.225 4.58019H3.1L3.1 9.33599C3.1 9.80823 3.09999 10.1944 3.12559 10.5083C3.15208 10.8332 3.2086 11.1266 3.34796 11.4007C3.56608 11.8295 3.91411 12.1782 4.34217 12.3967C4.61569 12.5363 4.90857 12.593 5.23285 12.6195C5.54613 12.6451 5.93161 12.6451 6.40294 12.6451H9.59701C10.0683 12.6451 10.4539 12.6451 10.7672 12.6195C11.0914 12.593 11.3843 12.5363 11.6578 12.3967C12.0859 12.1782 12.4339 11.8295 12.652 11.4007C12.7914 11.1266 12.8479 10.8332 12.8744 10.5083C12.9 10.1944 12.9 9.80824 12.9 9.33601V4.58019H13.775C14.065 4.58019 14.3 4.34471 14.3 4.05422C14.3 3.76373 14.065 3.52825 13.775 3.52825H10.275C10.275 2.27092 9.25736 1.25 8 1.25ZM8 2.3C7.32437 2.3 6.775 2.84899 6.775 3.52825H9.225C9.225 2.84899 8.67563 2.3 8 2.3ZM5.52911 5.9623C5.73433 5.75747 6.06674 5.75777 6.27157 5.96299L8.02157 7.71624C8.22614 7.92118 8.22614 8.25306 8.02157 8.45801L6.27157 10.2113C6.06674 10.4165 5.73433 10.4168 5.52911 10.2119C5.3239 10.0071 5.32359 9.6747 5.52843 9.46948L6.90823 8.08712L5.52843 6.70476C5.32359 6.49955 5.3239 6.16714 5.52911 5.9623ZM8.32912 5.9623C8.53433 5.75747 8.86674 5.75777 9.07158 5.96299L10.8216 7.71624C11.0261 7.92118 11.0261 8.25306 10.8216 8.45801L9.07158 10.2113C8.86674 10.4165 8.53433 10.4168 8.32912 10.2119C8.1239 10.0071 8.12359 9.6747 8.32843 9.46948L9.70823 8.08712L8.32843 6.70476C8.12359 6.49955 8.1239 6.16714 8.32912 5.9623Z"
            fill="currentColor"
        />
        <s.Path
            d="M15 10.3661C15 10.0762 14.7649 9.8411 14.475 9.8411C14.1851 9.8411 13.95 10.0762 13.95 10.3661L13.95 10.3781C13.9473 12.2107 12.4624 13.6956 10.6298 13.6982H5.37016C3.53759 13.6956 2.05267 12.2107 2.05 10.3781L2.05 10.3661H1L1 10.3796C1.00352 12.7909 2.95736 14.7447 5.36863 14.7482H10.6314C13.0426 14.7447 14.9965 12.7909 15 10.3796L15 10.3661Z"
            fill="currentColor"
        />
    </s.Svg>
);
