import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MusicMicFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5009 5.29277C14.5009 7.38746 12.8034 9.08554 10.7094 9.08554C10.4836 9.08554 10.2623 9.06578 10.0473 9.0279L4.72899 13.5643C4.39172 13.852 3.89006 13.8321 3.57664 13.5186L3.38445 13.3263L2.35341 14.3577C2.15818 14.553 1.84165 14.553 1.64642 14.3577C1.45119 14.1624 1.45119 13.8458 1.64642 13.6505L2.67746 12.6191L2.48416 12.4258C2.17074 12.1122 2.15083 11.6104 2.43842 11.273L6.97486 5.951C6.93747 5.73721 6.91797 5.51727 6.91797 5.29277C6.91797 3.19808 8.61547 1.5 10.7094 1.5C12.8034 1.5 14.5009 3.19808 14.5009 5.29277ZM4.18567 12.7134L8.94724 8.65185C8.2662 8.29359 7.70743 7.73415 7.3499 7.05251L3.2891 11.8165L4.18567 12.7134Z"
            fill="currentColor"
        />
    </s.Svg>
);
