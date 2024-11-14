import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LockOpenFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.925 4.10127C9.925 2.97572 10.826 2.06329 11.9375 2.06329C13.049 2.06329 13.95 2.97572 13.95 4.10127V7.55696C13.95 7.85058 14.1851 8.08861 14.475 8.08861C14.7649 8.08861 15 7.85058 15 7.55696V4.10127C15 2.38848 13.6289 1 11.9375 1C10.2461 1 8.875 2.38848 8.875 4.10127V6.49367H4.30301C3.83165 6.49366 3.44615 6.49366 3.13285 6.51958C2.80857 6.54641 2.51569 6.60364 2.24217 6.74477C1.8141 6.96564 1.46607 7.31808 1.24796 7.75157C1.1086 8.02855 1.05208 8.32513 1.02559 8.65352C0.999989 8.97078 0.999994 9.36115 1 9.83848V11.6552C0.999994 12.1325 0.999989 12.5229 1.02559 12.8401C1.05208 13.1685 1.1086 13.4651 1.24796 13.7421C1.46607 14.1756 1.8141 14.528 2.24217 14.7489C2.51569 14.89 2.80857 14.9473 3.13285 14.9741C3.44614 15 3.83164 15 4.30299 15H8.89701C9.36837 15 9.75386 15 10.0671 14.9741C10.3914 14.9473 10.6843 14.89 10.9578 14.7489C11.3859 14.528 11.7339 14.1756 11.952 13.7421C12.0914 13.4651 12.1479 13.1685 12.1744 12.8401C12.2 12.5229 12.2 12.1326 12.2 11.6553L12.2 9.26026C12.2002 8.83298 12.2003 8.52612 12.1371 8.25966C11.9374 7.41728 11.2879 6.75956 10.4561 6.55732C10.2989 6.51911 10.1275 6.50377 9.925 6.49765V4.10127ZM6.6002 12.1642C7.37339 12.1642 8.0002 11.5294 8.0002 10.7464C8.0002 9.96345 7.37339 9.32872 6.6002 9.32872C5.827 9.32872 5.2002 9.96345 5.2002 10.7464C5.2002 11.5294 5.827 12.1642 6.6002 12.1642Z"
            fill="currentColor"
        />
    </s.Svg>
);