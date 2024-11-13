import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboomMiniErrorOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M21.9951 11.1951C21.9316 14.1447 21.2555 15.4734 20.4936 16.3045C20.3025 16.513 20.1134 16.682 19.9513 16.8254L19.9233 16.8502C19.7684 16.987 19.6493 17.0922 19.5483 17.2024C19.3647 17.4027 19.25 17.6062 19.25 18V18.75C19.25 19.4404 18.6904 20 18 20H6C5.30964 20 4.75 19.4404 4.75 18.75V18C4.75 17.6062 4.63532 17.4027 4.45174 17.2024C4.35065 17.0922 4.23165 16.987 4.07676 16.8502L4.04872 16.8254C3.88655 16.682 3.69749 16.513 3.50642 16.3045C2.70584 15.4312 2 14.0085 2 10.7333V7.5C2 7.08499 2.1264 6.69951 2.34281 6.37994C2.13651 6.24632 2 6.0141 2 5.75C2 5.33579 2.33579 5 2.75 5H11.1739C11.0602 5.48152 11 5.98373 11 6.5H4C3.44771 6.5 3 6.94771 3 7.5V10.7333C3 13.8581 3.66916 15.0022 4.24358 15.6288C4.39626 15.7954 4.55095 15.9346 4.71105 16.0762L4.74892 16.1096C4.89272 16.2365 5.05044 16.3757 5.18889 16.5267C5.52093 16.8889 5.75 17.3271 5.75 18H6.75C6.75 17.5536 6.69113 17.2869 6.6164 17.097C6.5395 16.9016 6.4359 16.7573 6.27711 16.5364C6.11973 16.3174 5.92843 16.0481 5.75584 15.6532C5.58402 15.26 5.43819 14.7607 5.33905 14.0712C5.29975 13.7978 5.48947 13.5444 5.7628 13.5051C6.03613 13.4658 6.28957 13.6555 6.32887 13.9288C6.41791 14.5481 6.54318 14.9576 6.67216 15.2527C6.80036 15.5461 6.93954 15.7446 7.08913 15.9527L7.11104 15.9832C7.25474 16.1827 7.42348 16.417 7.54694 16.7308C7.67891 17.0661 7.75 17.4636 7.75 18H9C9 17.5029 8.96474 17.2693 8.92763 17.1377C8.90129 17.0442 8.8775 17.0016 8.82706 16.9112C8.80743 16.876 8.78375 16.8335 8.75432 16.778C8.5389 16.3719 8.35236 15.7938 8.26908 14.0235C8.2561 13.7477 8.46919 13.5135 8.74503 13.5006C9.02087 13.4876 9.255 13.7007 9.26797 13.9765C9.34941 15.7074 9.52861 16.1037 9.63774 16.3095C9.64814 16.3291 9.66062 16.3512 9.67454 16.3758C9.7372 16.4868 9.82888 16.6491 9.89011 16.8663C9.96442 17.1299 10 17.4715 10 18H11.5V14C11.5 13.7239 11.7239 13.5 12 13.5C12.2761 13.5 12.5 13.7239 12.5 14V18H14C14 17.4715 14.0356 17.1299 14.1099 16.8663C14.1711 16.6491 14.2628 16.4868 14.3255 16.3758C14.3394 16.3512 14.3519 16.3291 14.3623 16.3095C14.4714 16.1037 14.6506 15.7074 14.732 13.9765C14.745 13.7007 14.9791 13.4876 15.255 13.5006C15.5308 13.5135 15.7439 13.7477 15.7309 14.0235C15.6476 15.7938 15.4611 16.3719 15.2457 16.778C15.2162 16.8335 15.1926 16.876 15.1729 16.9112C15.1225 17.0016 15.0987 17.0442 15.0724 17.1377C15.0353 17.2693 15 17.5029 15 18H16.25C16.25 17.4636 16.3211 17.0661 16.4531 16.7308C16.5765 16.4171 16.7452 16.1828 16.8889 15.9832L16.9109 15.9527C17.0605 15.7446 17.1996 15.5461 17.3278 15.2527C17.4568 14.9576 17.5821 14.5481 17.6711 13.9288C17.7104 13.6555 17.9639 13.4658 18.2372 13.5051C18.5105 13.5444 18.7002 13.7978 18.6609 14.0712C18.5618 14.7607 18.416 15.26 18.2442 15.6532C18.0716 16.0481 17.8803 16.3174 17.7229 16.5364C17.5641 16.7573 17.4605 16.9016 17.3836 17.097C17.3089 17.2869 17.25 17.5536 17.25 18H18.25C18.25 17.3271 18.4791 16.8889 18.8111 16.5267C18.9496 16.3757 19.1073 16.2365 19.2511 16.1096L19.289 16.0762C19.4491 15.9346 19.6037 15.7954 19.7564 15.6288C20.2451 15.0957 20.8024 14.1881 20.9578 12.005C21.3308 11.7702 21.6783 11.4985 21.9951 11.1951Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 6.5C23 9.53757 20.5376 12 17.5 12C14.4624 12 12 9.53757 12 6.5C12 3.46243 14.4624 1 17.5 1C20.5376 1 23 3.46243 23 6.5ZM17.5 2.5C17.9142 2.5 18.25 2.83579 18.25 3.25V6.25C18.25 6.66421 17.9142 7 17.5 7C17.0858 7 16.75 6.66421 16.75 6.25V3.25C16.75 2.83579 17.0858 2.5 17.5 2.5ZM17.5 10C18.0523 10 18.5 9.55229 18.5 9C18.5 8.44772 18.0523 8 17.5 8C16.9477 8 16.5 8.44772 16.5 9C16.5 9.55229 16.9477 10 17.5 10Z"
            fill="currentColor"
        />
    </s.Svg>
);
