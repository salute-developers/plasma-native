import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BikeOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M14.75 6.5C15.7165 6.5 16.5 5.7165 16.5 4.75C16.5 3.7835 15.7165 3 14.75 3C13.7835 3 13 3.7835 13 4.75C13 5.7165 13.7835 6.5 14.75 6.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M12.8182 8.69809C13.825 9.72506 15.283 10.75 17.25 10.75C17.6642 10.75 18 10.4142 18 10C18 9.58579 17.6642 9.25 17.25 9.25C15.5687 9.25 14.3246 8.20592 13.4191 7.12828C13.3753 7.07617 13.3325 7.02421 13.2907 6.97254C12.6458 6.17601 11.4133 6.02606 10.635 6.80438L8.73326 8.70608C8.01244 9.4269 8.05783 10.6088 8.83181 11.2722L11.1627 13.2701C11.2181 13.3176 11.25 13.387 11.25 13.4599V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V13.4599C12.75 12.9491 12.5268 12.4637 12.1389 12.1312L10.6561 10.8603L12.8182 8.69809Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20C8.20914 20 10 18.2091 10 16C10 13.7909 8.20914 12 6 12ZM3.5 16C3.5 14.6193 4.61929 13.5 6 13.5C7.38071 13.5 8.5 14.6193 8.5 16C8.5 17.3807 7.38071 18.5 6 18.5C4.61929 18.5 3.5 17.3807 3.5 16Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 12C15.7909 12 14 13.7909 14 16C14 18.2091 15.7909 20 18 20C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12ZM15.5 16C15.5 14.6193 16.6193 13.5 18 13.5C19.3807 13.5 20.5 14.6193 20.5 16C20.5 17.3807 19.3807 18.5 18 18.5C16.6193 18.5 15.5 17.3807 15.5 16Z"
            fill="currentColor"
        />
    </s.Svg>
);
