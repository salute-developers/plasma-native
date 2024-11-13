import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlaneFlyOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.51165 4.02735C8.28377 2.98562 9.0771 2 10.1435 2C11.1018 2 11.9818 2.529 12.4314 3.37531L15.6424 9.41958L19.2282 9.31092C20.7453 9.26495 22 10.4823 22 12C22 13.5177 20.7453 14.735 19.2282 14.6891L15.6424 14.5804L12.4314 20.6247C11.9818 21.471 11.1018 22 10.1435 22C9.0771 22 8.28377 21.0144 8.51165 19.9726L9.73039 14.4013L7.23502 14.3256L6.61613 14.9445C6.1004 15.4603 5.40093 15.75 4.67158 15.75H3.40452C2.66114 15.75 2.17764 14.9677 2.51009 14.3028L3.66149 12L2.51009 9.69721C2.17764 9.03231 2.66114 8.25 3.40452 8.25H4.67158C5.40093 8.25 6.1004 8.53973 6.61613 9.05546L7.23502 9.67435L9.73039 9.59874L8.51165 4.02735ZM10.1435 3.5C10.0347 3.5 9.95376 3.60054 9.977 3.70681L11.3888 10.1608C11.4365 10.3787 11.3847 10.6065 11.2474 10.7824C11.1102 10.9583 10.9018 11.0639 10.6788 11.0707L6.95655 11.1835C6.74985 11.1897 6.54973 11.1104 6.4035 10.9642L5.55547 10.1161C5.32105 9.8817 5.0031 9.75 4.67158 9.75H4.21354L5.17083 11.6646C5.2764 11.8757 5.2764 12.1243 5.17083 12.3354L4.21354 14.25H4.67158C5.0031 14.25 5.32105 14.1183 5.55547 13.8839L6.4035 13.0358C6.54973 12.8896 6.74985 12.8103 6.95655 12.8165L10.6788 12.9293C10.9018 12.9361 11.1102 13.0417 11.2474 13.2176C11.3847 13.3935 11.4365 13.6213 11.3888 13.8392L9.977 20.2932C9.95376 20.3995 10.0347 20.5 10.1435 20.5C10.5469 20.5 10.9175 20.2773 11.1068 19.921L14.5366 13.4648C14.6706 13.2126 14.9362 13.0583 15.2217 13.067L19.2736 13.1898C19.9449 13.2101 20.5 12.6715 20.5 12C20.5 11.3285 19.9449 10.7899 19.2736 10.8102L15.2217 10.933C14.9362 10.9417 14.6706 10.7874 14.5366 10.5352L11.1068 4.07904C10.9175 3.72272 10.5469 3.5 10.1435 3.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
