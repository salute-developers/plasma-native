import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SleepOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5838 1.89131L11.6023 1.9026C13.6376 3.1411 14.9987 5.38125 14.9987 7.93972C14.9987 11.8405 11.8355 15.0025 7.93396 15.0025C5.37788 15.0025 3.13932 13.6451 1.89956 11.6142L1.88823 11.5957C1.7803 11.4189 1.68195 11.2578 1.61615 11.1241C1.55635 11.0026 1.4614 10.789 1.5081 10.5474C1.56246 10.2662 1.75148 10.0341 2.01594 9.92403C2.15093 9.86782 2.28125 9.86696 2.37267 9.87491C2.4666 9.88308 2.56053 9.90458 2.64604 9.92816C2.81043 9.97349 3.02071 10.0489 3.26499 10.1366L3.28418 10.1435C3.84866 10.346 4.45757 10.4566 5.09341 10.4566C8.05103 10.4566 10.4484 8.05969 10.4484 5.10328C10.4484 4.46567 10.3371 3.85514 10.1333 3.28935L10.1264 3.27016C10.0384 3.02592 9.96268 2.81569 9.91713 2.65133C9.89344 2.56584 9.87182 2.47193 9.86352 2.37801C9.85545 2.28662 9.85613 2.15628 9.91216 2.02119C10.0219 1.7566 10.2537 1.5673 10.5348 1.51255C10.7764 1.46552 10.9901 1.5602 11.1117 1.61983C11.2455 1.68545 11.4068 1.7836 11.5838 1.89131ZM10.9833 2.6966C11.0094 2.77046 11.0395 2.85441 11.0741 2.95046C11.3165 3.62339 11.4484 4.34849 11.4484 5.10328C11.4484 8.61225 8.60304 11.4566 5.09341 11.4566C4.34083 11.4566 3.61777 11.3256 2.94647 11.0847C2.85051 11.0503 2.76664 11.0203 2.69283 10.9943C2.71147 11.025 2.73152 11.0578 2.75309 11.0932C3.81878 12.8389 5.74064 14.0025 7.93396 14.0025C11.2835 14.0025 13.9987 11.288 13.9987 7.93972C13.9987 5.7447 12.8321 3.82154 11.0825 2.75687C11.047 2.73529 11.014 2.71524 10.9833 2.6966Z"
            fill="currentColor"
        />
    </s.Svg>
);
