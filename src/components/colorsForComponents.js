const colorsForComponents = () => {
  const insetBoxColors = [
    "inset-box-oe-light",

    "inset-box-bank-light",
    // "inset-box-gov-light",
    "inset-box-health-light",
    "inset-box-business-light",
    "inset-box-highlight-light",
    //  "inset-box-general-light",
    //  "inset-box-sustain-light"
  ]
  const insetBox2Colors = [
    {
      class: "insetBox2-dark-oe",
      color: "insetBox2-dark-oe",
    },
    // {
    //     class: "insetBox2-general-dark-btn",
    //     color: "insetBox2-general-dark"
    // },
    {
      class: "insetBox2-bank-dark-btn",
      color: "insetBox2-bank-dark",
    },
    // {
    //     class: "insetBox2-gov-dark-btn",
    //     color: "insetBox2-gov-dark"
    // },
    {
      class: "insetBox2-health-dark-btn",
      color: "insetBox2-health-dark",
    },
    {
      class: "insetBox2-highlight-dark-btn",
      color: "insetBox2-highlight-dark",
    },
    {
      class: "insetBox2-business-dark-btn",
      color: "insetBox2-business-dark",
    },
  ]
  const personaColors = [
    {
      class: "persona-card-bg-dark-oe",
      color: "persona-card-bg-dark-oe",
    },
    // {
    //     class: "insetBox2-general-dark-btn",
    //     color: "persona-card-bg-dark-purple"
    // },
    {
      class: "persona-card-bg-dark-orange",
      color: "persona-card-bg-dark-orange",
    },
    // {
    //     class: "insetBox2-gov-dark-btn",
    //     color: "persona-card-bg-purple"
    // },
    {
      class: "persona-card-bg-dark-oh",
      color: "persona-card-bg-dark-oh",
    },

    {
      class: "persona-card-bg-dark-business",
      color: "persona-card-bg-dark-business",
    },
    // {
    //     class: "insetBox2-sustain-dark-btn",
    //     color: "persona-card-bg-dark-green"
    // }
  ]
  const largeQuoteColors = [
    {
      class: "oe-dark-btn",
      color: "LargeQuote-oe-bg",
    },
    // {
    //     class: "dark-purple-btn",
    //     color: "LargeQuote-og-bg"
    // },
    {
      class: "ob-dark-btn",
      color: "LargeQuote-ob-bg",
    },
    // {
    //     class: "og-dark-btn",
    //     color: "LargeQuote-og-bg"
    // },
    {
      class: "oh-dark-btn",
      color: "LargeQuote-oh-bg",
    },
    {
      class: "highlight-dark-btn",
      color: "LargeQuote-highlight-bg",
    },
    {
      class: "business-dark-btn",
      color: "LargeQuote-business-bg",
    },
    // {
    //     class: "os-dark-btn",
    //     color: "LargeQuote-os-bg"
    // },
  ]
  const mediaColors = [
    {
      class: "inline-icon-oe-dark-btn",
      color: "inline-icon-oe-dark",
    },

    {
      class: "inline-icon-bank-dark-btn",
      color: "inline-icon-ob-dark",
    },
    {
      class: "inline-icon-health-dark-btn",
      color: "inline-icon-oh-dark",
    },
    {
      class: "inline-icon-highlight-dark-btn",
      color: "inline-icon-highlight-dark",
    },
    {
      class: "inline-icon-business-dark-btn",
      color: "inline-icon-business-dark",
    },
    /*     {
        class: "inline-icon-general-dark-btn",
        color: "inline-icon-general-dark"
    },
    {
        class: "inline-icon-gov-dark-btn colorBtn",
        color: "inline-icon-og-dark"
    },
    {
        class: "inline-icon-sustain-dark-btn",
        color: "inline-icon-os-dark"
    }, */
  ]
  const shadedInlineIconColors = [
    {
      class: "inline-icon-oe-dark-btn",
      color: "shaded-inline-bg-oe",
    },
    // {
    //     class: "inline-icon-general-dark-btn",
    //     color: "shaded-inline-icon-general-dark"
    // },
    {
      class: "inline-icon-bank-dark-btn",
      color: "shaded-inline-bg-ob",
    },
    // {
    //     class: "inline-icon-gov-dark-btn",
    //     color: "shaded-inline-bg-og"
    // },
    {
      class: "inline-icon-health-dark-btn",
      color: "shaded-inline-bg-oh",
    },
    {
      class: "inline-icon-highlight-dark-btn",
      color: "shaded-inline-bg-highlight",
    },
    {
      class: "inline-icon-business-dark-btn",
      color: "shaded-inline-bg-business",
    },
  ]
  const smallQuoteColors = [
    {
      class: "oe-dark-btn",
      color: "smallQuote-oe-bg",
    },
    // {
    //     class: "dark-purple-btn",
    //     color: "smallQuote-general-dark-bg"
    // },
    {
      class: "ob-dark-btn",
      color: "smallQuote-ob-bg",
    },

    {
      class: "oh-dark-btn",
      color: "smallQuote-oh-bg",
    },
    {
      class: "highlight-dark-btn",
      color: "smallQuote-highlight-bg",
    },
    {
      class: "business-dark-btn",
      color: "smallQuote-business-bg",
    },
  ]
  const quoteColors = [
    {
      class: "simple-quote-oe-dark-btn",
      color: "simple-quote-oe-dark",
    },
    {
      class: "simple-quote-bank-dark-btn",
      color: "simple-quote-bank-dark",
    },

    {
      class: "simple-quote-health-dark-btn",
      color: "simple-quote-health-dark",
    },
    {
      class: "simple-quote-business-dark-btn",
      color: "simple-quote-business-dark",
    },
  ]
  const summaryBoxColors = [
    "summary-box-oe-dark",
    "summary-box-bank-dark",
    "summary-box-health-dark",
    "summary-box-traceability-dark",
    // "summary-box-gov-dark","summary-box-general-dark",  "summary-box-sustain-dark"
  ]
  const lasbColors=[
  
    {
        class: "oe-dark-btn",
        color: "labs-oe-bg",
      },
      {
        class: "ob-dark-btn",
        color: "labs-ob-bg",
      },

      {
        class: "oh-dark-btn",
        color: "labs-oh-bg",
      },
      {
        class: "highlight-dark-btn",
        color: "labs-highlight-bg",
      },
      {
        class: "business-dark-btn",
        color: "labs-business-bg",
      },
  ]


  const roadmapColors=[
  
    {
        class: "oe-dark-btn",
        color: "roadmap-oe-bg",
      },
      {
        class: "ob-dark-btn",
        color: "roadmap-ob-bg",
      },

      {
        class: "oh-dark-btn",
        color: "roadmap-oh-bg",
      },
      {
        class: "highlight-dark-btn",
        color: "roadmap-highlight-bg",
      },
      {
        class: "business-dark-btn",
        color: "roadmap-business-bg",
      },
  ]


  return {
    insetBoxColors,
    insetBox2Colors,
    largeQuoteColors,
    mediaColors,
    shadedInlineIconColors,
    smallQuoteColors,
    summaryBoxColors,
    personaColors,
    lasbColors,
    roadmapColors,
    quoteColors
  }
}
module.exports = colorsForComponents
