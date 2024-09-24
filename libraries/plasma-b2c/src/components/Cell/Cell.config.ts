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
                labelColor: data.color[mode].textSecondary,
                titleColor: data.color[mode].textPrimary,
                subtitleColor: data.color[mode].textSecondary,
                contentIconColor: data.color[mode].textPrimary,
                contentRightTextColor: data.color[mode].textSecondary,
                backgroundColor: 'transparent',
            },
        },
        size: {
            l: {
                width: 240,
                padding: 0,
                paddingLeftContent: 0,
                paddingContent: 0,
                paddingRightContent: 0,
                textBoxGap: 2,
                gap: 8,
                contentRightTextGap: 8,
                labelFontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyMNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
                titleFontFamilyRef: data.typography[screenSize].bodyLNormal.fontFamilyRef,
                titleFontWeight: data.typography[screenSize].bodyLBold.fontWeight,
                titleFontStyle: data.typography[screenSize].bodyLNormal.fontStyle,
                titleFontSize: data.typography[screenSize].bodyLNormal.fontSize,
                titleLetterSpacing: data.typography[screenSize].bodyLNormal.letterSpacing,
                titleLineHeight: data.typography[screenSize].bodyLNormal.lineHeight,
                subtitleFontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                subtitleFontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                subtitleFontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                subtitleFontSize: data.typography[screenSize].bodyMNormal.fontSize,
                subtitleLetterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                subtitleLineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
                contentRightTextFontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                contentRightTextFontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                contentRightTextFontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                contentRightTextFontSize: data.typography[screenSize].bodyMNormal.fontSize,
                contentRightTextLetterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                contentRightTextLineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
            },
            m: {
                width: 240,
                padding: 0,
                paddingLeftContent: 0,
                paddingContent: 0,
                paddingRightContent: 0,
                textBoxGap: 2,
                gap: 6,
                contentRightTextGap: 8,
                labelFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodySNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                titleFontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                titleFontWeight: data.typography[screenSize].bodyMBold.fontWeight,
                titleFontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                titleFontSize: data.typography[screenSize].bodyMNormal.fontSize,
                titleLetterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                titleLineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
                subtitleFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                subtitleFontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                subtitleFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                subtitleFontSize: data.typography[screenSize].bodySNormal.fontSize,
                subtitleLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                subtitleLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                contentRightTextFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                contentRightTextFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                contentRightTextFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                contentRightTextFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                contentRightTextLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                contentRightTextLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
            s: {
                width: 240,
                padding: 0,
                paddingLeftContent: 0,
                paddingContent: 0,
                paddingRightContent: 0,
                textBoxGap: 2,
                gap: 6,
                contentRightTextGap: 0,
                labelFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                titleFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                titleFontWeight: data.typography[screenSize].bodySBold.fontWeight,
                titleFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                titleFontSize: data.typography[screenSize].bodySNormal.fontSize,
                titleLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                titleLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                subtitleFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                subtitleFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                subtitleFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                subtitleFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                subtitleLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                subtitleLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                contentRightTextFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                contentRightTextFontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                contentRightTextFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                contentRightTextFontSize: data.typography[screenSize].bodySNormal.fontSize,
                contentRightTextLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                contentRightTextLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
            },
            xs: {
                width: 240,
                padding: 0,
                paddingLeftContent: 0,
                paddingContent: 0,
                paddingRightContent: 0,
                textBoxGap: 2,
                gap: 4,
                contentRightTextGap: 0,
                labelFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                titleFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                titleFontWeight: data.typography[screenSize].bodySBold.fontWeight,
                titleFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                titleFontSize: data.typography[screenSize].bodySNormal.fontSize,
                titleLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                titleLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                subtitleFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                subtitleFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                subtitleFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                subtitleFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                subtitleLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                subtitleLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                contentRightTextFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                contentRightTextFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                contentRightTextFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                contentRightTextFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                contentRightTextLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                contentRightTextLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
        },
        focused: {
            true: {
                color: data.color[mode].onLightTextPrimary,
                labelColor: data.color[mode].onLightTextSecondary,
                titleColor: data.color[mode].onLightTextPrimary,
                subtitleColor: data.color[mode].onLightTextSecondary,
                contentIconColor: data.color[mode].onLightTextPrimary,
                contentRightTextColor: data.color[mode].onLightTextSecondary,
                backgroundColor: 'transparent',
            },
        },
    },
});
