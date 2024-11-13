import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HourglassTopOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M16.2144 14.536L16.2475 14.5568C17.2233 15.1708 18.6261 15.2687 19.7577 14.5568L19.7907 14.536C20.7824 13.9102 22.3737 12.8011 23.6774 11.4523C24.7134 10.3805 25.4357 9.30726 25.5687 7.90761C25.5849 7.73608 25.5931 7.65032 25.5561 7.56883C25.5257 7.5018 25.4622 7.43541 25.3947 7.39998C25.3125 7.3569 25.2118 7.35562 25.0104 7.35306C20.3411 7.29375 15.664 7.29375 10.9948 7.35306C10.7933 7.35562 10.6926 7.3569 10.6104 7.39998C10.5429 7.43541 10.4794 7.5018 10.449 7.56883C10.412 7.65032 10.4202 7.73607 10.4365 7.90758C10.5694 9.30723 11.2917 10.3805 12.3277 11.4523C13.6314 12.8011 15.2227 13.9102 16.2144 14.536Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.6084 33C25.2558 33 25.7903 33 26.228 32.9726C26.6818 32.9442 27.1019 32.8833 27.5074 32.7296C28.5127 32.3485 29.3094 31.5967 29.7134 30.6482C29.8763 30.2656 29.9408 29.8693 29.9709 29.4411C30 29.0281 30 28.5238 30 27.913V27.8818C30 25.395 28.454 23.1652 26.7971 21.4685C25.3118 19.9475 23.6203 18.7358 22.4886 18C23.6203 17.2642 25.3118 16.0525 26.7971 14.5315C28.454 12.8348 30 10.605 30 8.11824V8.087C30 7.47616 30 6.97193 29.9709 6.5589C29.9408 6.13074 29.8763 5.73439 29.7134 5.35179C29.3095 4.40333 28.5127 3.65154 27.5074 3.27042C27.1019 3.11668 26.6818 3.05585 26.228 3.02741C25.7903 2.99999 25.2558 2.99999 24.6084 3H11.3917C10.7443 2.99999 10.2097 2.99999 9.77198 3.02741C9.31818 3.05585 8.8981 3.11668 8.4926 3.27042C7.48735 3.65154 6.69055 4.40333 6.28661 5.35179C6.12366 5.73439 6.05919 6.13074 6.02905 6.5589C5.99999 6.97191 5.99999 7.4761 6 8.0869V8.11824C6 10.605 7.54604 12.8348 9.20292 14.5315C10.6882 16.0525 12.3797 17.2642 13.5114 18C12.3797 18.7358 10.6882 19.9475 9.20292 21.4685C7.54604 23.1652 6 25.395 6 27.8818V27.913C5.99999 28.5238 5.99999 29.0281 6.02905 29.4411C6.05919 29.8693 6.12366 30.2656 6.28661 30.6482C6.69055 31.5967 7.48735 32.3485 8.4926 32.7296C8.8981 32.8833 9.31818 32.9442 9.77198 32.9726C10.2097 33 10.7442 33 11.3916 33H24.6084ZM26.7664 30.9898C26.637 31.0389 26.4518 31.0794 26.0964 31.1017C25.7323 31.1245 25.2641 31.125 24.5753 31.125H11.4247C10.7359 31.125 10.2677 31.1245 9.90365 31.1017C9.54816 31.0794 9.36299 31.0389 9.23356 30.9898C8.73093 30.7992 8.33254 30.4233 8.13057 29.9491C8.07856 29.827 8.03555 29.6523 8.01195 29.3169C7.98777 28.9733 7.98726 28.5316 7.98726 27.8818C7.98726 26.1109 9.11417 24.3265 10.6644 22.739C12.1909 21.1758 13.9877 19.9468 15.0254 19.2974L15.048 19.2832C15.1782 19.2018 15.3197 19.1133 15.4315 19.0309C15.5321 18.9568 15.7614 18.7829 15.8883 18.4949C16.0303 18.1726 16.0303 17.8274 15.8883 17.5051C15.7614 17.2171 15.5321 17.0432 15.4315 16.9691C15.3198 16.8868 15.1784 16.7983 15.0482 16.7169L15.0254 16.7026C13.9877 16.0532 12.1909 14.8242 10.6644 13.261C9.11417 11.6735 7.98726 9.88905 7.98726 8.11824C7.98726 7.46838 7.98777 7.02666 8.01195 6.68313C8.03555 6.34772 8.07856 6.17302 8.13057 6.0509C8.33254 5.57666 8.73093 5.20077 9.23356 5.01021C9.363 4.96114 9.54816 4.92057 9.90365 4.89829C10.2677 4.87548 10.7359 4.875 11.4247 4.875H24.5753C25.2641 4.875 25.7323 4.87548 26.0964 4.89829C26.4518 4.92057 26.637 4.96114 26.7664 5.01021C27.2691 5.20077 27.6675 5.57666 27.8694 6.0509C27.9214 6.17302 27.9644 6.34772 27.9881 6.68313C28.0122 7.02666 28.0127 7.46838 28.0127 8.11824C28.0127 9.88905 26.8858 11.6735 25.3356 13.261C23.8091 14.8242 22.0123 16.0532 20.9746 16.7026L20.952 16.7167C20.8218 16.7982 20.6803 16.8867 20.5685 16.9691C20.4679 17.0432 20.2386 17.2171 20.1117 17.5051C19.9697 17.8274 19.9697 18.1726 20.1117 18.4949C20.2386 18.7829 20.4679 18.9568 20.5685 19.0309C20.6803 19.1133 20.8218 19.2018 20.952 19.2833L20.9746 19.2974C22.0123 19.9468 23.8091 21.1758 25.3356 22.739C26.8858 24.3265 28.0127 26.1109 28.0127 27.8818C28.0127 28.5316 28.0122 28.9733 27.9881 29.3169C27.9644 29.6523 27.9214 29.827 27.8694 29.9491C27.6675 30.4233 27.2691 30.7992 26.7664 30.9898Z"
            fill="currentColor"
        />
    </s.Svg>
);
