import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CatalogOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.93167 3.00658C7.78687 3.02103 7.59684 3.05613 7.30192 3.11129L2.73436 3.96553C2.52386 4.0049 2.39245 4.0298 2.29362 4.0559C2.20063 4.08046 2.17151 4.09768 2.16028 4.10527C2.10237 4.14442 2.05792 4.19776 2.03071 4.25844C2.02629 4.2683 2.01491 4.297 2.00787 4.38953C2.00034 4.48856 2 4.61885 2 4.82962V11.1704C2 11.3812 2.00034 11.5115 2.00787 11.6105C2.01491 11.7031 2.02629 11.7318 2.03071 11.7416C2.05792 11.8023 2.10237 11.8556 2.16028 11.8948C2.17151 11.9024 2.20063 11.9196 2.29362 11.9441C2.39245 11.9703 2.52386 11.9951 2.73436 12.0345L7.30192 12.8888C7.59684 12.9439 7.78687 12.979 7.93167 12.9935C8.07223 13.0075 8.11609 12.9952 8.12869 12.9909C8.21482 12.961 8.28516 12.9028 8.32893 12.8291C8.33704 12.8154 8.36377 12.7618 8.37324 12.5199C8.3783 12.3908 8.37838 12.2334 8.37838 12.0247V3.97537C8.37838 3.76667 8.3783 3.60921 8.37324 3.48019C8.36377 3.23829 8.33704 3.18461 8.32893 3.17095C8.28516 3.09721 8.21482 3.03906 8.12869 3.00919C8.11609 3.00483 8.07223 2.99256 7.93167 3.00658ZM7.8324 2.01152C8.03402 1.99141 8.24516 1.99117 8.45631 2.06438C8.76275 2.17064 9.02298 2.38108 9.18885 2.66051C9.232 2.73321 9.26482 2.80853 9.2899 2.88538L9.99068 2.7702C10.2552 2.72671 10.4843 2.68905 10.674 2.67423C10.8729 2.65868 11.0805 2.66279 11.2873 2.73812C11.5882 2.84766 11.8425 3.05808 12.0043 3.33499C12.0403 3.39654 12.0689 3.45974 12.0916 3.52395L12.8436 3.41742C13.1036 3.38057 13.3291 3.34861 13.5157 3.33806C13.7118 3.32698 13.9159 3.33532 14.1184 3.41266C14.4135 3.52536 14.6619 3.73566 14.8198 4.01C14.9287 4.19936 14.9669 4.40038 14.9839 4.59454C15 4.77863 15 5.00333 15 5.26052V10.7395C15 10.9967 15 11.2214 14.9839 11.4055C14.9669 11.5997 14.9287 11.8007 14.8198 11.9901C14.6619 12.2644 14.4135 12.4747 14.1184 12.5874C13.9159 12.6647 13.7118 12.6731 13.5157 12.662C13.3291 12.6514 13.1036 12.6195 12.8436 12.5826L12.0916 12.4761C12.0689 12.5403 12.0403 12.6035 12.0043 12.6651C11.8425 12.942 11.5882 13.1524 11.2873 13.2619C11.0805 13.3373 10.8729 13.3414 10.674 13.3258C10.4843 13.311 10.2552 13.2733 9.99069 13.2299L9.2899 13.1147C9.26482 13.1915 9.232 13.2668 9.18885 13.3395C9.02298 13.619 8.76275 13.8294 8.45631 13.9357C8.24516 14.0089 8.03402 14.0086 7.8324 13.9885C7.6398 13.9693 7.40726 13.9258 7.13822 13.8755L2.53446 13.0145C2.34489 12.979 2.17689 12.9476 2.03825 12.911C1.88986 12.8718 1.7412 12.8185 1.6002 12.7232C1.38966 12.5809 1.22238 12.383 1.11825 12.1508C1.04819 11.9946 1.02233 11.8386 1.01075 11.6864C0.999983 11.5448 0.999991 11.3761 1 11.1872V4.8129C0.999991 4.62399 0.999983 4.45522 1.01075 4.31367C1.02233 4.16145 1.04819 4.00549 1.11825 3.84926C1.22238 3.61706 1.38966 3.41917 1.6002 3.27683C1.7412 3.18151 1.88986 3.12825 2.03825 3.08906C2.17689 3.05244 2.34487 3.02103 2.53443 2.98559C2.53977 2.98459 2.54514 2.98358 2.55052 2.98258L7.13825 2.12456C7.40727 2.07424 7.63981 2.03074 7.8324 2.01152ZM9.37836 12.1158L10.1329 12.2398C10.4231 12.2875 10.6098 12.3178 10.7519 12.3289C10.8895 12.3396 10.9325 12.3269 10.9452 12.3223C11.0296 12.2915 11.0983 12.2335 11.141 12.1605C11.148 12.1484 11.1727 12.0996 11.1828 11.8892C11.1891 11.7584 11.1892 11.5957 11.1892 11.3722V4.62787C11.1892 4.40439 11.1891 4.24165 11.1828 4.11085C11.1727 3.90046 11.148 3.85166 11.141 3.8396C11.0983 3.76657 11.0296 3.70851 10.9452 3.67776C10.9325 3.67314 10.8895 3.66043 10.7519 3.67119C10.6098 3.68229 10.4231 3.71254 10.1329 3.76025L9.37836 3.88425C9.37838 3.91142 9.37838 3.93902 9.37838 3.96707V12.033C9.37838 12.061 9.37838 12.0886 9.37836 12.1158ZM12.1892 11.4799L12.964 11.5897C13.2496 11.6302 13.4328 11.6557 13.5722 11.6636C13.7069 11.6712 13.7489 11.6581 13.7616 11.6532C13.8444 11.6216 13.9114 11.5637 13.953 11.4913C13.9577 11.4833 13.9763 11.4482 13.9877 11.3182C13.9996 11.1831 14 11.0027 14 10.719V5.28108C14 4.99733 13.9996 4.81698 13.9877 4.68183C13.9763 4.55187 13.9577 4.51679 13.953 4.5087C13.9114 4.4364 13.8444 4.37847 13.7616 4.34686C13.7489 4.342 13.7069 4.32886 13.5722 4.33647C13.4328 4.34435 13.2496 4.36988 12.964 4.41034L12.1892 4.52013C12.1892 4.55196 12.1892 4.58441 12.1892 4.61746V11.3826C12.1892 11.4156 12.1892 11.4481 12.1892 11.4799Z"
            fill="currentColor"
        />
    </s.Svg>
);
