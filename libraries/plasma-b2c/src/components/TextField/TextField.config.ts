import { Theme } from '@salutejs/core-components';

import { PlasmaB2CTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode, screenSize }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
                backgroundColor: data.color[mode].surfaceTransparentPrimary,
                backgroundColorActive: data.color[mode].surfaceTransparentSecondary,
                caretColor: data.color[mode].textAccent,
                placeholderColor: data.color[mode].textSecondary,
                labelColor: data.color[mode].textPrimary,
                captionLeftColor: data.color[mode].textSecondary,
                textBeforeColor: data.color[mode].textTertiary,
                textAfterColor: data.color[mode].textTertiary,
                colorReadOnly: data.color[mode].textSecondary,
                backgroundColorReadOnly: data.color[mode].surfaceTransparentPrimary,
                placeholderColorReadOnly: data.color[mode].textSecondary,
                captionLeftColorReadOnly: data.color[mode].textSecondary,
                labelColorReadOnly: data.color[mode].textSecondary,
                contentLeftIconColor: data.color[mode].textSecondary,
                contentRightIconColor: data.color[mode].textSecondary,
            },
            positive: {
                color: data.color[mode].textPrimary,
                backgroundColor: data.color[mode].surfaceTransparentPositive,
                backgroundColorActive: data.color[mode].surfaceTransparentPositiveActive,
                caretColor: data.color[mode].textAccent,
                placeholderColor: data.color[mode].textSecondary,
                labelColor: data.color[mode].textPrimary,
                captionLeftColor: data.color[mode].textPositive,
                textBeforeColor: data.color[mode].textTertiary,
                textAfterColor: data.color[mode].textTertiary,
                colorReadOnly: data.color[mode].textSecondary,
                backgroundColorReadOnly: data.color[mode].surfaceTransparentPrimary,
                placeholderColorReadOnly: data.color[mode].textSecondary,
                captionLeftColorReadOnly: data.color[mode].textSecondary,
                labelColorReadOnly: data.color[mode].textSecondary,
                contentLeftIconColor: data.color[mode].textSecondary,
                contentRightIconColor: data.color[mode].textSecondary,
            },
            warning: {
                color: data.color[mode].textPrimary,
                backgroundColor: data.color[mode].surfaceTransparentWarning,
                backgroundColorActive: data.color[mode].surfaceTransparentWarningActive,
                caretColor: data.color[mode].textAccent,
                placeholderColor: data.color[mode].textSecondary,
                labelColor: data.color[mode].textPrimary,
                captionLeftColor: data.color[mode].textWarning,
                textBeforeColor: data.color[mode].textTertiary,
                textAfterColor: data.color[mode].textTertiary,
                colorReadOnly: data.color[mode].textSecondary,
                backgroundColorReadOnly: data.color[mode].surfaceTransparentPrimary,
                placeholderColorReadOnly: data.color[mode].textSecondary,
                captionLeftColorReadOnly: data.color[mode].textSecondary,
                labelColorReadOnly: data.color[mode].textSecondary,
                contentLeftIconColor: data.color[mode].textSecondary,
                contentRightIconColor: data.color[mode].textSecondary,
            },
            negative: {
                color: data.color[mode].textPrimary,
                backgroundColor: data.color[mode].surfaceTransparentNegative,
                backgroundColorActive: data.color[mode].surfaceTransparentNegativeActive,
                caretColor: data.color[mode].textAccent,
                placeholderColor: data.color[mode].textSecondary,
                labelColor: data.color[mode].textPrimary,
                captionLeftColor: data.color[mode].textNegative,
                textBeforeColor: data.color[mode].textTertiary,
                textAfterColor: data.color[mode].textTertiary,
                colorReadOnly: data.color[mode].textSecondary,
                backgroundColorReadOnly: data.color[mode].surfaceTransparentPrimary,
                placeholderColorReadOnly: data.color[mode].textSecondary,
                captionLeftColorReadOnly: data.color[mode].textSecondary,
                labelColorReadOnly: data.color[mode].textSecondary,
                contentLeftIconColor: data.color[mode].textSecondary,
                contentRightIconColor: data.color[mode].textSecondary,
            },
        },
        size: {
            l: {
                height: 56,
                borderRadius: data.shape.round.s + 2, // TODO: Узнать почему нет этих значений в теме
                textBeforeMargin: 4,
                textAfterMargin: 4,
                paddingRight: 18,
                paddingLeft: 18,
                contentLeftMarginTop: -1,
                contentLeftMarginRight: 8,
                contentLeftMarginBottom: -1,
                contentLeftMarginLeft: -2,
                contentRightMarginTop: -1,
                contentRightMarginRight: -2,
                contentRightMarginBottom: -1,
                contentRightMarginLeft: 12,
                labelInnerTop: 9,
                contentLabelInnerPaddingTop: 25,
                contentLabelInnerPaddingRight: 0,
                contentLabelInnerPaddingBottom: 9,
                contentLabelInnerPaddingLeft: 0,
                labelInnerFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                labelInnerFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                labelInnerFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                labelInnerFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                labelInnerLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                labelInnerLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                fontFamilyRef: data.typography[screenSize].bodyLNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyLNormal.fontWeight,
                fontStyle: data.typography[screenSize].bodyLNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyLNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyLNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyLNormal.lineHeight,
                labelOffset: 12,
                labelFontFamilyRef: data.typography[screenSize].bodyLNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyLNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyLNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyLNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyLNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyLNormal.lineHeight,
                captionLeftOffset: 4,
                captionLeftFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                captionLeftFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                captionLeftFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                captionLeftFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                captionLeftLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                captionLeftLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
            m: {
                height: 48,
                borderRadius: data.shape.round.s,
                textBeforeMargin: 4,
                textAfterMargin: 4,
                paddingRight: 16,
                paddingLeft: 16,
                contentLeftMarginTop: -2,
                contentLeftMarginRight: 6,
                contentLeftMarginBottom: -2,
                contentLeftMarginLeft: -2,
                contentRightMarginTop: -2,
                contentRightMarginRight: -2,
                contentRightMarginBottom: -2,
                contentRightMarginLeft: 10,
                labelInnerTop: 6,
                contentLabelInnerPaddingTop: 22,
                contentLabelInnerPaddingRight: 0,
                contentLabelInnerPaddingBottom: 6,
                contentLabelInnerPaddingLeft: 0,
                labelInnerFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                labelInnerFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                labelInnerFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                labelInnerFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                labelInnerLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                labelInnerLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                fontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                fontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyMNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
                labelOffset: 10,
                labelFontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyMNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
                captionLeftOffset: 4,
                captionLeftFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                captionLeftFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                captionLeftFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                captionLeftFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                captionLeftLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                captionLeftLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
            s: {
                height: 40,
                borderRadius: data.shape.round.xs + 2, // TODO: Узнать почему нет этих значений в теме
                textBeforeMargin: 4,
                textAfterMargin: 4,
                paddingRight: 14,
                paddingLeft: 14,
                contentLeftMarginTop: -3,
                contentLeftMarginRight: 4,
                contentLeftMarginBottom: -3,
                contentLeftMarginLeft: -2,
                contentRightMarginTop: -3,
                contentRightMarginRight: -2,
                contentRightMarginBottom: -3,
                contentRightMarginLeft: 8,
                labelInnerTop: 5,
                contentLabelInnerPaddingTop: 17,
                contentLabelInnerPaddingRight: 0,
                contentLabelInnerPaddingBottom: 5,
                contentLabelInnerPaddingLeft: 0,
                labelInnerFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                labelInnerFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                labelInnerFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                labelInnerFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                labelInnerLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                labelInnerLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                fontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                fontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                fontSize: data.typography[screenSize].bodySNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                labelOffset: 8,
                labelFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodySNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                captionLeftOffset: 4,
                captionLeftFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                captionLeftFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                captionLeftFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                captionLeftFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                captionLeftLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                captionLeftLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
            xs: {
                height: 32,
                borderRadius: data.shape.round.xs,
                textBeforeMargin: 4,
                textAfterMargin: 4,
                paddingRight: 10,
                paddingLeft: 10,
                contentLeftMarginTop: -1,
                contentLeftMarginRight: 4,
                contentLeftMarginBottom: -1,
                contentLeftMarginLeft: -2,
                contentRightMarginTop: -1,
                contentRightMarginRight: -2,
                contentRightMarginBottom: -1,
                contentRightMarginLeft: 6,
                labelInnerTop: 0,
                contentLabelInnerPaddingTop: 4,
                contentLabelInnerPaddingRight: 0,
                contentLabelInnerPaddingBottom: 2,
                contentLabelInnerPaddingLeft: 0,
                labelInnerFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                labelInnerFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                labelInnerFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                labelInnerFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                labelInnerLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                labelInnerLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                fontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                fontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                labelOffset: 6,
                labelFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                captionLeftOffset: 4,
                captionLeftFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                captionLeftFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                captionLeftFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                captionLeftFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                captionLeftLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                captionLeftLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
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
                backgroundColorActive: data.color[mode].surfaceTransparentSecondary,
                caretColor: data.color[mode].onLightTextPrimary,
                placeholderColor: data.color[mode].onLightTextSecondary,
                labelColor: data.color[mode].textPrimary,
                captionLeftColor: data.color[mode].textSecondary,
                textBeforeColor: data.color[mode].onLightTextTertiary,
                textAfterColor: data.color[mode].onLightTextTertiary,
                colorReadOnly: data.color[mode].onLightTextSecondary,
                backgroundColorReadOnly: data.color[mode].surfaceTransparentPrimary,
                placeholderColorReadOnly: data.color[mode].onLightTextSecondary,
                captionLeftColorReadOnly: data.color[mode].textSecondary,
                labelColorReadOnly: data.color[mode].textSecondary,
                contentLeftIconColor: data.color[mode].onLightTextSecondary,
                contentRightIconColor: data.color[mode].onLightTextSecondary,
            },
        },
    },
});
