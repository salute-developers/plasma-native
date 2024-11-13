import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Mention: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1483 3.50129C11.0323 3.48181 9.92331 3.68235 8.88474 4.09145C7.84617 4.50055 6.89836 5.11021 6.0954 5.88561C5.29245 6.66101 4.65009 7.58698 4.20499 8.61063C3.75989 9.63429 3.52078 10.7356 3.50129 11.8517C3.48181 12.9677 3.68235 14.0767 4.09145 15.1153C4.50055 16.1538 5.11021 17.1016 5.88561 17.9046C6.66101 18.7075 7.58698 19.3499 8.61063 19.795C9.63429 20.2401 10.7356 20.4792 11.8517 20.4987C11.8517 20.4987 11.8666 20.4988 11.904 20.4989L12.0364 20.4992L13 20.5C13.4142 20.5 13.75 20.8358 13.75 21.25C13.75 21.6642 13.4142 22 13 22C12.9533 22 11.888 21.9996 11.8255 21.9985C10.5125 21.9756 9.21681 21.6942 8.01251 21.1706C6.80821 20.647 5.71884 19.8912 4.8066 18.9466C3.89436 18.0019 3.17712 16.8869 2.69582 15.665C2.21453 14.4432 1.9786 13.1385 2.00152 11.8255C2.02444 10.5125 2.30575 9.21681 2.8294 8.01251C3.35304 6.80821 4.10877 5.71884 5.05342 4.8066C5.99807 3.89436 7.11315 3.17712 8.33499 2.69582C9.55683 2.21453 10.8615 1.9786 12.1745 2.00152C13.4875 2.02444 14.7832 2.30576 15.9875 2.8294C17.1918 3.35304 18.2812 4.10877 19.1934 5.05342C20.1056 5.99807 20.8229 7.11315 21.3042 8.33499C21.7855 9.55683 22.0214 10.8615 21.9985 12.1745C21.9756 13.4875 21.6942 14.7832 21.1706 15.9875C21.1491 16.0369 21.1272 16.0861 21.105 16.1351C21.0538 16.2631 20.9939 16.3872 20.9258 16.5066C20.8203 16.6916 20.6951 16.8654 20.552 17.0247C20.2667 17.3425 19.9169 17.5957 19.5259 17.7674C19.1349 17.939 18.7117 18.0253 18.2847 18.0203C17.8577 18.0153 17.4367 17.9192 17.0498 17.7385C16.6629 17.5577 16.3191 17.2964 16.0413 16.9721C15.841 16.7383 15.6784 16.4756 15.5586 16.1936C14.5997 17.0081 13.3576 17.5 12 17.5C8.96244 17.5 6.50001 15.0376 6.50001 12C6.50001 8.96242 8.96244 6.49999 12 6.49999C15.0376 6.49999 17.5 8.96242 17.5 12C17.5 12.7864 17.3345 13.5361 17.0357 14.2146L16.9735 14.3587L16.9671 14.3721C16.9013 14.5093 16.8567 14.6561 16.8349 14.8074C16.8046 15.0187 16.8197 15.2341 16.8793 15.4392C16.9389 15.6442 17.0416 15.8341 17.1805 15.9963C17.3194 16.1585 17.4913 16.2891 17.6848 16.3795C17.8782 16.4699 18.0887 16.5179 18.3022 16.5204C18.5157 16.5229 18.7273 16.4798 18.9228 16.3939C19.1183 16.3081 19.2932 16.1815 19.4359 16.0226C19.5032 15.9476 19.5626 15.8663 19.6133 15.7799C19.651 15.7039 19.6876 15.6273 19.7231 15.5501C19.7328 15.5246 19.7417 15.4987 19.75 15.4727L19.7572 15.4749C19.77 15.4465 19.7826 15.418 19.795 15.3894C20.2401 14.3657 20.4792 13.2644 20.4987 12.1483C20.5182 11.0323 20.3176 9.92331 19.9085 8.88474C19.4994 7.84618 18.8898 6.89836 18.1144 6.0954C17.339 5.29245 16.413 4.65009 15.3894 4.20499C14.3657 3.75989 13.2644 3.52078 12.1483 3.50129ZM12 7.99999C9.79087 7.99999 8.00001 9.79085 8.00001 12C8.00001 14.2091 9.79087 16 12 16C13.6343 16 15.0413 15.0198 15.662 13.6122C15.8791 13.12 16 12.5751 16 12C16 9.79085 14.2091 7.99999 12 7.99999Z"
            fill="currentColor"
        />
    </s.Svg>
);
