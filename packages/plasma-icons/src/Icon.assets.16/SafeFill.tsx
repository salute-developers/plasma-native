import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SafeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.95981 2.05107C1.75 2.46285 1.75 3.0019 1.75 4.08V10.5425C1.75 11.6206 1.75 12.1597 1.95981 12.5715C2.14437 12.9337 2.43886 13.2282 2.80107 13.4127C2.90945 13.4679 3.02664 13.5086 3.16016 13.5386V14.4987C3.16016 14.7748 3.38401 14.9987 3.66016 14.9987C3.9363 14.9987 4.16016 14.7748 4.16016 14.4987V13.6199C4.35774 13.6225 4.57929 13.6225 4.83 13.6225H11.17C11.4215 13.6225 11.6437 13.6225 11.8418 13.6199V14.4987C11.8418 14.7748 12.0657 14.9987 12.3418 14.9987C12.6179 14.9987 12.8418 14.7748 12.8418 14.4987V13.5382C12.9745 13.5082 13.0911 13.4677 13.1989 13.4127C13.5611 13.2282 13.8556 12.9337 14.0402 12.5715C14.25 12.1597 14.25 11.6206 14.25 10.5425V4.08C14.25 3.0019 14.25 2.46285 14.0402 2.05107C13.8556 1.68886 13.5611 1.39437 13.1989 1.20981C12.7872 1 12.2481 1 11.17 1H4.83C3.7519 1 3.21285 1 2.80107 1.20981C2.43886 1.39437 2.14437 1.68886 1.95981 2.05107ZM6.24414 7.3113C6.24414 6.32413 7.03534 5.53223 8.00109 5.53223C8.96683 5.53223 9.75803 6.32413 9.75803 7.3113C9.75803 8.29846 8.96683 9.09037 8.00109 9.09037C7.03534 9.09037 6.24414 8.29846 6.24414 7.3113ZM8.00109 4.53223C6.47388 4.53223 5.24414 5.78107 5.24414 7.3113C5.24414 8.84152 6.47388 10.0904 8.00109 10.0904C9.52829 10.0904 10.758 8.84152 10.758 7.3113C10.758 5.78107 9.52829 4.53223 8.00109 4.53223Z"
            fill="currentColor"
        />
    </s.Svg>
);