import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StarRecommendFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8432 5.96677C17.3035 4.67774 15.4772 4.67774 14.9375 5.96677L12.3855 12.0625C12.1578 12.6064 11.6455 12.9775 11.0577 13.0243L4.45218 13.5505C3.0528 13.6619 2.4874 15.4101 3.55648 16.3199L8.57398 20.5899C9.02579 20.9744 9.22321 21.5802 9.08469 22.1571L7.54911 28.5526C7.22228 29.9138 8.70087 30.993 9.89765 30.2668L15.5733 26.8228C15.943 26.5984 16.3819 26.5393 16.7881 26.6453L17.5388 24.35L14.5309 22.1789C12.2326 20.52 13.4138 16.9085 16.2546 16.9085H19.9726L21.1215 13.3955C21.1749 13.2323 21.2391 13.079 21.313 12.9357C20.9042 12.788 20.5678 12.4749 20.3952 12.0625L17.8432 5.96677ZM25.2704 13.8565C24.8427 12.5488 22.9805 12.5488 22.5528 13.8565L21.0663 18.4018H16.2557C14.8716 18.4018 14.2962 20.1613 15.4159 20.9694L19.3078 23.7786L17.8212 28.3239C17.3935 29.6316 18.9 30.719 20.0197 29.9108L23.9116 27.1017L27.8035 29.9108C28.9232 30.719 30.4297 29.6316 30.002 28.3239L28.5154 23.7786L32.4073 20.9694C33.527 20.1612 32.9516 18.4018 31.5676 18.4018H26.7569L25.2704 13.8565Z"
            fill="currentColor"
        />
    </s.Svg>
);