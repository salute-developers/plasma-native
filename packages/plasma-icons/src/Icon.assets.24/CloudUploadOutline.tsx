import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CloudUploadOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M2 13.25C2 10.5662 3.83808 8.31293 6.32407 7.67837C7.19855 4.96423 9.74406 3 12.75 3C16.4779 3 19.5 6.02208 19.5 9.75C19.5 9.98629 19.4878 10.2199 19.464 10.4503C20.9647 11.1795 22 12.718 22 14.5C22 16.9853 19.9853 19 17.5 19H15C14.5858 19 14.25 18.6642 14.25 18.25C14.25 17.8358 14.5858 17.5 15 17.5H17.5C19.1569 17.5 20.5 16.1569 20.5 14.5C20.5 13.1608 19.622 12.0247 18.4083 11.6397C18.0441 11.5242 17.825 11.1535 17.8994 10.7788C17.9653 10.4467 18 10.1028 18 9.75C18 6.85051 15.6495 4.5 12.75 4.5C10.6542 4.5 8.84396 5.7286 8.00239 7.50545C9.51024 7.57066 10.8684 8.21725 11.8563 9.22497C12.1463 9.52076 12.1415 9.99561 11.8457 10.2856C11.55 10.5755 11.0751 10.5708 10.7851 10.275C10.0129 9.48731 8.93905 9 7.75 9C7.50937 9 7.27397 9.01992 7.04519 9.05805C5.03354 9.39335 3.5 11.1433 3.5 13.25C3.5 15.5972 5.40279 17.5 7.75 17.5H9C9.41421 17.5 9.75 17.8358 9.75 18.25C9.75 18.6642 9.41421 19 9 19H7.75C4.57436 19 2 16.4256 2 13.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M12.5303 11.9697C12.2374 11.6768 11.7626 11.6768 11.4697 11.9697L8.46967 14.9697C8.17678 15.2626 8.17678 15.7374 8.46967 16.0303C8.76256 16.3232 9.23744 16.3232 9.53033 16.0303L11.25 14.3107V21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21V14.3107L14.4697 16.0303C14.7626 16.3232 15.2374 16.3232 15.5303 16.0303C15.8232 15.7374 15.8232 15.2626 15.5303 14.9697L12.5303 11.9697Z"
            fill="currentColor"
        />
    </s.Svg>
);
