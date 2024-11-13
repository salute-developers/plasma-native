import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryHoriz80Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 9C21.5523 9 22 9.44772 22 10V14C22 14.5523 21.5523 15 21 15H19.8918C19.8402 15.2884 19.7639 15.5316 19.6512 15.7528C19.3444 16.3549 18.8549 16.8444 18.2528 17.1512C17.5683 17.5 16.6722 17.5 14.88 17.5H7.12C5.32783 17.5 4.43175 17.5 3.74723 17.1512C3.14511 16.8444 2.65557 16.3549 2.34878 15.7528C2 15.0683 2 14.1722 2 12.38V11.62C2 9.82783 2 8.93175 2.34878 8.24723C2.65557 7.64511 3.14511 7.15557 3.74723 6.84878C4.43175 6.5 5.32783 6.5 7.12 6.5H14.88C16.6722 6.5 17.5683 6.5 18.2528 6.84878C18.8549 7.15557 19.3444 7.64511 19.6512 8.24723C19.7639 8.46838 19.8402 8.71161 19.8918 9H21ZM4.5 8C3.94772 8 3.5 8.44772 3.5 9V15C3.5 15.5523 3.94772 16 4.5 16H5C5.27614 16 5.5 15.7761 5.5 15.5V8.5C5.5 8.22386 5.27614 8 5 8H4.5ZM6.1001 8.5C6.1001 8.22386 6.32396 8 6.6001 8H7.6001C7.87624 8 8.1001 8.22386 8.1001 8.5V15.5C8.1001 15.7761 7.87624 16 7.6001 16H6.6001C6.32396 16 6.1001 15.7761 6.1001 15.5V8.5ZM9.2002 8C8.92405 8 8.7002 8.22386 8.7002 8.5V15.5C8.7002 15.7761 8.92405 16 9.2002 16H10.2002C10.4763 16 10.7002 15.7761 10.7002 15.5V8.5C10.7002 8.22386 10.4763 8 10.2002 8H9.2002ZM11.2998 8.5C11.2998 8.22386 11.5237 8 11.7998 8H12.7998C13.0759 8 13.2998 8.22386 13.2998 8.5V15.5C13.2998 15.7761 13.0759 16 12.7998 16H11.7998C11.5237 16 11.2998 15.7761 11.2998 15.5V8.5ZM14.3999 8C14.1238 8 13.8999 8.22386 13.8999 8.5V15.5C13.8999 15.7761 14.1238 16 14.3999 16H15.3999C15.676 16 15.8999 15.7761 15.8999 15.5V8.5C15.8999 8.22386 15.676 8 15.3999 8H14.3999Z"
            fill="currentColor"
        />
    </s.Svg>
);
