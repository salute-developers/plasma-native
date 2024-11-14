import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageGoToFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.94897 11.7631C3.94897 7.18603 7.65941 3.47559 12.2365 3.47559C16.6331 3.47559 20.2301 6.89924 20.5068 11.226H12.9845L14.6792 9.53131C14.9721 9.23841 14.9721 8.76354 14.6792 8.47065C14.3863 8.17775 13.9114 8.17775 13.6185 8.47065L10.6435 11.4456C10.5028 11.5863 10.4238 11.7771 10.4238 11.976C10.4238 12.1749 10.5028 12.3657 10.6435 12.5063L13.6185 15.4813C13.9114 15.7742 14.3863 15.7742 14.6792 15.4813C14.9721 15.1884 14.9721 14.7135 14.6792 14.4206L12.9845 12.726H20.4686C19.9915 16.8494 16.4878 20.0506 12.2365 20.0506C11.2517 20.0506 10.3058 19.8786 9.42793 19.5624C8.90098 19.3726 8.38339 19.318 7.92784 19.4455L5.42471 20.1464C4.4673 20.4145 3.58508 19.5323 3.85316 18.5748L4.55403 16.0717C4.68159 15.6162 4.62693 15.0986 4.43715 14.5716C4.12099 13.6938 3.94897 12.7478 3.94897 11.7631Z"
            fill="currentColor"
        />
    </s.Svg>
);