import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HourglassBotFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.39016 2.00005C6.80075 1.99961 6.34491 1.99928 5.95182 2.11852C5.07292 2.38513 4.38513 3.07292 4.11852 3.95182C3.99928 4.34491 3.99961 4.80075 4.00005 5.39016L4.00011 5.50011C4.00011 7.18178 5.03018 8.66793 6.10647 9.77986C7.02597 10.7298 8.06992 11.4996 8.82192 12.0001C8.06992 12.5006 7.02597 13.2704 6.10647 14.2204C5.03018 15.3323 4.00011 16.8184 4.00011 18.5001L4.00005 18.6101C3.99961 19.1995 3.99928 19.6553 4.11852 20.0484C4.38513 20.9273 5.07292 21.6151 5.95183 21.8817C6.34492 22.0009 6.80075 22.0006 7.39016 22.0002H16.6101C17.1995 22.0006 17.6553 22.0009 18.0484 21.8817C18.9273 21.6151 19.6151 20.9273 19.8817 20.0484C20.0009 19.6553 20.0006 19.1995 20.0002 18.6101L20.0001 18.5001C20.0001 16.8184 18.97 15.3323 17.8937 14.2204C16.9742 13.2704 15.9303 12.5006 15.1783 12.0001C15.9303 11.4996 16.9742 10.7298 17.8937 9.77986C18.97 8.66793 20.0001 7.18178 20.0001 5.50011L20.0002 5.39016C20.0006 4.80077 20.0009 4.34491 19.8817 3.95182C19.6151 3.07292 18.9273 2.38513 18.0484 2.11852C17.6553 1.99928 17.1995 1.99961 16.6101 2.00005H7.39016ZM13.1778 14.2784L13.156 14.2647C12.5132 13.8609 11.5891 13.7965 10.8438 14.2647L10.822 14.2784C10.1688 14.6901 9.12059 15.4196 8.26184 16.3068C7.58656 17.0045 7.11361 17.703 7.01891 18.6095C7.00642 18.7291 7.00018 18.7889 7.02465 18.8477C7.04458 18.8956 7.08788 18.9442 7.1331 18.9696C7.18862 19.0007 7.25605 19.0016 7.39092 19.0033C10.4619 19.0422 13.5379 19.0422 16.6089 19.0033C16.7437 19.0016 16.8112 19.0007 16.8667 18.9696C16.9119 18.9442 16.9552 18.8956 16.9751 18.8477C16.9996 18.7889 16.9934 18.7291 16.9809 18.6095C16.8862 17.703 16.4132 17.0045 15.7379 16.3068C14.8792 15.4196 13.831 14.6901 13.1778 14.2784Z"
            fill="currentColor"
        />
    </s.Svg>
);