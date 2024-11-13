import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ShuffleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.9232 6.29375C28.5332 5.90275 27.9 5.90199 27.509 6.29204C27.118 6.68209 27.1172 7.31526 27.5073 7.70625L29.5888 9.79279H25.5667C23.1089 9.79279 21.2004 10.9087 19.6107 12.444C18.4812 13.5348 17.4694 14.8816 16.5069 16.2484C14.0367 12.7427 11.0136 9.03418 5.89182 9.03418L4.00079 9.03422C3.4485 9.03424 2.99998 9.48197 3 10.0343C3.00002 10.5865 3.44775 11.0342 4.00004 11.0342L5.89182 11.0342C10.1434 11.0342 12.6551 14.2132 15.2904 17.9991C12.6551 21.7849 10.1434 24.964 5.89182 24.964H4C3.44772 24.964 3 25.4117 3 25.964C3 26.5162 3.44772 26.964 4 26.964H5.89182C11.0136 26.964 14.0367 23.2555 16.5069 19.7497C17.4694 21.1166 18.4812 22.4633 19.6107 23.5542C21.2004 25.0895 23.1089 26.2054 25.5667 26.2054H29.5888L27.5073 28.2919C27.1172 28.6829 27.118 29.3161 27.509 29.7061C27.9 30.0962 28.5332 30.0954 28.9232 29.7044L32.7068 25.9116C33.0962 25.5213 33.0962 24.8895 32.7068 24.4991L28.9232 20.7063C28.5332 20.3154 27.9 20.3146 27.509 20.7046C27.118 21.0947 27.1172 21.7279 27.5073 22.1189L29.5888 24.2054H25.5667C23.7928 24.2054 22.3559 23.4249 21.0001 22.1156C19.8451 21.0001 18.8121 19.5648 17.7241 17.9991C18.8121 16.4334 19.8451 14.9981 21.0001 13.8826C22.3559 12.5733 23.7928 11.7928 25.5667 11.7928H29.5888L27.5073 13.8793C27.1172 14.2703 27.118 14.9035 27.509 15.2935C27.9 15.6836 28.5332 15.6828 28.9232 15.2918L32.7068 11.499C33.0962 11.1087 33.0962 10.4769 32.7068 10.0865L28.9232 6.29375Z"
            fill="currentColor"
        />
    </s.Svg>
);
