import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
                backgroundColor: data.color[mode].surfaceTransparentSecondary,
                colorActive: data.color[mode].textPrimary,
                backgroundColorActive: data.color[mode].surfaceTransparentSecondaryActive,
                spinnerColor: data.color[mode].textPrimary,
                contentLeftIconColor: data.color[mode].textPrimary,
                contentRightIconColor: data.color[mode].textPrimary,
            },
        },
        size: {
            l: {
                height: 56,
                width: 200,
                padding: 24,
                contentGap: 8,
                spinnerSize: 22,
                radius: data.shape.round.s + 2, // TODO: Узнать почему нет этих значений в теме
                fontFamilyRef: data.typography[screenSize].bodyLNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyLBold.fontWeight,
                fontStyle: data.typography[screenSize].bodyLNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyLNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyLNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyLNormal.lineHeight,
            },
            m: {
                height: 48,
                width: 180,
                padding: 20,
                contentGap: 6,
                spinnerSize: 22,
                radius: data.shape.round.s,
                fontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyMBold.fontWeight,
                fontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyMNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
            },
            s: {
                height: 40,
                width: 180,
                padding: 16,
                contentGap: 4,
                spinnerSize: 22,
                radius: data.shape.round.xs + 2, // TODO: Узнать почему нет этих значений в теме
                fontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodySBold.fontWeight,
                fontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                fontSize: data.typography[screenSize].bodySNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodySNormal.lineHeight,
            },
            xs: {
                height: 32,
                width: 160,
                padding: 12,
                contentGap: 4,
                spinnerSize: 16,
                radius: data.shape.round.xs,
                fontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                fontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
            xxs: {
                height: 24,
                width: 140,
                padding: 10,
                contentGap: 4,
                spinnerSize: 12,
                radius: data.shape.round.xxs + 2, // TODO: Узнать почему нет этих значений в теме
                fontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                fontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
        },
        disabled: {
            true: {
                disabledOpacity: 0.4,
            },
        },
        focused: {
            true: {
                color: data.color[mode].onLightTextPrimary,
                backgroundColor: data.color[mode].onDarkSurfaceSolidDefault,
                colorActive: data.color[mode].onLightTextPrimary,
                backgroundColorActive: data.color[mode].onLightSurfaceTransparentSecondaryActive,
                spinnerColor: data.color[mode].onLightTextPrimary,
                contentLeftIconColor: data.color[mode].onLightTextPrimary,
                contentRightIconColor: data.color[mode].onLightTextPrimary,
                scale: 1.05,
            },
        },
    },
});