import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageRequestOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M5.65906 9.65374C6.55029 6.87342 9.15684 4.8623 12.2312 4.8623C16.0419 4.8623 19.1312 7.95154 19.1312 11.7623C19.1312 15.5731 16.0419 18.6623 12.2312 18.6623C11.409 18.6623 10.622 18.5188 9.89277 18.2562C9.19031 18.0032 8.36596 17.8797 7.54841 18.1086L5.23788 18.7556L5.93376 16.2703C6.1308 15.5666 6.02809 14.8568 5.7945 14.2539C5.64488 13.8676 5.21047 13.6758 4.82422 13.8254C4.43798 13.9751 4.24616 14.4095 4.39579 14.7957C4.54452 15.1797 4.57764 15.5504 4.48931 15.8659L3.73951 18.5437C3.44778 19.5856 4.40784 20.5457 5.44973 20.2539L7.95286 19.5531C8.37906 19.4337 8.87177 19.4828 9.38449 19.6675C10.2744 19.988 11.2333 20.1623 12.2312 20.1623C16.8703 20.1623 20.6312 16.4015 20.6312 11.7623C20.6312 7.12311 16.8703 3.3623 12.2312 3.3623C8.48598 3.3623 5.3151 5.81276 4.23065 9.19587C4.10421 9.59031 4.32148 10.0126 4.71592 10.139C5.11036 10.2654 5.53262 10.0482 5.65906 9.65374Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.36332 9.53013C9.07043 9.23724 9.07043 8.76237 9.36332 8.46947C9.65622 8.17658 10.1311 8.17658 10.424 8.46947L13.399 11.4445C13.5396 11.5851 13.6187 11.7759 13.6187 11.9748C13.6187 12.1737 13.5396 12.3645 13.399 12.5051L10.424 15.4801C10.1311 15.773 9.65622 15.773 9.36332 15.4801C9.07043 15.1872 9.07043 14.7124 9.36332 14.4195L11.058 12.7248H4.36865C3.95444 12.7248 3.61865 12.389 3.61865 11.9748C3.61865 11.5606 3.95444 11.2248 4.36865 11.2248H11.058L9.36332 9.53013Z"
            fill="currentColor"
        />
    </s.Svg>
);
