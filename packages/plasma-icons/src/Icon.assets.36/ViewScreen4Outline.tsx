import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ViewScreen4Outline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.36576 6C5.97638 5.99998 5.62596 5.99996 5.33447 6.02378C5.0223 6.04928 4.69069 6.10701 4.36566 6.27261C3.89504 6.51241 3.51241 6.89504 3.27261 7.36566C3.107 7.69069 3.04928 8.02231 3.02378 8.33447C2.99996 8.62597 2.99998 8.97635 3 9.36575V12.9784C2.99998 13.3678 2.99996 13.7182 3.02378 14.0097C3.04928 14.3219 3.107 14.6535 3.27261 14.9785C3.51241 15.4491 3.89504 15.8318 4.36566 16.0716C4.69069 16.2372 5.0223 16.2949 5.33447 16.3204C5.62597 16.3442 5.97634 16.3442 6.36574 16.3442H12.9852C13.3746 16.3442 13.7251 16.3442 14.0166 16.3204C14.3287 16.2949 14.6603 16.2372 14.9854 16.0716C15.456 15.8318 15.8386 15.4491 16.0784 14.9785C16.244 14.6535 16.3017 14.3219 16.3272 14.0097C16.3511 13.7182 16.351 13.3678 16.351 12.9784V9.36578C16.351 8.97638 16.3511 8.62597 16.3272 8.33447C16.3017 8.02231 16.244 7.69069 16.0784 7.36566C15.8386 6.89504 15.456 6.51241 14.9854 6.27261C14.6603 6.10701 14.3287 6.04928 14.0166 6.02378C13.7251 5.99996 13.3747 5.99998 12.9853 6H6.36576ZM5.27364 8.05463C5.27407 8.05441 5.27629 8.05328 5.28152 8.05141C5.28697 8.04947 5.29702 8.04625 5.31334 8.0424C5.34764 8.03432 5.40408 8.02475 5.49733 8.01713C5.69749 8.00078 5.96499 8 6.40186 8H12.9492C13.386 8 13.6535 8.00078 13.8537 8.01713C13.9469 8.02475 14.0034 8.03432 14.0377 8.0424C14.054 8.04625 14.0641 8.04947 14.0695 8.05141C14.0747 8.05328 14.077 8.05441 14.0774 8.05463C14.1717 8.10267 14.2484 8.17934 14.2964 8.27364C14.2966 8.27407 14.2977 8.27629 14.2996 8.28152C14.3016 8.28697 14.3048 8.29702 14.3086 8.31334C14.3167 8.34764 14.3263 8.40408 14.3339 8.49733C14.3502 8.69749 14.351 8.96499 14.351 9.40186V12.9423C14.351 13.3792 14.3502 13.6467 14.3339 13.8468C14.3263 13.9401 14.3167 13.9965 14.3086 14.0308C14.3048 14.0471 14.3016 14.0572 14.2996 14.0626C14.2977 14.0679 14.2966 14.0701 14.2964 14.0705C14.2484 14.1648 14.1717 14.2415 14.0774 14.2895C14.077 14.2898 14.0747 14.2909 14.0695 14.2928C14.0641 14.2947 14.054 14.2979 14.0377 14.3018C14.0034 14.3098 13.9469 14.3194 13.8537 14.327C13.6535 14.3434 13.386 14.3442 12.9492 14.3442H6.40186C5.96499 14.3442 5.69749 14.3434 5.49733 14.327C5.40408 14.3194 5.34764 14.3098 5.31334 14.3018C5.29702 14.2979 5.28697 14.2947 5.28152 14.2928C5.27629 14.2909 5.27407 14.2898 5.27364 14.2895C5.17934 14.2415 5.10267 14.1648 5.05463 14.0705C5.0544 14.0701 5.05328 14.0679 5.05141 14.0626C5.04947 14.0572 5.04624 14.0471 5.0424 14.0308C5.03432 13.9965 5.02475 13.9401 5.01713 13.8468C5.00078 13.6467 5 13.3792 5 12.9423V9.40186C5 8.96499 5.00078 8.69749 5.01713 8.49733C5.02475 8.40408 5.03432 8.34764 5.0424 8.31334C5.04624 8.29702 5.04947 8.28697 5.05141 8.28152C5.05328 8.27629 5.0544 8.27407 5.05463 8.27364C5.10267 8.17934 5.17934 8.10267 5.27364 8.05463ZM6.36576 19.6543C5.97637 19.6543 5.62596 19.6543 5.33447 19.6781C5.0223 19.7036 4.69068 19.7613 4.36566 19.9269C3.89503 20.1667 3.51241 20.5493 3.27261 21.02C3.107 21.345 3.04928 21.6766 3.02377 21.9888C2.99996 22.2803 2.99998 22.6306 3 23.0201V26.6327C2.99998 27.0221 2.99996 27.3725 3.02377 27.664C3.04928 27.9762 3.107 28.3078 3.27261 28.6328C3.51241 29.1034 3.89503 29.4861 4.36566 29.7258C4.69068 29.8915 5.0223 29.9492 5.33447 29.9747C5.62598 29.9985 5.97636 29.9985 6.36578 29.9985H12.9852C13.3747 29.9985 13.725 29.9985 14.0166 29.9747C14.3287 29.9492 14.6603 29.8915 14.9854 29.7258C15.456 29.4861 15.8386 29.1034 16.0784 28.6328C16.244 28.3078 16.3017 27.9762 16.3272 27.664C16.3511 27.3725 16.351 27.0221 16.351 26.6327V23.0201C16.351 22.6307 16.3511 22.2803 16.3272 21.9888C16.3017 21.6766 16.244 21.345 16.0784 21.02C15.8386 20.5493 15.456 20.1667 14.9854 19.9269C14.6603 19.7613 14.3287 19.7036 14.0166 19.6781C13.7251 19.6543 13.3747 19.6543 12.9853 19.6543H6.36576ZM5.27364 21.7089C5.27407 21.7087 5.27629 21.7076 5.28152 21.7057C5.28697 21.7038 5.29702 21.7005 5.31334 21.6967C5.34764 21.6886 5.40408 21.679 5.49733 21.6714C5.69748 21.6551 5.96499 21.6543 6.40186 21.6543H12.9492C13.386 21.6543 13.6535 21.6551 13.8537 21.6714C13.9469 21.679 14.0034 21.6886 14.0377 21.6967C14.054 21.7005 14.0641 21.7038 14.0695 21.7057C14.0747 21.7076 14.0769 21.7087 14.0774 21.7089C14.1717 21.757 14.2483 21.8336 14.2964 21.9279C14.2966 21.9284 14.2977 21.9306 14.2996 21.9358C14.3016 21.9413 14.3048 21.9513 14.3086 21.9676C14.3167 22.0019 14.3263 22.0584 14.3339 22.1516C14.3502 22.3518 14.351 22.6193 14.351 23.0562V26.5966C14.351 27.0335 14.3502 27.301 14.3339 27.5011C14.3263 27.5944 14.3167 27.6508 14.3086 27.6851C14.3048 27.7014 14.3016 27.7115 14.2996 27.7169C14.2977 27.7222 14.2966 27.7244 14.2964 27.7248C14.2483 27.8191 14.1717 27.8958 14.0774 27.9438C14.0769 27.9441 14.0747 27.9452 14.0695 27.947C14.0641 27.949 14.054 27.9522 14.0377 27.9561C14.0034 27.9641 13.9469 27.9737 13.8537 27.9813C13.6535 27.9977 13.386 27.9985 12.9492 27.9985H6.40186C5.96499 27.9985 5.69748 27.9977 5.49733 27.9813C5.40408 27.9737 5.34764 27.9641 5.31334 27.9561C5.29702 27.9522 5.28697 27.949 5.28152 27.947C5.27629 27.9452 5.27407 27.9441 5.27364 27.9438C5.17934 27.8958 5.10267 27.8191 5.05462 27.7248C5.0544 27.7244 5.05328 27.7222 5.05141 27.7169C5.04947 27.7115 5.04624 27.7014 5.0424 27.6851C5.03432 27.6508 5.02475 27.5944 5.01713 27.5011C5.00078 27.301 5 27.0335 5 26.5966V23.0562C5 22.6193 5.00078 22.3518 5.01713 22.1516C5.02475 22.0584 5.03432 22.0019 5.0424 21.9676C5.04624 21.9513 5.04947 21.9413 5.05141 21.9358C5.05328 21.9306 5.0544 21.9284 5.05462 21.9279C5.10267 21.8336 5.17934 21.757 5.27364 21.7089ZM23.0142 6H29.6337C30.0231 5.99998 30.3735 5.99996 30.665 6.02378C30.9772 6.04928 31.3088 6.10701 31.6338 6.27261C32.1044 6.51241 32.4871 6.89504 32.7268 7.36566C32.8925 7.69069 32.9502 8.02231 32.9757 8.33447C32.9995 8.62596 32.9995 8.9763 32.9995 9.36568V12.9784C32.9995 13.3678 32.9995 13.7182 32.9757 14.0097C32.9502 14.3219 32.8925 14.6535 32.7268 14.9785C32.4871 15.4491 32.1044 15.8318 31.6338 16.0716C31.3088 16.2372 30.9772 16.2949 30.665 16.3204C30.3735 16.3442 30.0231 16.3442 29.6337 16.3442H23.0142C22.6248 16.3442 22.2744 16.3442 21.9829 16.3204C21.6707 16.2949 21.3391 16.2372 21.0141 16.0716C20.5435 15.8318 20.1608 15.4491 19.921 14.9785C19.7554 14.6535 19.6977 14.3219 19.6722 14.0097C19.6484 13.7182 19.6484 13.3678 19.6484 12.9784V9.36576C19.6484 8.97635 19.6484 8.62598 19.6722 8.33447C19.6977 8.02231 19.7554 7.69069 19.921 7.36566C20.1608 6.89504 20.5435 6.51241 21.0141 6.27261C21.3391 6.10701 21.6707 6.04928 21.9829 6.02378C22.2744 5.99996 22.6248 5.99998 23.0142 6ZM21.93 8.05141C21.9268 8.05254 21.9248 8.05339 21.9235 8.05394L21.9221 8.05463C21.8278 8.10267 21.7511 8.17934 21.7031 8.27364C21.7028 8.27407 21.7017 8.27629 21.6999 8.28152C21.6979 8.28697 21.6947 8.29702 21.6908 8.31334C21.6828 8.34764 21.6732 8.40408 21.6656 8.49733C21.6492 8.69749 21.6484 8.96499 21.6484 9.40186V12.9423C21.6484 13.3792 21.6492 13.6467 21.6656 13.8468C21.6732 13.9401 21.6828 13.9965 21.6908 14.0308C21.6947 14.0471 21.6979 14.0572 21.6999 14.0626C21.7017 14.0679 21.7028 14.0701 21.7031 14.0705C21.7511 14.1648 21.8278 14.2415 21.9221 14.2895C21.9225 14.2898 21.9247 14.2909 21.93 14.2928C21.9354 14.2947 21.9455 14.2979 21.9618 14.3018C21.9961 14.3098 22.0525 14.3194 22.1458 14.327C22.3459 14.3434 22.6134 14.3442 23.0503 14.3442H29.5976C30.0345 14.3442 30.302 14.3434 30.5021 14.327C30.5954 14.3194 30.6518 14.3098 30.6861 14.3018C30.7024 14.2979 30.7125 14.2947 30.7179 14.2928C30.7213 14.2915 30.7235 14.2906 30.7247 14.2901C30.7253 14.2898 30.7257 14.2896 30.7258 14.2895C30.8201 14.2415 30.8968 14.1648 30.9448 14.0705L30.9456 14.069C30.9459 14.0682 30.9463 14.0672 30.9469 14.0658C30.9472 14.0649 30.9476 14.0638 30.948 14.0626C30.95 14.0572 30.9532 14.0471 30.9571 14.0308C30.9651 13.9965 30.9747 13.9401 30.9823 13.8468C30.9987 13.6467 30.9995 13.3792 30.9995 12.9423V9.40186C30.9995 8.96499 30.9987 8.69749 30.9823 8.49733C30.9747 8.40408 30.9651 8.34764 30.9571 8.31334C30.9532 8.29702 30.95 8.28697 30.948 8.28152C30.9462 8.27629 30.9451 8.27407 30.9448 8.27364C30.8968 8.17934 30.8201 8.10267 30.7258 8.05463C30.7254 8.05441 30.7232 8.05328 30.7179 8.05141C30.7125 8.04947 30.7024 8.04625 30.6861 8.0424C30.6518 8.03432 30.5954 8.02475 30.5021 8.01713C30.302 8.00078 30.0345 8 29.5976 8H23.0503C22.6134 8 22.3459 8.00078 22.1458 8.01713C22.0525 8.02475 21.9961 8.03432 21.9618 8.0424C21.9455 8.04625 21.9354 8.04947 21.93 8.05141ZM23.0142 19.6543C22.6248 19.6543 22.2744 19.6543 21.9829 19.6781C21.6707 19.7036 21.3391 19.7613 21.0141 19.9269C20.5435 20.1667 20.1608 20.5493 19.921 21.02C19.7554 21.345 19.6977 21.6766 19.6722 21.9888C19.6484 22.2802 19.6484 22.6306 19.6484 23.02V26.6327C19.6484 27.0221 19.6484 27.3725 19.6722 27.664C19.6977 27.9762 19.7554 28.3078 19.921 28.6328C20.1608 29.1034 20.5435 29.4861 21.0141 29.7258C21.3391 29.8915 21.6707 29.9492 21.9829 29.9747C22.2744 29.9985 22.6248 29.9985 23.0142 29.9985H29.6337C30.0231 29.9985 30.3735 29.9985 30.665 29.9747C30.9772 29.9492 31.3088 29.8915 31.6338 29.7258C32.1044 29.4861 32.4871 29.1034 32.7268 28.6328C32.8925 28.3078 32.9502 27.9762 32.9757 27.664C32.9995 27.3725 32.9995 27.0221 32.9995 26.6327V23.0201C32.9995 22.6307 32.9995 22.2803 32.9757 21.9888C32.9502 21.6766 32.8925 21.345 32.7268 21.02C32.4871 20.5493 32.1044 20.1667 31.6338 19.9269C31.3088 19.7613 30.9772 19.7036 30.665 19.6781C30.3735 19.6543 30.0231 19.6543 29.6337 19.6543H23.0142ZM21.9221 21.7089C21.9225 21.7087 21.9247 21.7076 21.93 21.7057C21.9354 21.7038 21.9455 21.7005 21.9618 21.6967C21.9961 21.6886 22.0525 21.679 22.1458 21.6714C22.3459 21.6551 22.6134 21.6543 23.0503 21.6543H29.5976C30.0345 21.6543 30.302 21.6551 30.5021 21.6714C30.5954 21.679 30.6518 21.6886 30.6861 21.6967C30.7024 21.7005 30.7125 21.7038 30.7179 21.7057C30.7232 21.7076 30.7254 21.7087 30.7258 21.7089C30.8201 21.757 30.8968 21.8336 30.9448 21.9279C30.9451 21.9284 30.9462 21.9306 30.948 21.9358C30.95 21.9413 30.9532 21.9513 30.9571 21.9676C30.9651 22.0019 30.9747 22.0584 30.9823 22.1516C30.9987 22.3518 30.9995 22.6193 30.9995 23.0562V26.5966C30.9995 27.0335 30.9987 27.301 30.9823 27.5011C30.9747 27.5944 30.9651 27.6508 30.9571 27.6851C30.9532 27.7014 30.95 27.7115 30.948 27.7169C30.9462 27.7222 30.9451 27.7244 30.9448 27.7248C30.8968 27.8191 30.8201 27.8958 30.7258 27.9438C30.7254 27.9441 30.7232 27.9452 30.7179 27.947C30.7125 27.949 30.7024 27.9522 30.6861 27.9561C30.6518 27.9641 30.5954 27.9737 30.5021 27.9813C30.302 27.9977 30.0345 27.9985 29.5976 27.9985H23.0503C22.6134 27.9985 22.3459 27.9977 22.1458 27.9813C22.0525 27.9737 21.9961 27.9641 21.9618 27.9561C21.9455 27.9522 21.9354 27.949 21.93 27.947C21.9247 27.9452 21.9225 27.9441 21.9221 27.9438C21.8278 27.8958 21.7511 27.8191 21.7031 27.7248C21.7028 27.7244 21.7017 27.7222 21.6998 27.7169C21.6979 27.7115 21.6947 27.7014 21.6908 27.6851C21.6828 27.6508 21.6732 27.5944 21.6656 27.5011C21.6492 27.301 21.6484 27.0335 21.6484 26.5966V23.0562C21.6484 22.6193 21.6492 22.3518 21.6656 22.1516C21.6732 22.0584 21.6828 22.0019 21.6908 21.9676C21.6947 21.9513 21.6979 21.9413 21.6998 21.9358C21.7007 21.9334 21.7014 21.9317 21.7019 21.9304C21.7026 21.9289 21.7029 21.9282 21.7031 21.9279C21.7511 21.8336 21.8278 21.757 21.9221 21.7089Z"
            fill="currentColor"
        />
    </s.Svg>
);
