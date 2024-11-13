import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SleepOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2011 3.45789L17.2285 3.47472C20.0901 5.23248 22.0013 8.39339 22.0013 12.0013C22.0013 17.5242 17.5242 22.0013 12.0013 22.0013C8.39362 22.0013 5.23288 20.0904 3.47505 17.229L3.45822 17.2016C3.30418 16.9509 3.16249 16.7203 3.06735 16.5283C2.98115 16.3544 2.83981 16.0405 2.90782 15.683C2.98651 15.2693 3.26339 14.9272 3.65167 14.7641C3.85176 14.6801 4.04449 14.6785 4.17801 14.6897C4.31535 14.7012 4.45204 14.7322 4.57527 14.7657C4.8118 14.8301 5.1139 14.9374 5.46274 15.0612L5.49125 15.0713C6.27501 15.3496 7.11953 15.5014 8.00113 15.5014C12.1433 15.5014 15.5011 12.1435 15.5011 8.00139C15.5011 7.11962 15.3493 6.27494 15.0709 5.49106L15.0608 5.46254C14.9369 5.11371 14.8296 4.81162 14.7652 4.57509C14.7317 4.45187 14.7007 4.31518 14.6892 4.17784C14.678 4.04433 14.6795 3.85159 14.7636 3.6515C14.9267 3.26321 15.2687 2.9863 15.6824 2.90758C16.0399 2.83956 16.3538 2.98087 16.5277 3.06706C16.7198 3.16219 16.9504 3.30387 17.2011 3.45789ZM16.389 4.71949C16.4177 4.80109 16.4495 4.89061 16.4845 4.98912C16.8192 5.9319 17.0011 6.94622 17.0011 8.00139C17.0011 12.972 12.9717 17.0014 8.00113 17.0014C6.94616 17.0014 5.93204 16.8196 4.9894 16.4849C4.89089 16.4499 4.80137 16.4182 4.71977 16.3895C4.7306 16.4071 4.74172 16.4253 4.75314 16.4439C6.24951 18.8796 8.93636 20.5013 12.0013 20.5013C16.6958 20.5013 20.5013 16.6958 20.5013 12.0013C20.5013 8.93617 18.8794 6.24918 16.4434 4.75286C16.4248 4.74144 16.4067 4.73032 16.389 4.71949Z"
            fill="currentColor"
        />
    </s.Svg>
);
