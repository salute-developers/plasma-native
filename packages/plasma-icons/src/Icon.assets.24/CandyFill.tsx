import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CandyFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0773 2.22806C16.5344 1.68513 15.6075 1.93128 15.4054 2.67205L14.7326 5.13921C13.5398 4.61019 12.0937 4.83463 11.1158 5.81253L5.81253 11.1158C4.83463 12.0937 4.61019 13.5398 5.13921 14.7326L2.67205 15.4054C1.93129 15.6075 1.68513 16.5344 2.22806 17.0773L6.92213 21.7714C7.46506 22.3143 8.39197 22.0681 8.594 21.3274L9.26686 18.8602C10.4597 19.3892 11.9057 19.1648 12.8836 18.1869L18.1869 12.8836C19.1648 11.9057 19.3892 10.4597 18.8602 9.26686L21.3274 8.594C22.0681 8.39197 22.3143 7.46506 21.7714 6.92213L17.0773 2.22806ZM3.89796 16.6259L6.1203 16.0198L7.97965 17.8791L7.37355 20.1015L3.89796 16.6259ZM17.8791 7.97964L20.1015 7.37355L16.6259 3.89796L16.0198 6.1203L17.8791 7.97964ZM13.5907 9.70162C13.8836 9.40873 13.8836 8.93385 13.5907 8.64096C13.2978 8.34807 12.8229 8.34807 12.53 8.64096L8.64096 12.53C8.34807 12.8229 8.34807 13.2978 8.64096 13.5907C8.93385 13.8836 9.40873 13.8836 9.70162 13.5907L13.5907 9.70162Z"
            fill="currentColor"
        />
    </s.Svg>
);
