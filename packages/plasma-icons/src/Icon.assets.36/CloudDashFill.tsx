import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CloudDashFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.0182 9.78311C25.1624 7.47627 22.3161 6 19.125 6C14.6161 6 10.7978 8.94634 9.4861 13.0176C5.75712 13.9694 3 17.3492 3 21.375C3 24.7366 4.92315 27.6491 7.72924 29.0721L27.0182 9.78311ZM28.1328 11.497L9.81914 29.8106C10.4015 29.9347 11.0056 30 11.625 30H26.25C29.9779 30 33 26.9779 33 23.25C33 20.5771 31.447 18.2692 29.1961 17.1755C29.2317 16.8299 29.25 16.4794 29.25 16.125C29.25 14.4575 28.8469 12.8841 28.1328 11.497Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.163 4.29289C31.5535 4.68342 31.5535 5.31658 31.163 5.70711L5.70711 31.163C5.31658 31.5535 4.68342 31.5535 4.29289 31.163C3.90237 30.7724 3.90237 30.1393 4.29289 29.7487L29.7487 4.29289C30.1393 3.90237 30.7724 3.90237 31.163 4.29289Z"
            fill="currentColor"
        />
    </s.Svg>
);
