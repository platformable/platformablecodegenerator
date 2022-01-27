const colorsForComponents = () => {
    const insetBoxColors = ["inset-box-oe-light", "inset-box-general-light", "inset-box-bank-light", "inset-box-gov-light", "inset-box-health-light", "inset-box-sustain-light"]
    const insetBox2Colors = [{
        class: "insetBox2-dark-oe",
        color: "insetBox2-dark-oe"
    }, {
        class: "insetBox2-general-dark-btn",
        color: "insetBox2-general-dark"
    }, {
        class: "insetBox2-bank-dark-btn",
        color: "insetBox2-bank-dark"
    },
    {
        class: "insetBox2-gov-dark-btn",
        color: "insetBox2-gov-dark"
    },
    {
        class: "insetBox2-health-dark-btn",
        color: "insetBox2-health-dark"
    },
    {
        class: "insetBox2-sustain-dark-btn",
        color: "insetBox2-sustain-dark"
    }
    ];
    const personaColors = [{
        class: "insetBox2-dark-oe",
        color: "persona-card-bg-dark-oe"
    }, {
        class: "insetBox2-general-dark-btn",
        color: "persona-card-bg-dark-purple"
    }, {
        class: "insetBox2-bank-dark-btn",
        color: "persona-card-bg-dark-orange"
    },
    {
        class: "insetBox2-gov-dark-btn",
        color: "persona-card-bg-purple"
    },
    {
        class: "insetBox2-health-dark-btn",
        color: "persona-card-bg-dark-blue"
    },
    {
        class: "insetBox2-sustain-dark-btn",
        color: "persona-card-bg-dark-green"
    }
    ];
    const largeQuoteColors = [{
        class: "oe-dark-btn",
        color: "LargeQuote-oe-bg"
    },
    {
        class: "dark-purple-btn",
        color: "LargeQuote-og-bg"
    },
    {
        class: "ob-dark-btn",
        color: "LargeQuote-ob-bg"
    },
    {
        class: "og-dark-btn",
        color: "LargeQuote-og-bg"
    },
    {
        class: "oh-dark-btn",
        color: "LargeQuote-oh-bg"
    },
    {
        class: "os-dark-btn",
        color: "LargeQuote-os-bg"
    },
    ]
    const mediaColors = [{
        class: "inline-icon-oe-dark-btn",
        color: "inline-icon-oe-dark"
    },
    {
        class: "inline-icon-general-dark-btn",
        color: "inline-icon-general-dark"
    },
    {
        class: "inline-icon-bank-dark-btn",
        color: "inline-icon-ob-dark"
    },
    {
        class: "inline-icon-gov-dark-btn colorBtn",
        color: "inline-icon-og-dark"
    },
    {
        class: "inline-icon-health-dark-btn",
        color: "inline-icon-oh-dark"
    },
    {
        class: "inline-icon-sustain-dark-btn",
        color: "inline-icon-os-dark"
    },
    ]
    const shadedInlineIconColors = [{
        class: "inline-icon-oe-dark-btn",
        color: "shaded-inline-bg-oe"
    },
    {
        class: "inline-icon-general-dark-btn",
        color: "shaded-inline-icon-general-dark"
    },
    {
        class: "inline-icon-bank-dark-btn",
        color: "shaded-inline-bg-ob"
    },
    {
        class: "inline-icon-gov-dark-btn",
        color: "shaded-inline-bg-og"
    },
    {
        class: "inline-icon-health-dark-btn",
        color: "shaded-inline-bg-oh"
    },
    {
        class: "inline-icon-sustain-dark-btn",
        color: "shaded-inline-bg-os"
    },
    ]
    const smallQuoteColors = [{
        class: "oe-dark-btn",
        color: "smallQuote-oe-bg"
    },
    {
        class: "dark-purple-btn",
        color: "smallQuote-general-dark-bg"
    },
    {
        class: "ob-dark-btn",
        color: "smallQuote-ob-bg"
    },
    {
        class: "og-dark-btn",
        color: "smallQuote-og-bg"
    },
    {
        class: "oh-dark-btn",
        color: "smallQuote-oh-bg"
    },
    {
        class: "os-dark-btn",
        color: "smallQuote-os-bg"
    },
    ]
    const summaryBoxColors = ["summary-box-oe-dark", "summary-box-general-dark", "summary-box-bank-dark", "summary-box-gov-dark", "summary-box-health-dark", "summary-box-sustain-dark"]
    return {
        insetBoxColors,
        insetBox2Colors,
        largeQuoteColors,
        mediaColors,
        shadedInlineIconColors,
        smallQuoteColors,
        summaryBoxColors,
        personaColors
    };
}
module.exports = colorsForComponents;
