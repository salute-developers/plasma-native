import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 12.7322 18.6296 15.1442 16.5421 16.5863C16.1397 16.8643 15.8835 17.2257 15.8176 17.5994L15.5302 19.2279C15.3388 20.3124 14.5277 21.1544 13.5 21.4155V21.75C13.5 22.4404 12.9404 23 12.25 23H11.75C11.0596 23 10.5 22.4404 10.5 21.75V21.4155C9.47233 21.1544 8.66119 20.3124 8.46981 19.2279L8.18242 17.5994C8.11647 17.2257 7.86026 16.8643 7.45788 16.5863C5.37037 15.1442 4 12.7322 4 10ZM9.65959 17.3387C9.62299 17.1313 9.56335 16.9348 9.48511 16.75H14.5149C14.4367 16.9348 14.377 17.1313 14.3404 17.3387L14.053 18.9672C13.9476 19.5646 13.4286 20 12.822 20H11.178C10.5714 20 10.0524 19.5646 9.94698 18.9672L9.65959 17.3387Z"
            fill="currentColor"
        />
    </s.Svg>
);
