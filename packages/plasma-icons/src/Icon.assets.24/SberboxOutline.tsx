import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboxOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2486 2.98436C19.1509 2.88673 18.9926 2.88673 18.895 2.98436L17.304 4.57535C16.9745 4.90483 16.923 5.40703 17.1495 5.79051L13.237 9.70307C12.732 9.20764 12.3314 8.85376 11.8915 8.63678C10.8458 8.12115 9.6199 8.12115 8.57429 8.63678C8.01693 8.91164 7.52281 9.40617 6.79971 10.1299L4.12004 12.8095C3.39635 13.5326 2.90182 14.0268 2.62696 14.5841C2.11133 15.6297 2.11133 16.8557 2.62696 17.9013C2.90182 18.4586 3.39634 18.9528 4.12002 19.6758L4.32484 19.8807C5.04793 20.6043 5.54206 21.0989 6.09942 21.3737C7.14503 21.8894 8.37098 21.8894 9.41658 21.3737C9.97394 21.0989 10.4681 20.6043 11.1912 19.8807L13.8708 17.201C14.5945 16.4779 15.0891 15.9838 15.3639 15.4264C15.8796 14.3808 15.8796 13.1548 15.3639 12.1092C15.1469 11.6692 14.7931 11.2687 14.2976 10.7637L18.2102 6.85117C18.5937 7.07765 19.0959 7.02615 19.4253 6.69667L21.0163 5.10568C21.114 5.00805 21.114 4.84975 21.0163 4.75212L19.2486 2.98436ZM12.7077 11.2929C11.8419 10.4271 11.5332 10.1326 11.228 9.98209C10.6007 9.67271 9.86509 9.67271 9.23773 9.98209C8.93255 10.1326 8.62383 10.4271 7.758 11.2929L5.28313 13.7678C4.4173 14.6337 4.12277 14.9424 3.97227 15.2475C3.66289 15.8749 3.66289 16.6105 3.97227 17.2378C4.12277 17.543 4.4173 17.8517 5.28313 18.7176C6.14896 19.5834 6.45768 19.8779 6.76285 20.0284C7.39022 20.3378 8.12579 20.3378 8.75315 20.0284C9.05832 19.8779 9.36704 19.5834 10.2329 18.7176L12.7077 16.2427C13.5736 15.3769 13.8681 15.0681 14.0186 14.763C14.328 14.1356 14.328 13.4 14.0186 12.7727C13.8681 12.4675 13.5736 12.1588 12.7077 11.2929Z"
            fill="currentColor"
        />
    </s.Svg>
);
