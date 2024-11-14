import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AddOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M5.22588 19.4821C5.43838 19.4994 5.71758 19.5 6.15 19.5L16.25 19.5C16.6642 19.5 17 19.8358 17 20.25C17 20.6642 16.6642 21 16.25 21L6.12106 21C5.72572 21 5.38464 21 5.10373 20.9771C4.80722 20.9528 4.51231 20.8994 4.22852 20.7548C3.80516 20.539 3.46095 20.1948 3.24524 19.7715C3.10064 19.4877 3.04715 19.1928 3.02293 18.8963C2.99998 18.6153 2.99999 18.2743 3 17.8789L3 7.75C3 7.33579 3.33579 7 3.75 7C4.16421 7 4.5 7.33579 4.5 7.75L4.5 17.85C4.5 18.2824 4.50058 18.5616 4.51795 18.7741C4.53459 18.9779 4.56285 19.0534 4.58175 19.0905C4.65365 19.2316 4.76839 19.3463 4.90951 19.4183C4.94659 19.4371 5.02213 19.4654 5.22588 19.4821Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.25 6.75C14.25 6.33579 13.9142 6 13.5 6C13.0858 6 12.75 6.33579 12.75 6.75L12.75 9.75L9.75 9.75C9.33579 9.75 9 10.0858 9 10.5C9 10.9142 9.33579 11.25 9.75 11.25H12.7599L12.8001 14.26C12.8056 14.6742 13.1458 15.0055 13.56 14.9999C13.9742 14.9944 14.3055 14.6542 14.2999 14.24L14.2601 11.25L17.25 11.25C17.6642 11.25 18 10.9142 18 10.5C18 10.0858 17.6642 9.75 17.25 9.75L14.25 9.75V6.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.8963 17.9771C18.6153 18 18.2743 18 17.8789 18L9.12108 18C8.72572 18 8.38466 18 8.10373 17.9771C7.80722 17.9528 7.51231 17.8994 7.22852 17.7548C6.80516 17.539 6.46095 17.1948 6.24524 16.7715C6.10064 16.4877 6.04715 16.1928 6.02293 15.8963C5.99997 15.6153 5.99999 15.2743 6 14.8789L6 6.12108C5.99999 5.72572 5.99998 5.38465 6.02293 5.10373C6.04715 4.80722 6.10064 4.51231 6.24524 4.22852C6.46095 3.80516 6.80516 3.46095 7.22852 3.24524C7.51231 3.10064 7.80722 3.04715 8.10373 3.02293C8.38466 2.99998 8.72572 2.99999 9.12108 3L17.8789 3C18.2743 2.99999 18.6153 2.99998 18.8963 3.02293C19.1928 3.04715 19.4877 3.10064 19.7715 3.24524C20.1948 3.46095 20.5391 3.80516 20.7548 4.22852C20.8994 4.51231 20.9528 4.80722 20.9771 5.10373C21 5.38465 21 5.72573 21 6.12107L21 14.8789C21 15.2743 21 15.6154 20.9771 15.8963C20.9528 16.1928 20.8994 16.4877 20.7548 16.7715C20.539 17.1948 20.1948 17.5391 19.7715 17.7548C19.4877 17.8994 19.1928 17.9528 18.8963 17.9771ZM18.7741 16.4821C18.9779 16.4654 19.0534 16.4372 19.0905 16.4183C19.2316 16.3464 19.3463 16.2316 19.4183 16.0905C19.4371 16.0534 19.4654 15.9779 19.4821 15.7741C19.4994 15.5616 19.5 15.2824 19.5 14.85L19.5 6.15C19.5 5.71759 19.4994 5.43838 19.4821 5.22588C19.4654 5.02213 19.4372 4.94659 19.4183 4.90951C19.3464 4.76839 19.2316 4.65365 19.0905 4.58175C19.0534 4.56285 18.9779 4.5346 18.7741 4.51795C18.5616 4.50059 18.2824 4.5 17.85 4.5L9.15 4.5C8.71759 4.5 8.43838 4.50058 8.22588 4.51795C8.02213 4.53459 7.94659 4.56285 7.90951 4.58175C7.76839 4.65365 7.65365 4.76839 7.58175 4.90951C7.56285 4.94659 7.53459 5.02213 7.51795 5.22588C7.50059 5.43838 7.5 5.71758 7.5 6.15L7.5 14.85C7.5 15.2824 7.50058 15.5616 7.51795 15.7741C7.53459 15.9779 7.56285 16.0534 7.58175 16.0905C7.65365 16.2316 7.76839 16.3464 7.90951 16.4183C7.94659 16.4372 8.02213 16.4654 8.22588 16.4821C8.43838 16.4994 8.71759 16.5 9.15 16.5H17.85C18.2824 16.5 18.5616 16.4994 18.7741 16.4821Z"
            fill="currentColor"
        />
    </s.Svg>
);