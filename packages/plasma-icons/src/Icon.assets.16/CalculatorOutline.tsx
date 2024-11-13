import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CalculatorOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M5.825 8.275C5.825 8.6616 5.5116 8.975 5.125 8.975C4.7384 8.975 4.425 8.6616 4.425 8.275C4.425 7.8884 4.7384 7.575 5.125 7.575C5.5116 7.575 5.825 7.8884 5.825 8.275Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.825 10.725C5.825 11.1116 5.5116 11.425 5.125 11.425C4.7384 11.425 4.425 11.1116 4.425 10.725C4.425 10.3384 4.7384 10.025 5.125 10.025C5.5116 10.025 5.825 10.3384 5.825 10.725Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.125 13.875C5.5116 13.875 5.825 13.5616 5.825 13.175C5.825 12.7884 5.5116 12.475 5.125 12.475C4.7384 12.475 4.425 12.7884 4.425 13.175C4.425 13.5616 4.7384 13.875 5.125 13.875Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.275 8.275C8.275 8.6616 7.9616 8.975 7.575 8.975C7.1884 8.975 6.875 8.6616 6.875 8.275C6.875 7.8884 7.1884 7.575 7.575 7.575C7.9616 7.575 8.275 7.8884 8.275 8.275Z"
            fill="currentColor"
        />
        <s.Path
            d="M7.575 11.425C7.9616 11.425 8.275 11.1116 8.275 10.725C8.275 10.3384 7.9616 10.025 7.575 10.025C7.1884 10.025 6.875 10.3384 6.875 10.725C6.875 11.1116 7.1884 11.425 7.575 11.425Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.275 13.175C8.275 13.5616 7.9616 13.875 7.575 13.875C7.1884 13.875 6.875 13.5616 6.875 13.175C6.875 12.7884 7.1884 12.475 7.575 12.475C7.9616 12.475 8.275 12.7884 8.275 13.175Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.025 8.975C10.4116 8.975 10.725 8.6616 10.725 8.275C10.725 7.8884 10.4116 7.575 10.025 7.575C9.6384 7.575 9.325 7.8884 9.325 8.275C9.325 8.6616 9.6384 8.975 10.025 8.975Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.725 10.725C10.725 11.1116 10.4116 11.425 10.025 11.425C9.6384 11.425 9.325 11.1116 9.325 10.725C9.325 10.3384 9.6384 10.025 10.025 10.025C10.4116 10.025 10.725 10.3384 10.725 10.725Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.025 13.875C10.4116 13.875 10.725 13.5616 10.725 13.175C10.725 12.7884 10.4116 12.475 10.025 12.475C9.6384 12.475 9.325 12.7884 9.325 13.175C9.325 13.5616 9.6384 13.875 10.025 13.875Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.775 4.875C4.44363 4.875 4.175 5.14363 4.175 5.475C4.175 5.80637 4.44363 6.075 4.775 6.075H10.375C10.7064 6.075 10.975 5.80637 10.975 5.475C10.975 5.14363 10.7064 4.875 10.375 4.875H4.775Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.27892 2H9.87107C10.3432 1.99999 10.7278 1.99999 11.0401 2.0255C11.3628 2.05187 11.6521 2.10797 11.9215 2.24524C12.3448 2.46095 12.689 2.80516 12.9048 3.22852C13.042 3.49793 13.0981 3.78715 13.1245 4.10989C13.15 4.42215 13.15 4.80677 13.15 5.27891V12.6711C13.15 13.1432 13.15 13.5278 13.1245 13.8401C13.0981 14.1628 13.042 14.4521 12.9048 14.7215C12.689 15.1448 12.3448 15.489 11.9215 15.7048C11.6521 15.842 11.3628 15.8981 11.0401 15.9245C10.7278 15.95 10.3432 15.95 9.87109 15.95H5.27892C4.80677 15.95 4.42215 15.95 4.10989 15.9245C3.78715 15.8981 3.49793 15.842 3.22852 15.7048C2.80516 15.489 2.46095 15.1448 2.24524 14.7215C2.10797 14.4521 2.05187 14.1628 2.0255 13.8401C1.99999 13.5278 1.99999 13.1432 2 12.6711V5.27892C1.99999 4.80678 1.99999 4.42215 2.0255 4.10989C2.05187 3.78715 2.10797 3.49793 2.24524 3.22852C2.46095 2.80516 2.80516 2.46095 3.22852 2.24524C3.49793 2.10797 3.78715 2.05187 4.10989 2.0255C4.42215 1.99999 4.80678 1.99999 5.27892 2ZM4.19132 3.02218C3.93042 3.0435 3.78745 3.08277 3.68251 3.13624C3.44731 3.25608 3.25608 3.44731 3.13624 3.68251C3.08277 3.78745 3.0435 3.93042 3.02218 4.19132C3.00039 4.45805 3 4.8017 3 5.3V12.65C3 13.1483 3.00039 13.4919 3.02218 13.7587C3.0435 14.0196 3.08277 14.1625 3.13624 14.2675C3.25608 14.5027 3.44731 14.6939 3.68251 14.8138C3.78745 14.8672 3.93042 14.9065 4.19132 14.9278C4.45805 14.9496 4.80171 14.95 5.3 14.95H9.85C10.3483 14.95 10.6919 14.9496 10.9587 14.9278C11.2196 14.9065 11.3625 14.8672 11.4675 14.8138C11.7027 14.6939 11.8939 14.5027 12.0138 14.2675C12.0672 14.1625 12.1065 14.0196 12.1278 13.7587C12.1496 13.4919 12.15 13.1483 12.15 12.65V5.3C12.15 4.8017 12.1496 4.45805 12.1278 4.19132C12.1065 3.93042 12.0672 3.78745 12.0138 3.68251C11.8939 3.44731 11.7027 3.25608 11.4675 3.13624C11.3625 3.08277 11.2196 3.0435 10.9587 3.02218C10.6919 3.00039 10.3483 3 9.85 3H5.3C4.8017 3 4.45805 3.00039 4.19132 3.02218Z"
            fill="currentColor"
        />
    </s.Svg>
);
