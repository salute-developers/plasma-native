import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header5: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6582 12.705V17.25H12.0646V6.75H10.6582V10.9243H6.89486V6.75H5.5V17.25H6.89486V12.705H10.6582ZM13.25 14.4174C13.8183 15.0699 14.7698 15.5 15.8535 15.4852C17.0826 15.4852 17.6244 14.7436 17.6244 13.75C17.6244 12.6377 16.8315 12.0742 15.4967 12.0742C14.6905 12.0742 13.9901 12.2373 13.5011 12.4301L13.8183 6.75H18.7742V8.45551H15.1531L15.0209 10.6801C15.2985 10.6059 15.7874 10.5466 16.1311 10.5466C18.1795 10.5466 19.25 11.8665 19.25 13.75C19.25 16.0191 17.8227 17.25 15.9064 17.25C14.5848 17.25 13.6465 16.7013 13.25 16.3008V14.4174Z"
            fill="currentColor"
        />
    </s.Svg>
);