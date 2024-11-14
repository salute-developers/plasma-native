import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowWideRightOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.10088 12.9598C8.91675 12.8812 8.7973 12.7002 8.7973 12.5V10.5173H2.58621C1.98631 10.5173 1.5 10.0309 1.5 9.43105V6.56898C1.5 5.96908 1.98631 5.48277 2.58621 5.48277H8.7973V3.50001C8.7973 3.29978 8.91675 3.11886 9.10088 3.04021C9.28501 2.96155 9.49831 3.00033 9.64298 3.13876L14.3457 7.63876C14.4443 7.73308 14.5 7.86358 14.5 8.00001C14.5 8.13644 14.4443 8.26694 14.3457 8.36126L9.64298 12.8613C9.49831 12.9997 9.28501 13.0385 9.10088 12.9598ZM13.2768 8.00001L9.7973 4.6705V5.98277C9.7973 6.25891 9.57344 6.48277 9.2973 6.48277H2.58621C2.5386 6.48277 2.5 6.52137 2.5 6.56898V9.43105C2.5 9.47866 2.5386 9.51725 2.58621 9.51725H9.2973C9.57344 9.51725 9.7973 9.74111 9.7973 10.0173V11.3295L13.2768 8.00001Z"
            fill="currentColor"
        />
    </s.Svg>
);