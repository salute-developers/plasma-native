import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboomMiniOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 7.875C3 7.25368 3.50368 6.75 4.125 6.75H31.875C32.4963 6.75 33 7.25368 33 7.875C33 8.27115 32.7952 8.61948 32.4858 8.81992C32.8104 9.29926 33 9.87749 33 10.5V15.35C33 20.2628 31.9412 22.3968 30.7404 23.7068C30.4538 24.0194 30.1702 24.273 29.9269 24.4881L29.8849 24.5253C29.6525 24.7305 29.474 24.8883 29.3224 25.0537C29.047 25.3541 28.875 25.6593 28.875 26.25V27.375C28.875 28.4105 28.0355 29.25 27 29.25H9C7.96447 29.25 7.125 28.4105 7.125 27.375V26.25C7.125 25.6593 6.95298 25.3541 6.6776 25.0537C6.52598 24.8883 6.34746 24.7305 6.11512 24.5252L6.07308 24.4881C5.82983 24.273 5.54623 24.0194 5.25963 23.7068C4.05876 22.3968 3 20.2628 3 15.35V10.5C3 9.87749 3.18961 9.29926 3.51422 8.81992C3.20476 8.61948 3 8.27115 3 7.875ZM6 9C5.17157 9 4.5 9.67157 4.5 10.5V15.35C4.5 20.0372 5.50374 21.7533 6.36537 22.6932C6.59439 22.9431 6.82642 23.152 7.06657 23.3643L7.12339 23.4144C7.33909 23.6048 7.57567 23.8135 7.78333 24.0401C8.28139 24.5834 8.625 25.2407 8.625 26.25H10.125C10.125 25.5805 10.0367 25.1803 9.9246 24.8955C9.80925 24.6023 9.65384 24.3859 9.41566 24.0545C9.17959 23.7261 8.89264 23.3221 8.63375 22.7297C8.37603 22.14 8.15729 21.3911 8.00857 20.3567C7.94962 19.9467 8.23421 19.5666 8.6442 19.5076C9.0542 19.4487 9.43436 19.7333 9.49331 20.1433C9.62687 21.0722 9.81477 21.6864 10.0082 22.1291C10.2005 22.5691 10.4093 22.8669 10.6337 23.1791L10.6666 23.2248C10.8821 23.5241 11.1352 23.8756 11.3204 24.3462C11.5184 24.8492 11.625 25.4453 11.625 26.25H13.5C13.5 25.5043 13.4471 25.154 13.3914 24.9565C13.3519 24.8163 13.3162 24.7524 13.2406 24.6167C13.2112 24.564 13.1756 24.5002 13.1315 24.4171C12.8083 23.8079 12.5285 22.9407 12.4036 20.2852C12.3842 19.8715 12.7038 19.5203 13.1175 19.5008C13.5313 19.4814 13.8825 19.801 13.902 20.2148C14.0241 22.8112 14.2929 23.4056 14.4566 23.7142C14.4722 23.7436 14.4909 23.7767 14.5117 23.8136C14.6057 23.9801 14.7433 24.2237 14.8352 24.5495C14.9466 24.9449 15 25.4572 15 26.25H17.25V20.25C17.25 19.8358 17.5858 19.5 18 19.5C18.4142 19.5 18.75 19.8358 18.75 20.25V26.25H21C21 25.4572 21.0534 24.9449 21.1648 24.5495C21.2567 24.2237 21.3942 23.9802 21.4882 23.8137C21.5091 23.7768 21.5278 23.7436 21.5434 23.7142C21.7071 23.4056 21.9759 22.8112 22.098 20.2148C22.1175 19.801 22.4687 19.4814 22.8825 19.5008C23.2962 19.5203 23.6158 19.8715 23.5964 20.2852C23.4715 22.9407 23.1917 23.8079 22.8685 24.4171C22.8244 24.5003 22.7889 24.5639 22.7594 24.6167C22.6838 24.7524 22.6481 24.8163 22.6086 24.9565C22.5529 25.154 22.5 25.5043 22.5 26.25H24.375C24.375 25.4453 24.4816 24.8492 24.6796 24.3462C24.8648 23.8756 25.1179 23.5241 25.3334 23.2248L25.3663 23.1791C25.5907 22.8669 25.7995 22.5691 25.9918 22.1291C26.1852 21.6864 26.3731 21.0722 26.5067 20.1433C26.5656 19.7333 26.9458 19.4487 27.3558 19.5076C27.7658 19.5666 28.0504 19.9467 27.9914 20.3567C27.8427 21.3911 27.624 22.14 27.3662 22.7297C27.1074 23.3221 26.8204 23.7261 26.5843 24.0545C26.3462 24.3859 26.1908 24.6023 26.0754 24.8955C25.9633 25.1803 25.875 25.5805 25.875 26.25H27.375C27.375 25.2407 27.7186 24.5834 28.2167 24.0401C28.4243 23.8135 28.6609 23.6048 28.8766 23.4144L28.9334 23.3643C29.1736 23.152 29.4056 22.9431 29.6346 22.6932C30.4963 21.7533 31.5 20.0372 31.5 15.35V10.5C31.5 9.67157 30.8284 9 30 9H6Z"
            fill="currentColor"
        />
    </s.Svg>
);
