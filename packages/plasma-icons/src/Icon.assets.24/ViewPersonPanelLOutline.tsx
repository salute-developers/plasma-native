import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ViewPersonPanelLOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M5 7.8V16.2C5 16.48 5 16.62 5.0545 16.727C5.10243 16.8211 5.17892 16.8976 5.27301 16.9455C5.37996 17 5.51997 17 5.8 17H7.2C7.48003 17 7.62004 17 7.727 16.9455C7.82108 16.8976 7.89757 16.8211 7.9455 16.727C8 16.62 8 16.48 8 16.2V7.8C8 7.51998 8 7.37996 7.9455 7.27301C7.89757 7.17893 7.82108 7.10243 7.727 7.0545C7.62004 7 7.48003 7 7.2 7H5.8C5.51997 7 5.37996 7 5.27301 7.0545C5.17892 7.10243 5.10243 7.17893 5.0545 7.27301C5 7.37996 5 7.51998 5 7.8Z"
            fill="currentColor"
        />
        <s.Path
            d="M12.625 10.125C12.625 11.2986 13.5764 12.25 14.75 12.25C15.9236 12.25 16.875 11.2986 16.875 10.125C16.875 8.9514 15.9236 8 14.75 8C13.5764 8 12.625 8.9514 12.625 10.125Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.8999 14.3646C10.6291 14.5607 10.4687 14.9034 10.5051 15.2566C10.5248 15.4471 10.5594 15.5955 10.6204 15.7265C10.7444 15.993 10.9424 16.2098 11.1859 16.3456C11.4628 16.5 11.8252 16.5 12.55 16.5H16.9501C17.6748 16.5 18.0372 16.5 18.3141 16.3456C18.5576 16.2098 18.7556 15.993 18.8796 15.7265C18.9406 15.5955 18.9752 15.4471 18.9949 15.2567C19.0313 14.9035 18.8709 14.5608 18.6001 14.3647C17.4961 13.5654 16.1727 13.1 14.7499 13.1C13.3273 13.1 12.0039 13.5654 10.8999 14.3646Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.91957 4H18.0804C18.6146 3.99999 19.0604 3.99998 19.4247 4.02974C19.8046 4.06078 20.1612 4.12789 20.4985 4.29973C21.0159 4.56339 21.4366 4.98408 21.7003 5.50153C21.8721 5.83879 21.9392 6.19545 21.9703 6.57533C22 6.93956 22 7.3854 22 7.91955V16.0805C22 16.6146 22 17.0604 21.9703 17.4247C21.9392 17.8046 21.8721 18.1612 21.7003 18.4985C21.4366 19.0159 21.0159 19.4366 20.4985 19.7003C20.1612 19.8721 19.8046 19.9392 19.4247 19.9703C19.0604 20 18.6146 20 18.0805 20H5.91955C5.3854 20 4.93956 20 4.57533 19.9703C4.19545 19.9392 3.83879 19.8721 3.50153 19.7003C2.98408 19.4366 2.56339 19.0159 2.29973 18.4985C2.12789 18.1612 2.06078 17.8046 2.02974 17.4247C1.99998 17.0604 1.99999 16.6146 2 16.0805V7.91957C1.99999 7.38542 1.99998 6.93956 2.02974 6.57533C2.06078 6.19545 2.12789 5.83879 2.29973 5.50153C2.56339 4.98408 2.98408 4.56339 3.50153 4.29973C3.83879 4.12789 4.19545 4.06078 4.57533 4.02974C4.93956 3.99998 5.38542 3.99999 5.91957 4ZM4.69748 5.52476C4.41036 5.54822 4.27307 5.5901 4.18251 5.63624C3.94731 5.75608 3.75608 5.94731 3.63624 6.18251C3.5901 6.27307 3.54822 6.41036 3.52476 6.69748C3.50058 6.99336 3.5 7.37757 3.5 7.95V16.05C3.5 16.6224 3.50058 17.0066 3.52476 17.3025C3.54822 17.5896 3.5901 17.7269 3.63624 17.8175C3.75608 18.0527 3.94731 18.2439 4.18251 18.3638C4.27307 18.4099 4.41036 18.4518 4.69748 18.4752C4.99336 18.4994 5.37757 18.5 5.95 18.5H18.05C18.6224 18.5 19.0066 18.4994 19.3025 18.4752C19.5896 18.4518 19.7269 18.4099 19.8175 18.3638C20.0527 18.2439 20.2439 18.0527 20.3638 17.8175C20.4099 17.7269 20.4518 17.5896 20.4752 17.3025C20.4994 17.0066 20.5 16.6224 20.5 16.05V7.95C20.5 7.37757 20.4994 6.99336 20.4752 6.69748C20.4518 6.41036 20.4099 6.27307 20.3638 6.18251C20.2439 5.94731 20.0527 5.75608 19.8175 5.63624C19.7269 5.5901 19.5896 5.54822 19.3025 5.52476C19.0066 5.50058 18.6224 5.5 18.05 5.5H5.95C5.37757 5.5 4.99336 5.50058 4.69748 5.52476Z"
            fill="currentColor"
        />
    </s.Svg>
);
