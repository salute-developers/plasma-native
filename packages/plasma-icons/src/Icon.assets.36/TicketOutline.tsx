import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TicketOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.70659 19.2945C2.50408 19.4969 2.31185 19.6891 2.16319 19.8642C2.00122 20.055 1.83315 20.2902 1.73438 20.5942C1.5957 21.021 1.5957 21.4808 1.73438 21.9076C1.83315 22.2115 2.00122 22.4468 2.16319 22.6375C2.31185 22.8127 2.50408 23.0048 2.70659 23.2073L4.07323 24.574C4.24777 24.7485 4.40178 24.9025 4.53198 25.0216C4.66055 25.1392 4.828 25.2819 5.03174 25.3858L5.05289 25.3967C5.13137 25.4372 5.27789 25.5128 5.4426 25.557C5.60731 25.6013 5.77201 25.6093 5.86022 25.6136L5.88397 25.6148C6.04604 25.6234 6.2017 25.6001 6.30253 25.5826C6.41923 25.5623 6.55109 25.5332 6.69207 25.4994C6.97063 25.4326 7.34648 25.3324 7.82181 25.2058L7.83701 25.2017C8.67079 24.9796 9.60819 25.1996 10.2759 25.8673C10.9436 26.535 11.1636 27.4724 10.9415 28.3062L10.9374 28.3215C10.8108 28.7968 10.7106 29.1726 10.6438 29.4511C10.61 29.5921 10.5809 29.724 10.5606 29.8407C10.5431 29.9415 10.5198 30.0972 10.5284 30.2592L10.5296 30.283C10.5339 30.3712 10.5419 30.5359 10.5862 30.7006C10.6304 30.8653 10.706 31.0118 10.7465 31.0903L10.7574 31.1115C10.8613 31.3152 11.004 31.4827 11.1216 31.6112C11.2407 31.7414 11.3947 31.8954 11.5692 32.0699L12.9359 33.4366C13.1383 33.6391 13.3305 33.8314 13.5056 33.98C13.6964 34.142 13.9317 34.31 14.2356 34.4088C14.6624 34.5475 15.1222 34.5475 15.549 34.4088C15.853 34.31 16.0882 34.142 16.279 33.98C16.454 33.8314 16.6462 33.6392 16.8487 33.4367L33.442 16.8433C33.6445 16.6409 33.8367 16.4487 33.9854 16.2736C34.1473 16.0828 34.3154 15.8476 34.4142 15.5436C34.5529 15.1168 34.5529 14.6571 34.4142 14.2303C34.3154 13.9263 34.1473 13.6911 33.9854 13.5003C33.8367 13.3252 33.6445 13.133 33.442 12.9306L32.0753 11.5638C31.9008 11.3894 31.7467 11.2353 31.6166 11.1162C31.488 10.9987 31.3206 10.856 31.1168 10.7521L31.0957 10.7412C31.0172 10.7007 30.8707 10.625 30.706 10.5808C30.5413 10.5365 30.3766 10.5285 30.2883 10.5242L30.2646 10.5231C30.1025 10.5144 29.9469 10.5378 29.846 10.5553C29.7293 10.5755 29.5975 10.6047 29.4565 10.6385C29.178 10.7052 28.8023 10.8053 28.3271 10.932L28.3116 10.9361C27.4778 11.1583 26.5404 10.9382 25.8727 10.2705C25.2049 9.60282 24.9849 8.66542 25.2071 7.83164L25.2112 7.81631C25.3378 7.34104 25.4379 6.96524 25.5047 6.6867C25.5385 6.54572 25.5677 6.41386 25.5879 6.29715C25.6054 6.19633 25.6288 6.04067 25.6201 5.8786L25.6189 5.85486C25.6147 5.76664 25.6067 5.60192 25.5624 5.43723C25.5182 5.27253 25.4425 5.12601 25.402 5.04753L25.3911 5.02637C25.2872 4.82263 25.1445 4.65517 25.027 4.52661C24.9079 4.39646 24.754 4.24253 24.5795 4.06807L23.2127 2.7012C23.0102 2.49872 22.818 2.30646 22.6429 2.15782C22.4521 1.99585 22.2169 1.82778 21.9129 1.72901C21.4861 1.59033 21.0264 1.59033 20.5996 1.729C20.2956 1.82778 20.0604 1.99585 19.8696 2.15782C19.6945 2.30647 19.5023 2.49871 19.2998 2.70122L2.70659 19.2945ZM3.63221 21.2723C3.62976 21.2581 3.62976 21.2437 3.63221 21.2295C3.6409 21.2169 3.65786 21.1939 3.68787 21.1586C3.77711 21.0535 3.90985 20.9196 4.14428 20.6852L20.6906 4.13891C20.925 3.90448 21.0588 3.77174 21.164 3.6825C21.1993 3.6525 21.2223 3.63554 21.2349 3.62685C21.249 3.62439 21.2635 3.62439 21.2776 3.62684C21.2902 3.63553 21.3132 3.6525 21.3486 3.6825C21.4537 3.77174 21.5875 3.90448 21.8219 4.13891L23.1501 5.46704C23.3442 5.66115 23.4659 5.78319 23.5511 5.87632C23.5877 5.91643 23.6081 5.94112 23.6177 5.95324L23.6174 5.9552C23.6078 6.01052 23.5899 6.09504 23.5599 6.22037C23.4997 6.47145 23.4061 6.82285 23.2745 7.31671C22.8736 8.82121 23.2726 10.4989 24.4584 11.6847C25.6443 12.8706 27.322 13.2696 28.8265 12.8687C29.3203 12.7371 29.6717 12.6435 29.9228 12.5833C30.0482 12.5533 30.1327 12.5354 30.188 12.5258L30.1899 12.5255C30.2021 12.5351 30.2268 12.5555 30.2669 12.5921C30.36 12.6773 30.482 12.799 30.6762 12.9931L32.0043 14.3212C32.2387 14.5557 32.3715 14.6895 32.4607 14.7946C32.4907 14.83 32.5077 14.853 32.5163 14.8655C32.5188 14.8797 32.5188 14.8942 32.5164 14.9083C32.5077 14.9209 32.4907 14.9439 32.4607 14.9792C32.3715 15.0843 32.2387 15.2182 32.0043 15.4526L15.458 31.9989C15.2236 32.2333 15.0897 32.3661 14.9846 32.4553C14.9493 32.4853 14.9263 32.5023 14.9137 32.511C14.8995 32.5134 14.8851 32.5134 14.8709 32.511C14.8583 32.5023 14.8353 32.4853 14.8 32.4553C14.6949 32.3661 14.561 32.2333 14.3266 31.9989L12.9985 30.6708C12.8044 30.4767 12.6827 30.3546 12.5975 30.2615C12.5608 30.2214 12.5405 30.1967 12.5309 30.1846L12.5312 30.1826C12.5408 30.1273 12.5587 30.0428 12.5887 29.9175C12.6489 29.6664 12.7425 29.315 12.874 28.8211C13.2749 27.3166 12.8759 25.6389 11.6901 24.4531C10.5043 23.2673 8.82658 22.8683 7.32207 23.2692C6.82822 23.4007 6.47682 23.4943 6.22574 23.5545C6.10041 23.5845 6.01589 23.6024 5.96057 23.612L5.95862 23.6123C5.94649 23.6027 5.9218 23.5824 5.88169 23.5457C5.78856 23.4605 5.66652 23.3388 5.47241 23.1447L4.14428 21.8166C3.90985 21.5821 3.77711 21.4483 3.68787 21.3432C3.65786 21.3078 3.6409 21.2849 3.63221 21.2723ZM14.6863 14.1788C14.3619 14.0118 14.0142 14.3595 14.1812 14.6839L15.5993 17.4384C15.6739 17.5833 15.6464 17.7599 15.5311 17.8752L13.3607 20.0455C13.1048 20.3015 13.3241 20.7357 13.682 20.6815L16.7434 20.2181C16.9025 20.194 17.0593 20.2742 17.1329 20.4172L18.5583 23.1858C18.7248 23.5093 19.208 23.43 19.2625 23.0703L19.722 20.0343C19.7466 19.8718 19.8742 19.7442 20.0367 19.7196L23.0727 19.2601C23.4324 19.2057 23.5116 18.7224 23.1882 18.5559L20.4196 17.1305C20.2765 17.0569 20.1964 16.9001 20.2205 16.741L20.6839 13.6796C20.738 13.3217 20.3039 13.1024 20.0479 13.3583L17.8776 15.5287C17.7623 15.644 17.5857 15.6716 17.4408 15.5969L14.6863 14.1788Z"
            fill="currentColor"
        />
    </s.Svg>
);