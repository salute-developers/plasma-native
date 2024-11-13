import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CallIncomingOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2851 3.32156C10.957 4.21059 11.4129 5.44385 11.6824 6.32126C11.6905 6.34765 11.6987 6.37418 11.707 6.40084C11.8019 6.70688 11.902 7.0299 11.8837 7.34912C11.8664 7.65005 11.7981 7.87533 11.6454 8.13522C11.5363 8.3209 11.3778 8.47299 11.2438 8.59288C11.1027 8.71905 10.9163 8.87107 10.6944 9.0521L10.6804 9.06349C10.2216 9.43777 9.7764 9.94742 9.58221 10.5859C9.39706 11.1946 9.40821 12.0235 10.0467 13.1294C10.6852 14.2354 11.3975 14.6594 12.0172 14.8035C12.6672 14.9545 13.3312 14.8238 13.8848 14.6136L13.9016 14.6072C14.1693 14.5055 14.3942 14.4201 14.574 14.361C14.7449 14.3048 14.9558 14.2436 15.1712 14.242C15.4726 14.2397 15.7018 14.2932 15.9711 14.4287C16.2567 14.5724 16.4864 14.8207 16.704 15.0559C16.7229 15.0763 16.7418 15.0967 16.7606 15.1169C17.3857 15.789 18.2258 16.8004 18.6598 17.8269C18.8774 18.3416 19.0268 18.9378 18.9246 19.5323C18.8153 20.1682 18.4359 20.6989 17.8033 21.0642L17.7892 21.0723C17.1176 21.4601 15.4576 22.4188 13.2656 22.0399C11.0368 21.6547 8.49227 19.9369 5.93314 15.5044C3.374 11.0718 3.15865 8.00929 3.93943 5.88652C4.70733 3.79878 6.36755 2.84045 7.03919 2.45277C7.04394 2.45003 7.04863 2.44732 7.05328 2.44463C7.68596 2.07936 8.33521 2.0162 8.9406 2.2395C9.50657 2.44827 9.94816 2.8757 10.2851 3.32156ZM8.4215 3.64682C8.27429 3.59252 8.08859 3.57895 7.80328 3.74367C7.16646 4.11134 5.92195 4.84177 5.34722 6.40433C4.77995 7.94662 4.7913 10.5267 7.23217 14.7544C9.67305 18.9821 11.9018 20.282 13.5211 20.5618C15.1616 20.8454 16.4164 20.1328 17.0533 19.7651C17.3386 19.6004 17.4197 19.4328 17.4463 19.2782C17.48 19.0821 17.4407 18.7954 17.2782 18.411C16.9518 17.6391 16.2655 16.7871 15.6623 16.1386C15.5168 15.9822 15.4312 15.8906 15.3629 15.8259C15.3204 15.7858 15.3001 15.7711 15.2948 15.7676C15.2606 15.7505 15.2458 15.7454 15.2422 15.7444C15.2389 15.7438 15.2262 15.7421 15.1964 15.7419C15.1884 15.7438 15.1447 15.7524 15.0423 15.786C14.8989 15.8331 14.7063 15.9061 14.4173 16.0158C13.7114 16.2839 12.726 16.5081 11.6777 16.2645C10.5992 16.0139 9.56422 15.2937 8.74768 13.8794C7.93115 12.4651 7.82492 11.2087 8.14713 10.1494C8.4603 9.11972 9.1472 8.37843 9.73228 7.90116C9.97184 7.70575 10.1313 7.5754 10.2439 7.47477C10.3241 7.40299 10.3535 7.36936 10.3591 7.36338C10.3791 7.32815 10.3809 7.31894 10.3799 7.32222C10.3799 7.32229 10.3798 7.32238 10.3798 7.32247C10.3797 7.323 10.3796 7.32331 10.3796 7.32336C10.3796 7.32342 10.3797 7.32307 10.3799 7.32222C10.3809 7.31815 10.3838 7.30266 10.386 7.26538C10.3856 7.25899 10.3831 7.23405 10.3695 7.17724C10.3477 7.08575 10.3112 6.96576 10.2485 6.76162C9.98849 5.91497 9.59378 4.89458 9.08846 4.22599C8.83683 3.89304 8.60815 3.71566 8.4215 3.64682ZM15.1215 6.17503C15.5116 6.31456 15.7146 6.74383 15.5751 7.13383L14.7014 9.57599L20.2805 6.35489C20.6392 6.14778 21.0979 6.27069 21.305 6.62941C21.5122 6.98813 21.3892 7.44682 21.0305 7.65393L15.4514 10.875L18.0032 11.3395C18.4107 11.4137 18.681 11.8041 18.6068 12.2117C18.5326 12.6192 18.1421 12.8894 17.7346 12.8152L13.1728 11.9849C12.9561 11.9455 12.7677 11.8128 12.6575 11.622C12.5474 11.4313 12.5267 11.2018 12.6009 10.9944L14.1627 6.62857C14.3023 6.23857 14.7315 6.03551 15.1215 6.17503Z"
            fill="currentColor"
        />
    </s.Svg>
);
