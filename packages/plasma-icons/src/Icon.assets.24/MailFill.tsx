import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MailFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.4821 4H7.5179C6.70507 3.99999 6.04944 3.99999 5.51853 4.04336C4.9719 4.08803 4.49175 4.18239 4.04754 4.40873C3.34193 4.76825 2.76825 5.34193 2.40873 6.04754C2.18239 6.49175 2.08803 6.9719 2.04336 7.51853C1.99999 8.04944 1.99999 8.70505 2 9.51789V14.4821C1.99999 15.2949 1.99999 15.9506 2.04336 16.4815C2.08803 17.0281 2.18239 17.5082 2.40873 17.9525C2.76825 18.6581 3.34193 19.2317 4.04754 19.5913C4.49175 19.8176 4.9719 19.912 5.51853 19.9566C6.04944 20 6.70505 20 7.51788 20H16.4821C17.295 20 17.9506 20 18.4815 19.9566C19.0281 19.912 19.5082 19.8176 19.9525 19.5913C20.6581 19.2317 21.2317 18.6581 21.5913 17.9525C21.8176 17.5082 21.912 17.0281 21.9566 16.4815C22 15.9506 22 15.295 22 14.4821V9.51788C22 8.70505 22 8.04944 21.9566 7.51853C21.912 6.9719 21.8176 6.49175 21.5913 6.04754C21.2317 5.34193 20.6581 4.76825 19.9525 4.40873C19.5082 4.18239 19.0281 4.08803 18.4815 4.04336C17.9506 3.99999 17.2949 3.99999 16.4821 4ZM5.89307 7.86126C5.5403 7.64417 5.07834 7.75416 4.86126 8.10693C4.64417 8.4597 4.75416 8.92166 5.10693 9.13874L10.0346 12.1712C11.2399 12.9129 12.7601 12.9129 13.9654 12.1712L18.8931 9.13874C19.2458 8.92166 19.3558 8.4597 19.1387 8.10693C18.9217 7.75416 18.4597 7.64417 18.1069 7.86126L13.1792 10.8937C12.4561 11.3387 11.5439 11.3387 10.8208 10.8937L5.89307 7.86126Z"
            fill="currentColor"
        />
    </s.Svg>
);
