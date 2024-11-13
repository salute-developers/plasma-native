import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BeachUmbrellaFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.2861 2.38198C22.8195 2.52492 23.1361 3.07326 22.9932 3.60672L22.749 4.51782C26.1957 5.69133 29.1129 8.08082 30.9434 11.2581C32.4774 13.9206 33.1516 16.9689 32.9125 19.9922L32.9096 20.0293C32.882 20.3776 32.8571 20.6938 32.8224 20.9336C32.8044 21.0581 32.7773 21.2113 32.7289 21.362C32.6876 21.4906 32.586 21.7669 32.329 21.9944C31.9295 22.3479 31.3921 22.4634 30.8834 22.3052C30.5313 22.1957 30.3175 21.9563 30.24 21.8663C30.1371 21.7468 30.0485 21.6136 29.9771 21.499C29.8377 21.2753 29.6691 20.9665 29.476 20.6129L29.4588 20.5813C28.9366 19.625 28.2278 18.849 27.3044 18.6015C26.256 18.3206 25.4691 18.5153 24.8735 18.8422L24.862 18.8485C24.3626 19.1226 23.9747 19.3354 23.7012 19.4798C23.5649 19.5518 23.4413 19.6151 23.3393 19.6627C23.2893 19.686 23.2281 19.7134 23.1641 19.7373L23.1601 19.7388C23.1252 19.7521 22.9635 19.8136 22.7647 19.8223L22.7375 19.8238C22.7318 19.8241 22.7073 19.8257 22.6853 19.8266L22.6822 19.8267C22.6399 19.8285 22.4868 19.8351 22.3056 19.7865C22.1243 19.738 21.9951 19.6558 21.9593 19.633L21.9567 19.6313C21.9402 19.6209 21.9223 19.6091 21.9151 19.6043L21.9129 19.6028L21.89 19.5879C21.7222 19.481 21.6129 19.3469 21.5893 19.3179L21.5867 19.3146C21.5432 19.2619 21.5038 19.2076 21.4723 19.1625C21.4077 19.0702 21.3324 18.9536 21.2502 18.8231C21.0856 18.5612 20.8561 18.183 20.5606 17.6959L20.5538 17.6847C20.2015 17.1039 19.6173 16.5418 18.5689 16.2609C17.5205 15.98 16.7336 16.1747 16.1381 16.5015L16.1267 16.5077C15.6272 16.7819 15.2393 16.9947 14.9658 17.1391C14.8294 17.2111 14.7058 17.2745 14.6038 17.3221C14.5539 17.3454 14.4926 17.3727 14.4286 17.3967L14.4247 17.3982C14.3898 17.4114 14.228 17.4729 14.0293 17.4817L14.0021 17.4831L13.9994 17.4833C13.9909 17.4838 13.9693 17.4851 13.9498 17.4859L13.9467 17.4861C13.9044 17.4879 13.7513 17.4944 13.5701 17.4459C13.3888 17.3973 13.2595 17.3151 13.2238 17.2924L13.2212 17.2907C13.2047 17.2802 13.1867 17.2683 13.1796 17.2636L13.1774 17.2621L13.1545 17.2473C12.9868 17.1403 12.8775 17.0062 12.8539 16.9773L12.8512 16.974C12.8077 16.9212 12.7684 16.8669 12.7368 16.8218C12.6723 16.7296 12.5969 16.6129 12.5148 16.4824C12.3501 16.2206 12.1206 15.8423 11.8251 15.3551L11.8184 15.344C11.466 14.7632 10.8819 14.2011 9.83346 13.9202C8.91002 13.6728 7.90821 13.9904 6.97781 14.5576L6.94747 14.5761C6.60339 14.7858 6.3028 14.9691 6.07009 15.0932C5.95095 15.1567 5.80771 15.2277 5.65877 15.2798C5.54661 15.319 5.24181 15.4194 4.88214 15.3382C4.36248 15.2209 3.95486 14.8521 3.78562 14.3462C3.67673 14.0207 3.72695 13.7306 3.75548 13.5986C3.78893 13.4439 3.84208 13.2976 3.88874 13.1808C3.97858 12.9559 4.11501 12.6696 4.26535 12.3541L4.28138 12.3205C5.58593 9.58267 7.69398 7.27995 10.3537 5.74108C13.5266 3.90529 17.2465 3.29437 20.8171 4.0004L21.0613 3.08909C21.2042 2.55562 21.7526 2.23904 22.2861 2.38198ZM18.8467 19.0735C18.9896 18.5401 18.673 17.9917 18.1396 17.8488C17.6061 17.7058 17.0578 18.0224 16.9148 18.5559L13.573 31.0277L5.4398 31.0315C4.88752 31.0318 4.4396 31.4797 4.43934 32.032C4.43909 32.5842 4.8866 33.0318 5.43888 33.0315L27.2965 33.0214C27.8488 33.0212 28.2967 32.5732 28.297 32.021C28.2972 31.4687 27.8497 31.0212 27.2974 31.0214L15.6438 31.0268L18.8467 19.0735Z"
            fill="currentColor"
        />
    </s.Svg>
);
