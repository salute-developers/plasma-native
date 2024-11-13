import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NewsFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3279 4.5H23.6721C24.6822 4.49999 25.5083 4.49998 26.1796 4.55483C26.8745 4.6116 27.5021 4.73271 28.0882 5.03134C29.0055 5.49873 29.7513 6.24451 30.2187 7.1618C30.5173 7.74791 30.6384 8.37551 30.6952 9.0704C30.75 9.74174 30.75 10.5678 30.75 11.5778V24.4222C30.75 25.4322 30.75 26.2583 30.6952 26.9296C30.6384 27.6245 30.5173 28.2521 30.2187 28.8382C29.7513 29.7555 29.0055 30.5013 28.0882 30.9687C27.5021 31.2673 26.8745 31.3884 26.1796 31.4452C25.5083 31.5 24.6822 31.5 23.6722 31.5H12.3278C11.3178 31.5 10.4917 31.5 9.8204 31.4452C9.12551 31.3884 8.49791 31.2673 7.9118 30.9687C6.99451 30.5013 6.24873 29.7555 5.78134 28.8382C5.48271 28.2521 5.3616 27.6245 5.30483 26.9296C5.24998 26.2583 5.24999 25.4322 5.25 24.4221V11.5779C5.24999 10.5678 5.24998 9.74174 5.30483 9.0704C5.3616 8.37551 5.48271 7.74791 5.78134 7.1618C6.24873 6.24451 6.99451 5.49873 7.9118 5.03134C8.49791 4.73271 9.12551 4.6116 9.8204 4.55483C10.4917 4.49998 11.3178 4.49999 12.3279 4.5ZM27.75 24.9C27.75 26.1601 27.75 26.7902 27.5048 27.2715C27.289 27.6948 26.9448 28.039 26.5215 28.2548C26.0402 28.5 25.4101 28.5 24.15 28.5H11.85C10.5899 28.5 9.95982 28.5 9.47852 28.2548C9.05516 28.039 8.71095 27.6948 8.49524 27.2715C8.25 26.7902 8.25 26.1601 8.25 24.9V15.6C8.25 14.3399 8.25 13.7098 8.49524 13.2285C8.71095 12.8052 9.05516 12.461 9.47852 12.2452C9.95982 12 10.5899 12 11.85 12H24.15C25.4101 12 26.0402 12 26.5215 12.2452C26.9448 12.461 27.289 12.8052 27.5048 13.2285C27.75 13.7098 27.75 14.3399 27.75 15.6V24.9ZM9.375 7C8.68464 7 8.125 7.55964 8.125 8.25C8.125 8.94036 8.68464 9.5 9.375 9.5H17.625C18.3154 9.5 18.875 8.94036 18.875 8.25C18.875 7.55964 18.3154 7 17.625 7H9.375Z"
            fill="currentColor"
        />
    </s.Svg>
);
