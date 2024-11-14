import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BikeOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M9.925 4.47059C10.6015 4.47059 11.15 3.91753 11.15 3.23529C11.15 2.55306 10.6015 2 9.925 2C9.24845 2 8.7 2.55306 8.7 3.23529C8.7 3.91753 9.24845 4.47059 9.925 4.47059Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.57276 6.02218C9.27751 6.7471 10.2981 7.47059 11.675 7.47059C11.9649 7.47059 12.2 7.23356 12.2 6.94118C12.2 6.64879 11.9649 6.41176 11.675 6.41176C10.4981 6.41176 9.62723 5.67477 8.99338 4.91408C8.96273 4.8773 8.93277 4.84062 8.90348 4.80414C8.45209 4.24189 7.5893 4.13604 7.04447 4.68545L5.71328 6.02782C5.20871 6.53664 5.24048 7.37092 5.78227 7.83921L7.41389 9.2495C7.45268 9.28302 7.475 9.33197 7.475 9.38348V11.8824C7.475 12.1747 7.71005 12.4118 8 12.4118C8.28995 12.4118 8.525 12.1747 8.525 11.8824V9.38348C8.525 9.02287 8.36874 8.68026 8.09722 8.44558L7.05925 7.54841L8.57276 6.02218Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.8 8.35294C2.2536 8.35294 1 9.61708 1 11.1765C1 12.7359 2.2536 14 3.8 14C5.3464 14 6.6 12.7359 6.6 11.1765C6.6 9.61708 5.3464 8.35294 3.8 8.35294ZM2.05 11.1765C2.05 10.2019 2.8335 9.41177 3.8 9.41177C4.7665 9.41177 5.55 10.2019 5.55 11.1765C5.55 12.1511 4.7665 12.9412 3.8 12.9412C2.8335 12.9412 2.05 12.1511 2.05 11.1765Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2 8.35294C10.6536 8.35294 9.4 9.61708 9.4 11.1765C9.4 12.7359 10.6536 14 12.2 14C13.7464 14 15 12.7359 15 11.1765C15 9.61708 13.7464 8.35294 12.2 8.35294ZM10.45 11.1765C10.45 10.2019 11.2335 9.41177 12.2 9.41177C13.1665 9.41177 13.95 10.2019 13.95 11.1765C13.95 12.1511 13.1665 12.9412 12.2 12.9412C11.2335 12.9412 10.45 12.1511 10.45 11.1765Z"
            fill="currentColor"
        />
    </s.Svg>
);