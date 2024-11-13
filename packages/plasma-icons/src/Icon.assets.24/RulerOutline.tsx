import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RulerOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2394 2.54306C18.5546 1.86768 17.453 1.87158 16.773 2.55178L2.56319 16.7652C1.88381 17.4447 1.87944 18.5449 2.5534 19.2299L4.77133 21.4839C5.45339 22.177 6.56975 22.1812 7.25694 21.4931L21.493 7.23887C22.179 6.55197 22.1748 5.4379 21.4835 4.75622L19.2394 2.54306ZM17.8338 3.61231C17.9309 3.51513 18.0883 3.51458 18.1861 3.61106L20.4303 5.82423C20.529 5.92161 20.5296 6.08076 20.4316 6.17889L6.1956 20.4331C6.09743 20.5314 5.93795 20.5308 5.84051 20.4318L3.62258 18.1778C3.5263 18.0799 3.52693 17.9228 3.62398 17.8257L4.52609 16.9233L5.66828 18.0655C5.96118 18.3584 6.43605 18.3584 6.72894 18.0655C7.02184 17.7726 7.02184 17.2978 6.72894 17.0049L5.58662 15.8626L7.35417 14.0946L8.49671 15.2371C8.7896 15.53 9.26448 15.53 9.55737 15.2371C9.85026 14.9442 9.85026 14.4693 9.55737 14.1764L8.41469 13.0338L10.1822 11.2658L11.3251 12.4087C11.618 12.7016 12.0929 12.7016 12.3858 12.4087C12.6787 12.1158 12.6787 11.6409 12.3858 11.348L11.2428 10.205L13.0103 8.437L14.1536 9.58025C14.4465 9.87315 14.9213 9.87315 15.2142 9.58025C15.5071 9.28736 15.5071 8.81248 15.2142 8.51959L14.0708 7.3762L15.8384 5.60822L16.982 6.75182C17.2749 7.04472 17.7498 7.04472 18.0427 6.75182C18.3355 6.45893 18.3355 5.98406 18.0427 5.69116L16.8989 4.54742L17.8338 3.61231Z"
            fill="currentColor"
        />
    </s.Svg>
);
