import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ObjectsSymbolsFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.963 4.24466C25.9266 2.58511 28.3233 2.58512 29.2869 4.24466L33.4314 11.3824C34.3992 13.0491 33.1967 15.1378 31.2695 15.1378H22.9805C21.0532 15.1378 19.8507 13.0491 20.8185 11.3824L24.963 4.24466ZM27.5574 5.24893C27.3646 4.91702 26.8853 4.91702 26.6926 5.24893L22.5481 12.3867C22.3545 12.72 22.595 13.1378 22.9805 13.1378H31.2695C31.6549 13.1378 31.8954 12.72 31.7019 12.3867L27.5574 5.24893ZM4.63594 23.285C4.21418 23.7067 3.85557 24.0653 3.58531 24.3836C3.30152 24.7179 3.05689 25.073 2.91639 25.5055C2.7043 26.1582 2.7043 26.8613 2.91639 27.5141C3.05689 27.9465 3.30152 28.3016 3.58531 28.6359C3.85557 28.9542 4.21417 29.3128 4.63593 29.7346L7.02515 32.1238C7.44688 32.5455 7.80549 32.9042 8.12384 33.1744C8.45812 33.4582 8.81324 33.7028 9.24566 33.8433C9.8984 34.0554 10.6015 34.0554 11.2543 33.8433C11.6867 33.7028 12.0418 33.4582 12.3761 33.1744C12.6945 32.9042 13.053 32.5455 13.4748 32.1238L15.864 29.7346C16.2857 29.3128 16.6444 28.9543 16.9146 28.6359C17.1984 28.3016 17.443 27.9465 17.5835 27.5141C17.7956 26.8613 17.7956 26.1582 17.5835 25.5055C17.443 25.073 17.1984 24.7179 16.9146 24.3836C16.6444 24.0653 16.2857 23.7067 15.864 23.2849L13.4748 20.8958C13.053 20.474 12.6945 20.1154 12.3761 19.8451C12.0418 19.5613 11.6867 19.3167 11.2543 19.1762C10.6015 18.9641 9.8984 18.9641 9.24566 19.1762C8.81324 19.3167 8.45812 19.5613 8.12384 19.8451C7.80549 20.1154 7.44691 20.474 7.02518 20.8957L4.63594 23.285ZM4.8185 26.1235C4.84492 26.0422 4.90651 25.9177 5.10998 25.678C5.32103 25.4294 5.62085 25.1285 6.07803 24.6713L8.41149 22.3378C8.86867 21.8806 9.16959 21.5808 9.41819 21.3698C9.65787 21.1663 9.78238 21.1047 9.86369 21.0783C10.1147 20.9967 10.3852 20.9967 10.6362 21.0783C10.7176 21.1047 10.8421 21.1663 11.0817 21.3698C11.3303 21.5808 11.6313 21.8806 12.0884 22.3378L14.4219 24.6713C14.8791 25.1285 15.1789 25.4294 15.3899 25.678C15.5934 25.9177 15.655 26.0422 15.6814 26.1235C15.763 26.3745 15.763 26.645 15.6814 26.896C15.655 26.9774 15.5934 27.1019 15.3899 27.3415C15.1789 27.5901 14.8791 27.8911 14.4219 28.3482L12.0884 30.6817C11.6313 31.1389 11.3303 31.4387 11.0817 31.6497C10.8421 31.8532 10.7176 31.9148 10.6362 31.9412C10.3852 32.0228 10.1147 32.0228 9.86369 31.9412C9.78238 31.9148 9.65787 31.8532 9.41819 31.6497C9.16959 31.4387 8.86867 31.1389 8.41149 30.6817L6.07803 28.3482C5.62085 27.8911 5.32103 27.5901 5.10998 27.3415C4.90651 27.1019 4.84492 26.9774 4.8185 26.896C4.73693 26.645 4.73693 26.3745 4.8185 26.1235ZM25.4355 20.2627C24.8391 20.2627 24.332 20.2627 23.9157 20.2967C23.4787 20.3324 23.0546 20.4105 22.6495 20.6169C22.038 20.9285 21.5408 21.4257 21.2292 22.0372C21.0228 22.4423 20.9446 22.8664 20.9089 23.3035C20.8749 23.7197 20.8749 24.2268 20.875 24.8233V28.2021C20.8749 28.7986 20.8749 29.3057 20.9089 29.7219C20.9446 30.159 21.0228 30.583 21.2292 30.9882C21.5408 31.5997 22.038 32.0969 22.6495 32.4085C23.0546 32.6149 23.4787 32.693 23.9157 32.7287C24.332 32.7627 24.8391 32.7627 25.4356 32.7627H28.8144C29.4108 32.7627 29.918 32.7627 30.3342 32.7287C30.7712 32.693 31.1953 32.6149 31.6004 32.4085C32.212 32.0969 32.7091 31.5997 33.0207 30.9882C33.2272 30.583 33.3053 30.159 33.341 29.7219C33.375 29.3057 33.375 28.7986 33.375 28.2021V24.8233C33.375 24.2268 33.375 23.7197 33.341 23.3035C33.3053 22.8664 33.2272 22.4423 33.0207 22.0372C32.7091 21.4257 32.212 20.9285 31.6004 20.6169C31.1953 20.4105 30.7712 20.3324 30.3342 20.2967C29.918 20.2627 29.4108 20.2627 28.8144 20.2627H25.4355ZM23.5575 22.3989C23.6337 22.3601 23.7652 22.3156 24.0786 22.29C24.4036 22.2635 24.8284 22.2627 25.475 22.2627H28.775C29.4215 22.2627 29.8463 22.2635 30.1713 22.29C30.4847 22.3156 30.6163 22.3601 30.6925 22.3989C30.9277 22.5188 31.1189 22.71 31.2387 22.9452C31.2775 23.0214 31.322 23.153 31.3476 23.4663C31.3742 23.7914 31.375 24.2161 31.375 24.8627V28.1627C31.375 28.8093 31.3742 29.234 31.3476 29.5591C31.322 29.8724 31.2775 30.004 31.2387 30.0802C31.1189 30.3154 30.9277 30.5066 30.6925 30.6265C30.6163 30.6653 30.4847 30.7098 30.1713 30.7354C29.8463 30.7619 29.4215 30.7627 28.775 30.7627H25.475C24.8284 30.7627 24.4036 30.7619 24.0786 30.7354C23.7652 30.7098 23.6337 30.6653 23.5575 30.6265C23.3223 30.5066 23.131 30.3154 23.0112 30.0802C22.9724 30.004 22.9279 29.8724 22.9023 29.5591C22.8757 29.234 22.875 28.8093 22.875 28.1627V24.8627C22.875 24.2161 22.8757 23.7914 22.9023 23.4663C22.9279 23.153 22.9724 23.0214 23.0112 22.9452C23.131 22.71 23.3223 22.5188 23.5575 22.3989ZM5.99996 10.0128C5.99996 7.45844 8.07065 5.38776 10.625 5.38776C13.1793 5.38776 15.25 7.45844 15.25 10.0128C15.25 12.5671 13.1793 14.6378 10.625 14.6378C8.07065 14.6378 5.99996 12.5671 5.99996 10.0128ZM10.625 3.38776C6.96608 3.38776 3.99996 6.35387 3.99996 10.0128C3.99996 13.6716 6.96608 16.6378 10.625 16.6378C14.2839 16.6378 17.25 13.6716 17.25 10.0128C17.25 6.35387 14.2839 3.38776 10.625 3.38776Z"
            fill="currentColor"
        />
        <s.Path d="M22 22H32V31H22V22Z" fill="currentColor" />
        <s.Path d="M10.1484 19.5L17.0692 26.7182L9.85103 33.639L2.93021 26.4208L10.1484 19.5Z" fill="currentColor" />
        <s.Path d="M27 4L33.0621 13.75H20.9378L27 4Z" fill="currentColor" />
    </s.Svg>
);
