import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwapHorizCircOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00016 2.00195C4.68744 2.00195 2.00195 4.68744 2.00195 8.00016C2.00195 11.3129 4.68744 13.9984 8.00016 13.9984C11.3129 13.9984 13.9984 11.3129 13.9984 8.00016C13.9984 4.68744 11.3129 2.00195 8.00016 2.00195ZM1.00195 8.00016C1.00195 4.13516 4.13516 1.00195 8.00016 1.00195C11.8652 1.00195 14.9984 4.13516 14.9984 8.00016C14.9984 11.8652 11.8652 14.9984 8.00016 14.9984C4.13516 14.9984 1.00195 11.8652 1.00195 8.00016ZM6.07107 4.48551C6.26633 4.68078 6.26633 4.99736 6.07107 5.19262L5.51961 5.74408H11.6888C11.965 5.74408 12.1888 5.96794 12.1888 6.24408C12.1888 6.52023 11.965 6.74408 11.6888 6.74408H4.3125C4.11027 6.74408 3.92795 6.62226 3.85056 6.43543C3.77317 6.24859 3.81595 6.03353 3.95895 5.89053L5.36396 4.48551C5.55923 4.29025 5.87581 4.29025 6.07107 4.48551ZM9.93088 10.8079C9.73562 11.0032 9.73562 11.3197 9.93088 11.515C10.1261 11.7103 10.4427 11.7103 10.638 11.515L12.043 10.11C12.186 9.96699 12.2288 9.75193 12.1514 9.56509C12.074 9.37825 11.8917 9.25643 11.6895 9.25643H4.31311C4.03697 9.25643 3.81311 9.48029 3.81311 9.75643C3.81311 10.0326 4.03697 10.2564 4.31311 10.2564H10.4823L9.93088 10.8079Z"
            fill="currentColor"
        />
    </s.Svg>
);