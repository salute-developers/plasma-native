import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CardstackHorizOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.752 4.51878C14.0282 4.51878 14.252 4.74264 14.252 5.01878V10.9849C14.252 11.2611 14.0282 11.4849 13.752 11.4849C13.4759 11.4849 13.252 11.2611 13.252 10.9849V5.01878C13.252 4.74264 13.4759 4.51878 13.752 4.51878ZM8.6743 3.30653V12.6971C8.6743 13.1145 8.67431 13.4593 8.6505 13.7383C8.62585 14.0272 8.57269 14.2956 8.43565 14.5426C8.22608 14.9203 7.89409 15.2153 7.4944 15.3789C7.23303 15.486 6.96017 15.5072 6.6704 15.4977C6.39058 15.4885 6.04814 15.448 5.63364 15.3989L4.14684 15.2228C3.81326 15.1833 3.53474 15.1503 3.30782 15.1054C3.07052 15.0585 2.85204 14.9921 2.64886 14.8665C2.33357 14.6715 2.0822 14.3886 1.92569 14.0526C1.82483 13.8361 1.78459 13.6113 1.7659 13.3701C1.74804 13.1395 1.74804 12.8591 1.74805 12.5231V3.48058C1.74804 3.14465 1.74804 2.86417 1.7659 2.63354C1.78459 2.39236 1.82483 2.1676 1.92569 1.95104C2.0822 1.61502 2.33357 1.33211 2.64886 1.13718C2.85204 1.01155 3.07052 0.945143 3.30782 0.898221C3.53475 0.853352 3.81325 0.820372 4.14686 0.780865L5.63366 0.60477C6.04816 0.555671 6.39059 0.515108 6.6704 0.505938C6.96017 0.496442 7.23303 0.517658 7.4944 0.624702C7.89409 0.788397 8.22608 1.08339 8.43565 1.46105C8.57269 1.70801 8.62585 1.97648 8.6505 2.26536C8.67431 2.54431 8.6743 2.88913 8.6743 3.30653ZM7.65413 2.35039C7.63482 2.12413 7.60006 2.01619 7.56125 1.94626C7.46198 1.76737 7.30472 1.62764 7.1154 1.5501C7.04139 1.51979 6.93012 1.49796 6.70315 1.5054C6.47107 1.51301 6.1712 1.54809 5.72964 1.60039L4.28339 1.77168C3.92602 1.81401 3.68621 1.84276 3.50179 1.87923C3.32348 1.91449 3.23526 1.95031 3.17475 1.98773C3.0254 2.08007 2.90633 2.21407 2.8322 2.37324C2.80216 2.43774 2.77695 2.52956 2.76291 2.71078C2.7484 2.89821 2.74805 3.13973 2.74805 3.49961V12.504C2.74805 12.8639 2.7484 13.1054 2.76291 13.2929C2.77695 13.4741 2.80216 13.5659 2.8322 13.6304C2.90633 13.7896 3.0254 13.9236 3.17475 14.0159C3.23526 14.0533 3.32348 14.0892 3.5018 14.1244C3.68621 14.1609 3.92602 14.1896 4.28339 14.232L5.72964 14.4033C6.1712 14.4556 6.47107 14.4906 6.70315 14.4982C6.93012 14.5057 7.04139 14.4839 7.1154 14.4536C7.30472 14.376 7.46198 14.2363 7.56125 14.0574C7.60006 13.9875 7.63482 13.8795 7.65413 13.6533C7.67387 13.4219 7.6743 13.12 7.6743 12.6753V3.32831C7.6743 2.88367 7.67387 2.58175 7.65413 2.35039ZM12.1603 4.46547C12.1603 4.1274 12.1603 3.84749 12.1441 3.61917C12.1273 3.38266 12.0911 3.16141 11.9978 2.95054C11.7868 2.47373 11.3891 2.10459 10.8979 1.92962C10.6807 1.85224 10.4573 1.83263 10.2202 1.83344C9.99134 1.83423 9.71221 1.85505 9.37508 1.88019L9.35722 1.88152L9.43159 2.87875C9.79107 2.85195 10.0346 2.83408 10.2237 2.83344C10.4086 2.8328 10.5008 2.84971 10.5623 2.87164C10.795 2.95452 10.9834 3.12937 11.0833 3.35523C11.1098 3.41498 11.1335 3.50569 11.1466 3.69012C11.16 3.87873 11.1603 4.1229 11.1603 4.48337V11.5203C11.1603 11.8808 11.16 12.1249 11.1466 12.3135C11.1335 12.498 11.1098 12.5887 11.0833 12.6484C10.9834 12.8743 10.795 13.0492 10.5623 13.132C10.5008 13.154 10.4086 13.1709 10.2237 13.1702C10.0346 13.1696 9.79107 13.1517 9.43159 13.1249L9.35722 14.1221L9.37505 14.1235C9.71219 14.1486 9.99134 14.1694 10.2202 14.1702C10.4573 14.171 10.6807 14.1514 10.8979 14.074C11.3891 13.8991 11.7868 13.5299 11.9978 13.0531C12.0911 12.8423 12.1273 12.621 12.1441 12.3845C12.1603 12.1562 12.1603 11.8763 12.1603 11.5382V4.46547Z"
            fill="currentColor"
        />
    </s.Svg>
);