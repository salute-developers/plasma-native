import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BookmarkStarOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M12.3329 7.02447C12.2281 6.70201 11.7719 6.70201 11.6671 7.02447L10.956 9.21307C10.9092 9.35728 10.7748 9.45492 10.6231 9.45492H8.32191C7.98285 9.45492 7.84188 9.88878 8.11618 10.0881L9.97792 11.4407C10.1006 11.5298 10.1519 11.6878 10.1051 11.832L9.39394 14.0206C9.28917 14.3431 9.65824 14.6112 9.93254 14.4119L11.7943 13.0593C11.9169 12.9702 12.0831 12.9702 12.2057 13.0593L14.0675 14.4119C14.3418 14.6112 14.7108 14.3431 14.6061 14.0206L13.8949 11.832C13.8481 11.6878 13.8994 11.5298 14.0221 11.4407L15.8838 10.0881C16.1581 9.88878 16.0171 9.45492 15.6781 9.45492H13.3769C13.2252 9.45492 13.0908 9.35728 13.044 9.21307L12.3329 7.02447Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2814 3H9.71858C9.04521 2.99999 8.49449 2.99998 8.04693 3.03655C7.58367 3.0744 7.16527 3.15514 6.77453 3.35423C6.16301 3.66582 5.66582 4.163 5.35423 4.77453C5.15514 5.16527 5.0744 5.58367 5.03655 6.04693C4.99999 6.49448 4.99999 7.04517 5 7.71852V17.9565C4.99998 18.459 4.99997 18.8871 5.03038 19.222C5.06026 19.5508 5.12829 19.9429 5.3823 20.2611C5.71478 20.6776 6.21895 20.92 6.75189 20.9194C7.15906 20.9189 7.50772 20.7271 7.78317 20.545C8.06363 20.3596 8.39789 20.0922 8.79029 19.7782L9.96974 18.8347C10.4241 18.4712 10.7339 18.224 10.9907 18.0477C11.2398 17.8767 11.3972 17.8026 11.5334 17.7649C11.8387 17.6804 12.1613 17.6804 12.4666 17.7649C12.6028 17.8026 12.7602 17.8767 13.0093 18.0477C13.2661 18.224 13.5759 18.4712 14.0303 18.8347L15.2097 19.7782C15.6021 20.0922 15.9364 20.3596 16.2168 20.545C16.4923 20.7271 16.8409 20.9189 17.2481 20.9194C17.7811 20.92 18.2852 20.6776 18.6177 20.2611C18.8717 19.9429 18.9397 19.5508 18.9696 19.222C19 18.8871 19 18.459 19 17.9565V7.71856C19 7.04521 19 6.49448 18.9635 6.04693C18.9256 5.58367 18.8449 5.16527 18.6458 4.77453C18.3342 4.163 17.837 3.66582 17.2255 3.35423C16.8347 3.15514 16.4163 3.0744 15.9531 3.03655C15.5055 2.99998 14.9548 2.99999 14.2814 3ZM7.45552 4.69074C7.59956 4.61735 7.79858 4.56184 8.16908 4.53157C8.54834 4.50058 9.03756 4.5 9.75 4.5H14.25C14.9624 4.5 15.4517 4.50058 15.8309 4.53157C16.2014 4.56184 16.4004 4.61735 16.5445 4.69074C16.8738 4.85852 17.1415 5.12623 17.3093 5.45552C17.3827 5.59956 17.4382 5.79858 17.4684 6.16908C17.4994 6.54833 17.5 7.03756 17.5 7.75V17.921C17.5 18.4688 17.4993 18.8277 17.4758 19.0863C17.4609 19.2505 17.44 19.3198 17.4335 19.3392C17.3904 19.3857 17.3312 19.4142 17.268 19.4187C17.2488 19.4117 17.1816 19.3847 17.0441 19.2938C16.8275 19.1506 16.5468 18.927 16.119 18.5847L14.9459 17.6463C14.5182 17.3041 14.1657 17.0221 13.8581 16.811C13.5377 16.591 13.2249 16.4184 12.8666 16.3192C12.2995 16.1623 11.7005 16.1623 11.1335 16.3192C10.7751 16.4184 10.4623 16.591 10.1419 16.811C9.83431 17.0221 9.4818 17.3041 9.05404 17.6463L7.88099 18.5847C7.45323 18.927 7.17251 19.1506 6.95593 19.2938C6.81838 19.3847 6.75122 19.4117 6.73205 19.4187C6.66879 19.4142 6.60957 19.3857 6.5665 19.3392C6.56005 19.3198 6.53915 19.2505 6.52423 19.0863C6.50075 18.8277 6.5 18.4688 6.5 17.921V7.75C6.5 7.03756 6.50059 6.54833 6.53157 6.16908C6.56184 5.79858 6.61735 5.59956 6.69074 5.45552C6.85852 5.12623 7.12624 4.85852 7.45552 4.69074Z"
            fill="currentColor"
        />
    </s.Svg>
);