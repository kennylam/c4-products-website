export function useNavItems() {
  const navItems = [
    {
      title: "About",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/pal/overview/about"
        },
        {
          title: "Contacts",
          path: "https://pages.github.ibm.com/cdai-design/pal/overview/contacts"
        },
        {
          title: "IBM Product specifications",
          path: "https://pages.github.ibm.com/cdai-design/pal/overview/carbon-specifications"
        }
      ],
      hasDivider: true
    },
    {
      title: "Asset index",
      pages: [
        {
          path: "https://pages.github.ibm.com/cdai-design/pal/overview/asset-index"
        }
      ]
    },
    {
      title: "Components",
      pages: [
        {
          title: "Cards",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/card/overview"
        },
        {
          title: "Cascading selector",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/cascading-selector/usage"
        },
        {
          title: "Catalog tile",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/catalog-tile/usage"
        },
        {
          title: "Cloud l2 (world level nav)",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/world-level-nav/usage"
        },
        {
          title: "Cloud l3 (resource level nav)",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/resource-level-nav/usage"
        },
        {
          title: "Cloud resource status indicator",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/resource-status-indicator/usage"
        },
        {
          title: "Cloud resource tag",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/tagging-component/usage"
        },
        {
          title: "Color picker",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/color-picker/usage/"
        },
        {
          title: "Cron configurator",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/cron-configurator/usage/"
        },
        {
          title: "Data spreadsheet",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/data-spreadsheet/usage"
        },
        {
          title: "Data table extensions",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/data-table/overview"
        },
        {
          title: "Data table on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/data-table/usage"
        },
        {
          title: "Details card",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/details-card/usage"
        },
        {
          title: "Empty state",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/empty-state/usage"
        },
        {
          title: "Empty state on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/empty-states/usage"
        },
        {
          title: "Media gallery",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/media-gallery/usage"
        },
        {
          title: "Mini order summary",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/mini-order-summary-side-panel/usage"
        },
        {
          title: "Onboarding",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/onboarding/overview"
        },
        {
          title: "Options tile",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/options-tile/usage"
        },
        {
          title: "Order summary",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/order-summary/usage"
        },
        {
          title: "Page header",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/page-header/usage"
        },
        {
          title: "Page header on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/page-header-on-cloud/usage"
        },
        {
          title: "Progressive loading bar (depr.)",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/progressive-loading-bar/usage"
        },
        {
          title: "Side panel",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/side-panel/usage"
        },
        {
          title: "Side panel on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/components/side-panel-on-cloud/usage"
        },
        {
          title: "Submit promo",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/submit-promo/usage"
        },
        {
          title: "Tearsheet",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/tearsheet/usage"
        },
        {
          title: "Tag overflow",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/tag-overflow/usage"
        },
      ]
    },
    {
      title: "Patterns",
      pages: [
        {
          title: "About modal",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/about-modal/usage"
        },
        {
          title: "Add and select",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/add-and-select/usage"
        },
        {
          title: "Button guidance",
          path: "https://pages.github.ibm.com/cdai-design/pal/components/button-guidance/overview"
        },
        {
          title: "Breadcrumbs",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/breadcrumbs/usage"
        },
        {
          title: "Cascade",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/cascade"
        },
        {
          title: "Canvas",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/canvas/usage"
        },
        {
          title: "Create flows",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/creation-flows/usage"
        },
        {
          title: "Create flows on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/create-flows-on-cloud/usage/"
        },
        {
          title: "Dashboards",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/dashboards/usage"
        },
        {
          title: "Dashboard widgets",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/dashboard-widgets/usage"
        },
        {
          title: "Drag and drop",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/drag-and-drop/usage"
        },
        {
          title: "Edit and update",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/edit/usage"
        },
        {
          title: "Emails",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/emails/overview"
        },
        {
          title: "Email templates",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/email-templates/usage"
        },
        {
          title: "Export",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/exporting/usage"
        },
        {
          title: "Full-page errors",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/full-page-errors/usage"
        },
        {
          title: "Generate an API key",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/generating-api-key/usage"
        },
        {
          title: "Grid influencers",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/grid-influencers/usage/"
        },
        {
          title: "Import and upload",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/importing/usage"
        },
        {
          title: "Keyboard Shortcut Guidance",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/keyboard-shortcut-guidance/usage"
        },
        {
          title: "Launch out template",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/launch-out-template/usage"
        },
        {
          title: "Login & logout",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/login-logout/overview"
        },
        {
          title: "Notifications",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/notifications/usage"
        },
        {
          title: "Notifications on cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/notifications-on-cloud/usage"
        },
        {
          title: "Onboarding",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/onboarding/overview"
        },
        {
          title: "Parameters",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/parameters/usage"
        },
        {
          title: "Profile and settings",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/profile-and-settings/usage"
        },
        {
          title: "Profile menu",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/profile-header-menu/usage"
        },
        {
          title: "Provisioning",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/provisioning/usage"
        },
        {
          title: "Registration",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/registration/overview"
        },
        {
          title: "Remove",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/removing/usage"
        },
        {
          title: "Resource detail page",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/resource-detail-page-template/usage"
        },
        {
          title: "Resource getting started tab",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/getting-started-tab/usage"
        },
        {
          title: "Saving",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/saving/usage"
        },
        {
          title: "Settings page template",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/settings-page-template/usage"
        },
        {
          title: "Status icons",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/status-icons/usage"
        },
        {
          title: "Trial countdown",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/trial-countdown/usage"
        },
        {
          title: "Try and Buy routes to market",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/try-and-buy-routes-to-market/overview"
        },
        {
          title: "Toolbars",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/toolbars/usage"
        },
        {
          title: "UI navigation",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/ui-navigation/usage"
        },
        {
          title: "Upgrade & purchase",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/upgrade-purchase/overview"
        },
        {
          title: "User profile images",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/user-profile-images/usage"
        },
        {
          title: "Web terminal",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/web-terminal/usage"
        },
        {
          title: "World overview pages",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/patterns/world-overview-pages/usage/"
        }
      ]
    },
    {
      title: "Layouts",
      pages: [
        {
          title: "Grid layout",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/grid-layout/usage"
        },
        {
          title: "IBM Product layouts",
          path: "https://pages.github.ibm.com/cdai-design/pal/layouts/library",
          pathDepth: 1
        },
        {
          title: "Left panel layout",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/left-panel-layout/code"
        },
        {
          title: "Provision page layout",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/provision-page-layout/code"
        },
        {
          title: "Resource detail page layout",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/resource-detail-page-layout/code"
        },
        {
          title: "Titled section layout",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/titled-section-layout/code"
        },
        {
          title: "Use cases",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/use-cases"
        },
        {
          title: "World level layout",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/world-level-layout/code"
        },
        {
          title: "Card layout (depr)",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/card-layout/code",
          deprecated: true
        },
        {
          title: "Provision about page (depr)",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/provision-about-page/code",
          deprecated: true
        },
        {
          title: "Tables (depr)",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/layouts/tables/code",
          deprecated: true
        }
      ]
    },
    {
      title: "Connected experiences",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/overview"
        },
        {
          title: "Add billing contact service",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/add-billing-contact-service/code"
        },
        {
          title: "Add credit card service",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/add-credit-card-service/code"
        },
        {
          title: "Cluster create",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/cluster-create/code"
        },
        {
          title: "Create resource group",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/create-resource-group/code"
        },
        {
          title: "Edit credit card service",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/edit-credit-card-service/code"
        },
        {
          title: "Event notification",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/event-notification/usage"
        },
        {
          title: "In-context assign access",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/iamassign-access/usage"
        },
        {
          title: "In-context assign authorization",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/iamassign-authorization/usage"
        },
        {
          title: "In-context delete access",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/iamdelete-access/usage"
        },
        {
          title: "In-context edit access",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/iamedit-access/usage"
        },
        {
          title: "Key protect integration",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/key-protect-integration/usage"
        },
        {
          title: "Manual payment service",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/manual-payment-service/code"
        },
        {
          title: "Observe button",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/observe-button/usage"
        },
        {
          title: "Observe overflow menu item",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/observe-overflow-menu-item/usage"
        },
        {
          title: "Observe supertenancy modal",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/observe-supertenancy-modal/usage"
        },
        {
          title: "Replace credit card service",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/replace-credit-card-service/code"
        },
        {
          title: "Service usage breakdown",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/connected/service-usage-breakdown/code"
        }
      ]
    },
    {
      title: "Cloud utilities",
      pages: [
        {
          title: "formatDateNumeric",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/formatdatenumeric/code"
        },
        {
          title: "getDateLocaleFormat",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/getdatelocaleformat/code"
        },
        {
          title: "getDateLocalePlaceholder",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/getdatelocaleplaceholder/code"
        },
        {
          title: "getFormattingLocale",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/getformattinglocale/code"
        },
        {
          title: "getLocale",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/getlocale/code"
        },
        {
          title: "sendObserveAnalytic",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/sendobserveanalytic/code"
        },
        {
          title: "useDataHelper",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/usedatahelper/code"
        },
        {
          title: "useThemePreference",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/usethemepreference/code"
        },
        {
          title: "useWindowResize",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/utilities/usewindowresize/code"
        }
      ],
      hasDivider: true
    },
    {
      title: "AI Design guidance",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/pal/ai-design/overview"
        },
        {
          title: "AI explainability",
          path: "https://pages.github.ibm.com/cdai-design/pal/ai-design/ai-explainability"
        }
      ]
    },
    {
      title: "Cloud PAL guidance",
      pages: [
        {
          title: "About Cloud PAL",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/about/overview"
        },
        {
          title: "Cloud assistant",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/cloud-assistant"
        },
        {
          title: "Cloud brand colors",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/color"
        },
        {
          title: "Cloud PAL 2.0",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/cloudpal-v2/overview"
        },
        {
          title: "Cloud PAL Design Guild",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/cloud-pal-office-hours"
        },
        {
          title: "Getting started",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/design-guidelines/getting-started/"
        },
        {
          title: "Grid on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/grid"
        },
        {
          title: "Guidance videos",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/guidance-videos-cloud-pal-moments"
        },
        {
          title: "Illustration on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/illustration"
        },
        {
          title: "Infrastructure dependencies",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/infrastructure-dependencies"
        },
        {
          title: "Motion design on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/design-guidelines/motion/overview"
        },
        {
          title: "Navigation on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/navigation-on-cloud"
        },
        {
          title: "RMC app icons",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/app-icons"
        },
        {
          title: "RMC catalog entry",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/rmc-catalog-entry"
        },
        {
          title: "RMC UX approval rubric",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/rmc-rubric"
        },
        {
          title: "WalkMe on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/walkme/usage"
        },
        {
          title: "Worlds",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/cloudpal-guidance/worlds"
        }
      ]
    },
    {
      title: "Cloud Pak guidance",
      pages: [
        {
          title: "Cross Pak switcher",
          path: "https://pages.github.ibm.com/cdai-design/pal/cloud-paks/cross-pak-switcher/usage"
        },
        {
          title: "Global header",
          path: "https://pages.github.ibm.com/cdai-design/pal/patterns/global-header/usage/"
        },
        {
          title: "Global search",
          path: "https://pages.github.ibm.com/cdai-design/pal/cloud-paks/global-search/overview/"
        },
        {
          title: "Integrated interactions",
          path: "https://pages.github.ibm.com/cdai-design/pal/cloud-paks/integrated-framework/overview"
        },
        {
          title: "Login",
          path: "https://pages.github.ibm.com/cdai-design/pal/cloud-paks/login/usage"
        },
        {
          title: "Navigation",
          path: "https://pages.github.ibm.com/cdai-design/pal/cloud-paks/navigation/usage"
        }
      ]
    },
    {
      title: "Try offers",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/pal/try-offers/overview"
        },
      ],
      hasDivider: true
    },
    {
      title: "PLG and MultiCloud SaaS",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/pal/saas-for-hyperscalers/overview"
        },
      ],
      hasDivider: true
    },
    {
      title: "Novice to pro guidance",
      pages: [
        { title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/pal/novice-to-pro/overview"
        },
      ]
    },
    {
      title: "Assist Me",
      pages: [
        {
          path: "https://pages.github.ibm.com/cdai-design/pal/assistance-panel/overview",
          pathDepth: 1
        }
      ]
    },
    {
      title: "WalkMe",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/pal/walkme-guide/overview"
        },
      ],
      hasDivider: true
    },
    {
      title: "Product gallery",
      pages: [
        {
          title: "Product gallery",
          path: "https://pages.github.ibm.com/cdai-design/pal/product-gallery/gallery"
        },
      ],
      hasDivider: true
    },
    {
      title: "Content guidance",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/main/overview"
        },
        {
          title: "Button labels",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/button-labels"
        },
        {
          title: "Capitalization",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/capitalization"
        },
        {
          title: "Content heuristics",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/content-heuristics"
        },
        {
          title: "Content principles",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/content-principles"
        },
        {
          title: "Date and time formats",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/date-and-time"
        },
        {
          title: "Information architecture",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/ia"
        },
        {
          title: "Language and grammar",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/language-and-grammar"
        },
        {
          title: "Navigation labels",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/navigation-labels"
        },
        {
          title: "Numbers",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/numbers"
        },
        {
          title: "Our personality",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/our-personality"
        },
        {
          title: "Punctuation",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/punctuation"
        },
        {
          title: "Terminology",
          path: "https://pages.github.ibm.com/cdai-design/pal/content/terminology/approved-terms"
        }
      ]
    },
    {
      title: "Dark mode guidance",
      pages: [
        {
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/dark-mode-guidelines/designers",
          pathDepth: 1
        }
      ]
    },
    {
      title: "Development guidance",
      pages: [
        {
          title: "Bug management",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/bug-management"
        },
        {
          title: "Carbon on Cloud",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/carbon/overview"
        },
        {
          title: "Cloud connected components",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/connected-components/overview",
          pathDepth: 3
        },
        {
          title: "Cloud data hooks",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/data-hooks/overview"
        },
        {
          title: "Cloud development guidelines",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/getting-started"
        },
        {
          title: "Cloud hosted components",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/hosted/overview"
        },
        {
          title: "Cloud provider component",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/provider/overview"
        },
        {
          title: "Components",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/components/overview"
        },
        {
          title: "Deprecation",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/deprecation"
        },
        {
          title: "Layouts",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/layouts/overview"
        },
        {
          title: "Toolkit",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/toolkit/overview/"
        },
        {
          title: "Utilities",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/utilities/overview"
        }
      ]
    },
    {
      title: "Keyboard guidance",
      pages: [
        { 
          path: "https://pages.github.ibm.com/cdai-design/pal/keyboard-guidance",
          pathDepth: 1
        }
      ]
    },
    {
      title: "Illustration",
      pages: [
        {
          path: "https://pages.github.ibm.com/cdai-design/pal/illustrations/library",
          pathDepth: 1
        }
      ]
    },
    {
      title: "Third-party logos",
      pages: [
        {
          path: "https://pages.github.ibm.com/cdai-design/pal/third-party-logos/usage",
        }
      ],
      hasDivider: true
    },
    {
      title: "Design kits",
      pages: [
        {
          title: "Design kits",
          path: "https://pages.github.ibm.com/cdai-design/pal/design-kits/figma/",
          pathDepth: 1,
        },
      ]
    },
    {
      title: "Contributing to IBM Products",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/pal/contributing/overview"
        },
        {
          title: "Contribution framework",
          path: "https://pages.github.ibm.com/cdai-design/pal/contributing/contribution-framework/intent"
        },
        {
          title: "Implementation",
          path: "https://pages.github.ibm.com/cdai-design/pal/contributing/coding-components-patterns/overview"
        },
        {
          title: "Publishing documentation",
          path: "https://pages.github.ibm.com/cdai-design/pal/contributing/updating-this-site/overview"
        }
      ]
    },
    {
      title: "Contributing to Cloud PAL",
      pages: [
        {
          title: "Overview",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/how-to-contribute/overview/overview"
        },
        {
          title: "Contribution guidelines",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/development-guidelines/contribution-guidelines"
        },
        {
          title: "Components",
          path: "https://pages.github.ibm.com/cdai-design/cloud-pal/how-to-contribute/components/process"
        }
      ]
    }
  ];

  return navItems;
}
