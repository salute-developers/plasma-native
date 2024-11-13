import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BankCardDoneFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.00008 8.5C2.00123 7.01747 2.02007 6.24038 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.27976 4 5.11984 4 6.8 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C21.9799 6.24038 21.9988 7.01747 21.9999 8.5H2.00008ZM17.5 11H22V12.8096C20.8321 11.6888 19.2465 11 17.5 11ZM11.4982 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V11H17.5C13.9101 11 11 13.9101 11 17.5C11 18.3859 11.1772 19.2304 11.4982 20Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM20.8536 16.3536C21.0488 16.1583 21.0488 15.8417 20.8536 15.6464C20.6583 15.4512 20.3417 15.4512 20.1464 15.6464L16.5 19.2929L14.8536 17.6464C14.6583 17.4512 14.3417 17.4512 14.1464 17.6464C13.9512 17.8417 13.9512 18.1583 14.1464 18.3536L16.1464 20.3536C16.3417 20.5488 16.6583 20.5488 16.8536 20.3536L20.8536 16.3536Z"
            fill="currentColor"
        />
    </s.Svg>
);
