import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BookmarkFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8223 4.5H21.1777C22.1156 4.49999 22.8827 4.49998 23.5061 4.55507C24.1513 4.6121 24.7341 4.73375 25.2783 5.03373C26.1301 5.50322 26.8226 6.25236 27.2566 7.17377C27.5339 7.76252 27.6464 8.39294 27.6991 9.09096C27.75 9.76532 27.75 10.5951 27.75 11.6097V27.0357C27.75 27.7929 27.75 28.4379 27.7077 28.9424C27.6661 29.4379 27.5713 30.0287 27.2175 30.5082C26.7544 31.1358 26.0522 31.5009 25.3099 31.5C24.7427 31.4993 24.2571 31.2103 23.8734 30.9359C23.4828 30.6566 23.0172 30.2536 22.4707 29.7806L20.8279 28.3589C20.195 27.8112 19.7635 27.4387 19.4058 27.173C19.0589 26.9155 18.8396 26.8038 18.6499 26.747C18.2246 26.6197 17.7754 26.6197 17.3501 26.747C17.1604 26.8038 16.9411 26.9155 16.5942 27.173C16.2365 27.4387 15.805 27.8112 15.1721 28.3589L13.5293 29.7806C12.9828 30.2536 12.5172 30.6566 12.1266 30.9359C11.7429 31.2103 11.2573 31.4993 10.6901 31.5C9.94782 31.5009 9.24559 31.1358 8.78249 30.5082C8.42869 30.0287 8.33393 29.4379 8.29232 28.9424C8.24996 28.4379 8.24998 27.7929 8.25 27.0357L8.25 11.6097C8.24999 10.5951 8.24998 9.76533 8.30091 9.09096C8.35363 8.39294 8.46609 7.76252 8.74339 7.17377C9.17739 6.25236 9.8699 5.50322 10.7217 5.03373C11.2659 4.73375 11.8487 4.6121 12.4939 4.55507C13.1173 4.49998 13.8844 4.49999 14.8223 4.5Z"
            fill="currentColor"
        />
    </s.Svg>
);