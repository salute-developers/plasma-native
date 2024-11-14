import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ShieldLinesCirclesFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.3833 1.11623C8.14986 0.961255 7.85014 0.961256 7.6167 1.11623C7.34605 1.29591 6.50677 1.83519 5.47283 2.32772C4.42363 2.82752 3.24304 3.24509 2.27083 3.24509C1.98318 3.24509 1.75 3.48074 1.75 3.77144C1.75 5.64911 1.95519 7.21903 2.29316 8.53071L7.83072 5.30214C7.82647 5.26039 7.8243 5.21803 7.8243 5.17515C7.8243 4.49686 8.3684 3.947 9.03958 3.947C9.71076 3.947 10.2549 4.49686 10.2549 5.17515C10.2549 5.85344 9.71076 6.4033 9.03958 6.4033C8.77346 6.4033 8.52733 6.31686 8.32716 6.17025L2.58735 9.51674C3.13455 11.117 3.89124 12.2655 4.67625 13.0859C6.18301 14.6606 7.73221 14.9621 7.90682 14.9918L7.91057 14.9924L7.9243 14.9946C7.93824 14.9966 7.96551 15 7.99999 15C8.03447 15 8.06174 14.9966 8.0757 14.9946L8.08943 14.9924L8.09214 14.992L8.09318 14.9918C8.26778 14.9621 9.81699 14.6606 11.3237 13.0859C12.4351 11.9244 13.4897 10.1055 13.9735 7.27768L8.16646 10.6633C8.17067 10.7049 8.17282 10.7471 8.17282 10.7899C8.17282 11.4681 7.62873 12.018 6.95755 12.018C6.28637 12.018 5.74227 11.4681 5.74227 10.7899C5.74227 10.1116 6.28637 9.56171 6.95755 9.56171C7.22383 9.56171 7.47011 9.64826 7.67035 9.79504L14.1425 6.02159C14.2123 5.32555 14.25 4.5768 14.25 3.77144C14.25 3.48074 14.0168 3.24509 13.7292 3.24509C12.7569 3.24509 11.5764 2.82752 10.5272 2.32772C9.49322 1.83519 8.65395 1.29591 8.3833 1.11623Z"
            fill="currentColor"
        />
    </s.Svg>
);