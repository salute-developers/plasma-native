import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PictureFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.9221 6H10.0779C9.06781 5.99999 8.24174 5.99998 7.5704 6.05483C6.87551 6.1116 6.24791 6.23271 5.6618 6.53134C4.74451 6.99873 3.99873 7.74451 3.53134 8.6618C3.23271 9.24791 3.1116 9.87551 3.05483 10.5704C2.99998 11.2417 2.99999 12.0678 3 13.0779V22.9221C2.99999 23.9322 2.99998 24.7583 3.05483 25.4296C3.1116 26.1245 3.23271 26.7521 3.53134 27.3382C3.65913 27.589 3.80775 27.827 3.975 28.05C4.41938 28.6425 4.99531 29.1291 5.6618 29.4687C6.24791 29.7673 6.87551 29.8884 7.5704 29.9452C8.24168 30 9.06764 30 10.0776 30H25.9222C26.9321 30 27.7583 30 28.4296 29.9452C29.1245 29.8884 29.7521 29.7673 30.3382 29.4687C31.2555 29.0013 32.0013 28.2555 32.4687 27.3382C32.8964 26.4986 32.9699 25.5421 32.9917 24.3881C33 23.9467 33 23.446 33 22.8836V13.0778C33 12.0678 33 11.2417 32.9452 10.5704C32.8884 9.87551 32.7673 9.24791 32.4687 8.6618C32.0013 7.74451 31.2555 6.99873 30.3382 6.53134C29.7521 6.23271 29.1245 6.1116 28.4296 6.05483C27.7583 5.99998 26.9322 5.99999 25.9221 6ZM25.3258 19.4168L30.7279 24.8189C30.6923 25.6478 30.6072 26.0355 30.4639 26.3167C30.2122 26.8107 29.8106 27.2122 29.3167 27.4639C29.1007 27.574 28.8021 27.6572 28.2464 27.7026C27.6775 27.7491 26.9437 27.75 25.875 27.75H14.341L22.6742 19.4168C23.4064 18.6846 24.5936 18.6846 25.3258 19.4168ZM14.534 24.375L11.159 27.75H10.125C9.05634 27.75 8.3225 27.7491 7.75362 27.7026C7.19787 27.6572 6.89933 27.574 6.68328 27.4639C6.6163 27.4298 6.55103 27.3929 6.4876 27.3534L10.6742 23.1668C11.4064 22.4346 12.5936 22.4346 13.3258 23.1668L14.534 24.375ZM11.25 16.5C12.4926 16.5 13.5 15.4926 13.5 14.25C13.5 13.0074 12.4926 12 11.25 12C10.0074 12 9 13.0074 9 14.25C9 15.4926 10.0074 16.5 11.25 16.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
