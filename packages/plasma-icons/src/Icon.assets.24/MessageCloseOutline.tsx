import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageCloseOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M9.79253 8.68276C9.49964 8.38986 9.02476 8.38986 8.73187 8.68276C8.43898 8.97565 8.43898 9.45052 8.73187 9.74342L10.964 11.9756L8.73187 14.2078C8.43898 14.5007 8.43898 14.9755 8.73187 15.2684C9.02476 15.5613 9.49964 15.5613 9.79253 15.2684L12.0247 13.0362L14.2569 15.2684C14.5498 15.5613 15.0246 15.5613 15.3175 15.2684C15.6104 14.9755 15.6104 14.5007 15.3175 14.2078L13.0854 11.9756L15.3175 9.74342C15.6104 9.45052 15.6104 8.97565 15.3175 8.68276C15.0246 8.38986 14.5498 8.38986 14.2569 8.68276L12.0247 10.9149L9.79253 8.68276Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2372 3.47559C7.66014 3.47559 3.9497 7.18603 3.9497 11.7631C3.9497 12.7478 4.12172 13.6938 4.43788 14.5716C4.62767 15.0986 4.68232 15.6162 4.55476 16.0717L3.85389 18.5748C3.58581 19.5323 4.46803 20.4145 5.42545 20.1464L7.92857 19.4455C8.38412 19.318 8.90171 19.3726 9.42866 19.5624C10.3065 19.8786 11.2525 20.0506 12.2372 20.0506C16.8143 20.0506 20.5247 16.3401 20.5247 11.7631C20.5247 7.18603 16.8143 3.47559 12.2372 3.47559ZM5.2247 11.7631C5.2247 7.89019 8.3643 4.75059 12.2372 4.75059C16.1101 4.75059 19.2497 7.89019 19.2497 11.7631C19.2497 15.636 16.1101 18.7756 12.2372 18.7756C11.4019 18.7756 10.602 18.6298 9.86069 18.3628C9.17247 18.115 8.37299 17.997 7.58479 18.2177L5.08167 18.9186L5.78254 16.4155C6.00324 15.6273 5.88532 14.8278 5.63746 14.1396C5.37048 13.3983 5.2247 12.5984 5.2247 11.7631Z"
            fill="currentColor"
        />
    </s.Svg>
);
