import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SymbolsOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.963 4.24466C25.9266 2.58511 28.3234 2.58512 29.287 4.24466L33.4315 11.3824C34.3992 13.0491 33.1967 15.1378 31.2695 15.1378H22.9805C21.0532 15.1378 19.8508 13.0491 20.8185 11.3824L24.963 4.24466ZM27.5574 5.24893C27.3647 4.91702 26.8853 4.91702 26.6926 5.24893L22.5481 12.3867C22.3546 12.72 22.595 13.1378 22.9805 13.1378H31.2695C31.655 13.1378 31.8954 12.72 31.7019 12.3867L27.5574 5.24893ZM25.4356 20.2628C24.8391 20.2627 24.332 20.2627 23.9158 20.2967C23.4787 20.3324 23.0546 20.4106 22.6495 20.617C22.038 20.9286 21.5408 21.4258 21.2292 22.0373C21.0228 22.4424 20.9447 22.8665 20.909 23.3035C20.875 23.7198 20.875 24.2269 20.875 24.8233V28.2022C20.875 28.7986 20.875 29.3058 20.909 29.722C20.9447 30.159 21.0228 30.5831 21.2292 30.9882C21.5408 31.5998 22.038 32.0969 22.6495 32.4085C23.0546 32.6149 23.4787 32.6931 23.9158 32.7288C24.332 32.7628 24.8391 32.7628 25.4356 32.7628H28.8144C29.4109 32.7628 29.918 32.7628 30.3342 32.7288C30.7713 32.6931 31.1953 32.6149 31.6005 32.4085C32.212 32.0969 32.7092 31.5998 33.0208 30.9882C33.2272 30.5831 33.3053 30.159 33.341 29.722C33.375 29.3058 33.375 28.7986 33.375 28.2022V24.8234C33.375 24.2269 33.375 23.7198 33.341 23.3035C33.3053 22.8665 33.2272 22.4424 33.0208 22.0373C32.7092 21.4258 32.212 20.9286 31.6005 20.617C31.1953 20.4106 30.7713 20.3324 30.3342 20.2967C29.918 20.2627 29.4109 20.2627 28.8144 20.2628H25.4356ZM23.5575 22.399C23.6337 22.3602 23.7653 22.3157 24.0786 22.2901C24.4037 22.2635 24.8284 22.2628 25.475 22.2628H28.775C29.4216 22.2628 29.8463 22.2635 30.1714 22.2901C30.4847 22.3157 30.6163 22.3602 30.6925 22.399C30.9277 22.5188 31.1189 22.7101 31.2388 22.9453C31.2776 23.0215 31.3221 23.153 31.3477 23.4664C31.3742 23.7914 31.375 24.2162 31.375 24.8628V28.1628C31.375 28.8093 31.3742 29.2341 31.3477 29.5591C31.3221 29.8725 31.2776 30.0041 31.2388 30.0802C31.1189 30.3155 30.9277 30.5067 30.6925 30.6265C30.6163 30.6653 30.4847 30.7098 30.1714 30.7354C29.8463 30.762 29.4216 30.7628 28.775 30.7628H25.475C24.8284 30.7628 24.4037 30.762 24.0786 30.7354C23.7653 30.7098 23.6337 30.6653 23.5575 30.6265C23.3223 30.5067 23.1311 30.3155 23.0112 30.0802C22.9724 30.0041 22.9279 29.8725 22.9023 29.5591C22.8758 29.2341 22.875 28.8093 22.875 28.1628V24.8628C22.875 24.2162 22.8758 23.7914 22.9023 23.4664C22.9279 23.153 22.9724 23.0215 23.0112 22.9453C23.1311 22.7101 23.3223 22.5188 23.5575 22.399ZM15.8399 22.7116C16.2304 22.321 16.2304 21.6879 15.8399 21.2973C15.4494 20.9068 14.8162 20.9068 14.4257 21.2973L10.625 25.098L6.8243 21.2973C6.43378 20.9068 5.80061 20.9068 5.41009 21.2973C5.01956 21.6879 5.01956 22.321 5.41009 22.7116L9.21079 26.5123L5.41009 30.313C5.01956 30.7035 5.01956 31.3366 5.41009 31.7272C5.80061 32.1177 6.43378 32.1177 6.8243 31.7272L10.625 27.9265L14.4257 31.7272C14.8162 32.1177 15.4494 32.1177 15.8399 31.7272C16.2304 31.3366 16.2304 30.7035 15.8399 30.313L12.0392 26.5123L15.8399 22.7116ZM6 10.0128C6 7.45844 8.07068 5.38776 10.625 5.38776C13.1793 5.38776 15.25 7.45844 15.25 10.0128C15.25 12.5671 13.1793 14.6378 10.625 14.6378C8.07068 14.6378 6 12.5671 6 10.0128ZM10.625 3.38776C6.96611 3.38776 4 6.35387 4 10.0128C4 13.6716 6.96611 16.6378 10.625 16.6378C14.2839 16.6378 17.25 13.6716 17.25 10.0128C17.25 6.35387 14.2839 3.38776 10.625 3.38776Z"
            fill="currentColor"
        />
    </s.Svg>
);
