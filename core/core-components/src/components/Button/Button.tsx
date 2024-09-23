import { NativeSyntheticEvent, Pressable, TargetedEvent, Text, View } from 'react-native';
import { useMemo, useState } from 'react';

import { spinnerComponent } from '../Spinner';
import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';
import { FocusableWrapper } from '../FocusableWrapper';

import { ButtonConfig, ButtonProps } from './Button.types';
import { getStyle } from './Button.styles';

const Spinner = spinnerComponent();

export const buttonCore = <T extends ButtonConfig>(config?: T, theme?: Theme) => (
    props: ButtonProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const {
        view = '',
        size = '',
        pin = 'square-square',
        stretching = 'auto',
        children,
        text,
        contentLeft,
        contentRight,
        isLoading,
        loader,
        disabled,
        style: externalStyle,
        onBlur,
        onFocus,
        ...rest
    } = props;

    const [focused, setFocused] = useState(false);
    const [pressed, setPressed] = useState(false);

    const txt = typeof children === 'string' ? children : text;

    const viewStyle = focused ? config?.variations.focused.true : config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];
    const disabledOpacity = disabled ? config?.variations.disabled.true.disabledOpacity : 1;

    const style = useMemo(
        () =>
            getStyle(theme, disabledOpacity, viewStyle, sizeStyle, pressed, stretching, pin, isLoading, externalStyle),
        [view, size, pressed, disabled, focused, stretching, isLoading, pin, theme?.mode],
    );

    const onWrapperFocus = (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (onFocus) {
            onFocus(event);
        }

        setFocused(true);
    };

    const onWrapperBlur = (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (onBlur) {
            onBlur(event);
        }

        setFocused(false);
    };

    const onPressIn = () => {
        setPressed(true);
    };

    const onPressOut = () => {
        setPressed(false);
    };

    return (
        <Pressable
            disabled={disabled}
            ref={externalRef}
            onFocus={onWrapperFocus}
            onBlur={onWrapperBlur}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            {...rest}
        >
            <View style={style.root}>
                <View style={style.background} />
                <View style={style.wrapper}>
                    {contentLeft && (
                        <FocusableWrapper iconColor={viewStyle?.contentLeftIconColor}>{contentLeft}</FocusableWrapper>
                    )}
                    {txt ? <Text style={style.text}>{txt}</Text> : children}
                    {contentRight && (
                        <FocusableWrapper iconColor={viewStyle?.contentRightIconColor}>{contentRight}</FocusableWrapper>
                    )}
                </View>
                {isLoading && (
                    <View style={style.loader}>
                        {loader || (
                            <Spinner
                                color={viewStyle?.color}
                                height={sizeStyle?.spinnerSize}
                                width={sizeStyle?.spinnerSize}
                            />
                        )}
                    </View>
                )}
            </View>
        </Pressable>
    );
};

export const buttonComponent = withTheme(buttonCore);
