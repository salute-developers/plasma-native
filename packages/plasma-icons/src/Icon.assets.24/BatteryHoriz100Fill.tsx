import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryHoriz100Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10C22 9.44772 21.5523 9 21 9H19.8918C19.8402 8.71161 19.7639 8.46838 19.6512 8.24723C19.3444 7.64511 18.8549 7.15557 18.2528 6.84878C17.5683 6.5 16.6722 6.5 14.88 6.5H7.12C5.32783 6.5 4.43175 6.5 3.74723 6.84878C3.14511 7.15557 2.65557 7.64511 2.34878 8.24723C2 8.93175 2 9.82783 2 11.62V12.38C2 14.1722 2 15.0683 2.34878 15.7528C2.65557 16.3549 3.14511 16.8444 3.74723 17.1512C4.43175 17.5 5.32783 17.5 7.12 17.5H14.88C16.6722 17.5 17.5683 17.5 18.2528 17.1512C18.8549 16.8444 19.3444 16.3549 19.6512 15.7528C19.7639 15.5316 19.8402 15.2884 19.8918 15H21C21.5523 15 22 14.5523 22 14V10ZM3.5 9C3.5 8.44772 3.94772 8 4.5 8H5C5.27614 8 5.5 8.22386 5.5 8.5V15.5C5.5 15.7761 5.27614 16 5 16H4.5C3.94772 16 3.5 15.5523 3.5 15V9ZM6.6001 8C6.32396 8 6.1001 8.22386 6.1001 8.5V15.5C6.1001 15.7761 6.32396 16 6.6001 16H7.6001C7.87624 16 8.1001 15.7761 8.1001 15.5V8.5C8.1001 8.22386 7.87624 8 7.6001 8H6.6001ZM8.7002 8.5C8.7002 8.22386 8.92405 8 9.2002 8H10.2002C10.4763 8 10.7002 8.22386 10.7002 8.5V15.5C10.7002 15.7761 10.4763 16 10.2002 16H9.2002C8.92405 16 8.7002 15.7761 8.7002 15.5V8.5ZM11.7998 8C11.5237 8 11.2998 8.22386 11.2998 8.5V15.5C11.2998 15.7761 11.5237 16 11.7998 16H12.7998C13.0759 16 13.2998 15.7761 13.2998 15.5V8.5C13.2998 8.22386 13.0759 8 12.7998 8H11.7998ZM13.8999 8.5C13.8999 8.22386 14.1238 8 14.3999 8H15.3999C15.676 8 15.8999 8.22386 15.8999 8.5V15.5C15.8999 15.7761 15.676 16 15.3999 16H14.3999C14.1238 16 13.8999 15.7761 13.8999 15.5V8.5ZM17 8C16.7239 8 16.5 8.22386 16.5 8.5V15.5C16.5 15.7761 16.7239 16 17 16H17.5C18.0523 16 18.5 15.5523 18.5 15V9C18.5 8.44772 18.0523 8 17.5 8H17Z"
            fill="currentColor"
        />
    </s.Svg>
);
