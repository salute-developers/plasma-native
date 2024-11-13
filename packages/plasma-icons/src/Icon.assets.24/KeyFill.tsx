import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const KeyFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 8.75C21 11.9256 18.4256 14.5 15.25 14.5C14.0666 14.5 12.9668 14.1425 12.0525 13.5297C11.8777 13.4125 11.6306 13.5324 11.6306 13.7428L11.6306 16.0001C11.6306 16.1382 11.5186 16.2501 11.3806 16.2501H9.24984C9.11177 16.2501 8.99984 16.362 8.99984 16.5001L8.99984 18.2502C8.99984 18.3883 8.8879 18.5002 8.74983 18.5002L6.30831 18.5001C6.17024 18.5001 6.0583 18.612 6.0583 18.7501L6.0583 21.1924C6.0583 21.3305 5.94637 21.4424 5.8083 21.4424H3.25C3.11193 21.4424 2.99999 21.3305 3 21.1924L3.00016 16.9356C3.00016 16.8693 3.0265 16.8057 3.07338 16.7589L9.57347 10.2588C9.63567 10.1966 9.66019 10.1063 9.64084 10.0205C9.54865 9.6118 9.5 9.18658 9.5 8.75C9.5 5.57436 12.0744 3 15.25 3C18.4256 3 21 5.57436 21 8.75ZM16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z"
            fill="currentColor"
        />
    </s.Svg>
);
