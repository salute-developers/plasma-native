import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const GiftOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.0602 4.03443C13.6198 2.65519 11.3487 2.65519 9.90831 4.03443C8.37688 5.50088 8.37688 7.94813 9.90831 9.41458L11.1758 10.6283H5.75C4.7835 10.6283 4 11.4118 4 12.3783V17.6682C4 18.5759 4.69105 19.3222 5.57573 19.4096V28.248C5.57573 30.8714 7.70237 32.998 10.3257 32.998H25.6738C28.2971 32.998 30.4238 30.8714 30.4238 28.248V19.4096C31.3085 19.3222 31.9995 18.5759 31.9995 17.6682V12.3783C31.9995 11.4118 31.216 10.6283 30.2495 10.6283H24.8228L26.0903 9.41458C27.6217 7.94813 27.6217 5.50088 26.0903 4.03443C24.6499 2.65519 22.3788 2.65519 20.9384 4.03443L17.9993 6.84884L15.0602 4.03443ZM22.325 12.6283C22.3301 12.6283 22.3353 12.6283 22.3404 12.6283H29.9995V17.4182H18.9998V12.6283H22.325ZM21.931 10.6283L24.707 7.97005C25.4161 7.29106 25.4161 6.15795 24.707 5.47896C24.0401 4.84035 22.9886 4.84035 22.3216 5.47896L18.9993 8.66034V10.6283H21.931ZM16.9993 10.6283V8.66034L13.6769 5.47896C13.01 4.84035 11.9585 4.84035 11.2915 5.47896C10.5825 6.15795 10.5825 7.29106 11.2915 7.97005L14.0676 10.6283H16.9993ZM13.6582 12.6283C13.6633 12.6283 13.6685 12.6283 13.6736 12.6283H16.9998V17.4182H6V12.6283H13.6582ZM7.57573 19.4182H16.9998V30.998H10.3257C8.80694 30.998 7.57573 29.7668 7.57573 28.248V19.4182ZM18.9998 19.4182V30.998H25.6738C27.1926 30.998 28.4238 29.7668 28.4238 28.248V19.4182H18.9998Z"
            fill="currentColor"
        />
    </s.Svg>
);