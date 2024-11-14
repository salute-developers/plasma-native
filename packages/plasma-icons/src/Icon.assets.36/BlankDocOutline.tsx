import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlankDocOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M25.5738 23.6397V22.2633C25.3263 22.1726 24.8538 22.0078 24.1488 22.0078C22.2738 22.0078 21.4863 22.9721 21.4863 25.049C21.4863 27.0683 22.2588 27.9913 24.1413 27.9913C24.8463 27.9913 25.3638 27.8183 25.6338 27.6781V26.3347C25.3713 26.5408 24.8913 26.7715 24.2388 26.7715C23.2638 26.7715 22.7913 26.343 22.7913 24.9748C22.7913 23.6726 23.2338 23.2276 24.1788 23.2276C24.8613 23.2276 25.2663 23.4419 25.5738 23.6397Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6895 25C15.6895 22.9066 16.5295 22 18.2995 22C20.1745 22 20.8795 22.9148 20.8795 25C20.8795 27.1676 19.987 28 18.2995 28C16.6045 28 15.6895 27.1017 15.6895 25ZM16.9945 25.0082C16.9945 26.4423 17.5045 26.8297 18.322 26.8297C19.1395 26.8297 19.582 26.4176 19.582 25.0082C19.582 23.5907 19.1395 23.1703 18.2695 23.1703C17.407 23.1703 16.9945 23.6648 16.9945 25.0082Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 22.1236V27.8681C11.0925 27.9093 11.5275 27.934 12.18 27.934C14.205 27.934 15.09 26.9533 15.09 24.8599C15.09 23.0632 14.4525 22.0659 12.3075 22.0659C11.565 22.0659 11.13 22.0824 10.5 22.1236ZM12.24 26.772C12.0525 26.772 11.91 26.7637 11.73 26.739V23.261C11.9325 23.2362 12.105 23.228 12.33 23.228C13.425 23.228 13.8225 23.7225 13.8225 24.934C13.8225 26.2362 13.365 26.772 12.24 26.772Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.8966 3H12.9575C11.9435 2.99999 11.1218 2.99998 10.4556 3.05441C9.76842 3.11056 9.1591 3.22956 8.59355 3.51772C7.69978 3.97312 6.97312 4.69978 6.51772 5.59355C6.22956 6.1591 6.11056 6.76842 6.05441 7.45558C5.99998 8.12178 5.99999 8.94348 6 9.9575V26.0425C5.99999 27.0565 5.99998 27.8782 6.05441 28.5444C6.11056 29.2316 6.22956 29.8409 6.51772 30.4065C6.97312 31.3002 7.69978 32.0269 8.59355 32.4823C9.1591 32.7704 9.76841 32.8894 10.4556 32.9456C11.1218 33 11.9435 33 12.9575 33H23.0425C24.0565 33 24.8782 33 25.5444 32.9456C26.2316 32.8894 26.8409 32.7704 27.4065 32.4823C28.3002 32.0269 29.0269 31.3002 29.4823 30.4065C29.7704 29.8409 29.8894 29.2316 29.9456 28.5444C30 27.8782 30 27.0565 30 26.0425V13.0811C30 12.8154 29.8943 12.5607 29.7062 12.3731L20.6028 3.29203C20.4153 3.10502 20.1613 3 19.8966 3ZM9.50153 5.29973C9.73814 5.17917 10.055 5.09381 10.6184 5.04777C11.1936 5.00078 11.9334 5 13 5H18.8966V8.32236C18.8965 9.12734 18.8965 9.79171 18.9407 10.3329C18.9867 10.895 19.0852 11.4117 19.3325 11.897C19.716 12.6497 20.3279 13.2616 21.0806 13.6451C21.5659 13.8924 22.0826 13.991 22.6447 14.0369C23.1859 14.0811 23.8503 14.0811 24.6553 14.0811H28V26C28 27.0666 27.9992 27.8064 27.9522 28.3816C27.9062 28.945 27.8208 29.2619 27.7003 29.4985C27.4366 30.0159 27.0159 30.4366 26.4985 30.7003C26.2619 30.8208 25.945 30.9062 25.3816 30.9522C24.8064 30.9992 24.0666 31 23 31H13C11.9334 31 11.1936 30.9992 10.6184 30.9522C10.055 30.9062 9.73814 30.8208 9.50153 30.7003C8.98408 30.4366 8.56338 30.0159 8.29973 29.4985C8.17917 29.2619 8.09381 28.945 8.04777 28.3816C8.00078 27.8064 8 27.0666 8 26V10C8 8.9334 8.00078 8.19359 8.04777 7.61844C8.09381 7.05496 8.17917 6.73814 8.29973 6.50153C8.56338 5.98408 8.98408 5.56339 9.50153 5.29973ZM26.5816 12.0811L20.8966 6.41002V8.28108C20.8966 9.13766 20.8973 9.71996 20.9341 10.17C20.9699 10.6085 21.0348 10.8327 21.1145 10.9891C21.3063 11.3654 21.6122 11.6713 21.9886 11.8631C22.145 11.9428 22.3692 12.0077 22.8076 12.0435C23.2577 12.0803 23.84 12.0811 24.6966 12.0811H26.5816Z"
            fill="currentColor"
        />
    </s.Svg>
);