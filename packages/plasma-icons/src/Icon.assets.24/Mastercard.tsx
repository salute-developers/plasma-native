import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Mastercard: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M11.3634 7.00801C9.85765 8.18366 9.05005 10.5 9.05005 12C9.05005 13.5 9.57617 15.5 11.3634 16.9069C10.3629 17.5435 9.38265 17.9149 8.08697 17.9149C4.6148 17.9149 1.80005 15.2477 1.80005 11.9574C1.80005 8.66724 4.6148 6 8.08697 6C9.38265 6 10.3629 6.37141 11.3634 7.00801Z"
            fill="currentColor"
        />
        <s.Path
            d="M12.8634 16.9069C13.8639 17.5435 14.5307 17.9149 15.8264 17.9149C19.2986 17.9149 22.1133 15.2477 22.1133 11.9574C22.1133 8.66724 19.2986 6 15.8264 6C14.5307 6 13.8639 6.3634 12.8634 7C14.3692 8.17564 15.1879 10.484 15.1507 11.992C15.1134 13.5 14.3692 15.7312 12.8634 16.9069Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.4538 11.9574C14.4538 10.0601 13.5392 8.36951 12.1134 7.27659C10.6877 8.36951 9.773 10.0601 9.773 11.9574C9.773 13.8548 10.6877 15.5454 12.1134 16.6383C13.5392 15.5454 14.4538 13.8548 14.4538 11.9574Z"
            fill="currentColor"
        />
    </s.Svg>
);