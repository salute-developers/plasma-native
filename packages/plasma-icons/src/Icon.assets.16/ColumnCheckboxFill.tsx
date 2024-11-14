import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ColumnCheckboxFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.82689 1H4.8547C5.0009 1.43592 5.4127 1.75 5.89785 1.75H10.0979C10.583 1.75 10.9948 1.43592 11.141 1H12.1688C12.0022 1.9932 11.1384 2.75 10.0979 2.75H5.89785C4.8573 2.75 3.99351 1.9932 3.82689 1ZM10.0979 14.2499H5.89785C5.4127 14.2499 5.0009 14.564 4.8547 14.9999H3.82689C3.99351 14.0067 4.8573 13.2499 5.89785 13.2499H10.0979C11.1384 13.2499 12.0022 14.0067 12.1688 14.9999H11.141C10.9948 14.564 10.583 14.2499 10.0979 14.2499ZM3.79785 5.89971C3.79785 4.73991 4.73805 3.79971 5.89785 3.79971H10.0979C11.2576 3.79971 12.1979 4.73991 12.1979 5.89971V10.0997C12.1979 11.2595 11.2576 12.1997 10.0979 12.1997H5.89785C4.73805 12.1997 3.79785 11.2595 3.79785 10.0997V5.89971ZM10.0244 6.00868C10.2542 6.16186 10.3163 6.47229 10.1631 6.70206L8.1693 9.69275C7.92903 10.0532 7.40762 10.0758 7.13703 9.73755L5.85664 8.13705C5.68413 7.92142 5.71909 7.60678 5.93472 7.43427C6.15035 7.26177 6.465 7.29673 6.6375 7.51236L7.61034 8.72841L9.33105 6.14736C9.48422 5.91759 9.79466 5.85551 10.0244 6.00868Z"
            fill="currentColor"
        />
    </s.Svg>
);