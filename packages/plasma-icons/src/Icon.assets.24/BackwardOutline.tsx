import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BackwardOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.49994 4.81074C9.49999 4.84871 9.5 4.88884 9.5 4.9313V7.37199C9.5 7.85069 9.88229 8.24177 10.3609 8.25264C15.3902 8.36695 19.5167 12.0463 20.3474 16.8429C19.6489 15.9963 18.8822 15.2097 17.9109 14.5641C16.3099 13.4999 14.2215 12.8562 11.0752 12.762L11.0548 12.7614C10.9362 12.7578 10.8045 12.7538 10.6893 12.7603C10.5559 12.7678 10.3847 12.791 10.206 12.8774C9.96554 12.9936 9.76475 13.1885 9.64138 13.4253C9.54876 13.6032 9.52097 13.7758 9.50974 13.9084C9.49993 14.0243 9.49996 14.1577 9.5 14.2794L9.5 16.0686C9.5 16.111 9.49999 16.1512 9.49994 16.1891C9.47305 16.1623 9.44467 16.1339 9.41464 16.1039L3.81066 10.4999L9.41464 4.89595C9.44467 4.86592 9.47305 4.83756 9.49994 4.81074ZM10.7005 3.39523C10.4406 3.09097 10.0508 2.9295 9.65193 2.96089C9.30746 2.988 9.0505 3.18732 8.90778 3.30681C8.75184 3.43736 8.57111 3.61813 8.37576 3.81351L2.21967 9.9696C1.92678 10.2625 1.92678 10.7374 2.21967 11.0303L8.37576 17.1863C8.57111 17.3817 8.75184 17.5625 8.90778 17.693C9.0505 17.8125 9.30746 18.0119 9.65193 18.039C10.0508 18.0704 10.4406 17.9089 10.7005 17.6046C10.9249 17.3419 10.9657 17.0193 10.9821 16.8338C11 16.6313 11 16.3756 11 16.0994L11 14.2999C11 14.2861 11 14.273 11 14.2604C11.0098 14.2607 11.0198 14.261 11.0303 14.2613C13.9873 14.3498 15.7784 14.9477 17.0806 15.8133C18.3915 16.6846 19.2756 17.8653 20.3741 19.3322L20.4098 19.3799C20.9186 20.0593 22 19.7002 22 18.8505V18.6248C22 12.3747 17.1657 7.23261 11 6.78198L11 4.9005C11 4.62422 11 4.3686 10.9821 4.16603C10.9657 3.98061 10.9249 3.65797 10.7005 3.39523Z"
            fill="currentColor"
        />
    </s.Svg>
);
