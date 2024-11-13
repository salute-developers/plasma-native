import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessagePersonChatFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M18.1102 5.25C11.1294 5.25 5.47042 10.909 5.47042 17.8898C5.47042 19.3917 5.73278 20.8344 6.21498 22.1733C6.50443 22.977 6.58779 23.7664 6.39325 24.4611L5.3243 28.2788C4.91544 29.739 6.26096 31.0846 7.72118 30.6757L11.5389 29.6068C12.2336 29.4122 13.023 29.4956 13.8267 29.785C15.0586 30.2287 16.3785 30.4863 17.7514 30.5246C17.095 29.2336 16.725 27.7725 16.725 26.225C16.725 20.9783 20.9783 16.725 26.225 16.725C27.8633 16.725 29.4047 17.1397 30.75 17.8698C30.7392 10.8982 25.0843 5.25 18.1102 5.25Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.5 35C31.1944 35 35 31.1944 35 26.5C35 21.8056 31.1944 18 26.5 18C21.8056 18 18 21.8056 18 26.5C18 31.1944 21.8056 35 26.5 35ZM29.9771 23.0221C29.9771 24.9425 28.4202 26.4994 26.4998 26.4994C24.5793 26.4994 23.0225 24.9425 23.0225 23.0221C23.0225 21.1016 24.5793 19.5448 26.4998 19.5448C28.4202 19.5448 29.9771 21.1016 29.9771 23.0221ZM32.3387 30.2807C31.099 32.1907 28.9475 33.4542 26.5008 33.4542C24.0539 33.4542 21.9022 32.1905 20.6626 30.2802C22.4013 29.3472 24.3889 28.818 26.5002 28.818C28.6118 28.818 30.5998 29.3474 32.3387 30.2807Z"
            fill="currentColor"
        />
    </s.Svg>
);
