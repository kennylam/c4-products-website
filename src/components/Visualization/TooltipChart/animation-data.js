const businessUnits = {
    "information": {
        businessUnit: "Information Architecture",
        color: "#4fbaba" //green
    },
    "ai": {
        businessUnit: "HPS, CCBAAS",
        color: "#5286fb" //blue
    },
    "automation": {
        businessUnit: "Automation Foundation",
        color: "#f185b5", //pink
    },
    "cloud": {
        businessUnit: "Public Cloud Platform",
        color: "#c2e5fe" //light b lue
    },
    "security": {
        businessUnit: "Security",
        color:"#8141f7" //purple
    }
}

const data = {
    "automation--content-navigator" : {
        businessUnit: businessUnits["automation"],
        productName: "Content Navigator",
        numberOfComponents: 4
    },
    "automation--app-designer" : {
        businessUnit: businessUnits["automation"],
        productName: "App Designer",
        numberOfComponents: 9
    },
    "automation--app-navigator" : {
        businessUnit: businessUnits["automation"],
        productName: "App Navigator",
        numberOfComponents: 8
    },
    "automation--autopilot" : {
        businessUnit: businessUnits["automation"],
        productName: "Autopilot",
        numberOfComponents: 3
    },
    "automation--cloud-pak-automation" : {
        businessUnit: businessUnits["automation"],
        productName: "Cloud Pak for Automation",
        numberOfComponents: 7
    },
    "automation--cloud-pak-business" : {
        businessUnit: businessUnits["automation"],
        productName: "Cloud Pak for Business Automation - Studio",
        numberOfComponents: 0
    },
    "automation--cloud-pak-integration" : {
        businessUnit: businessUnits["automation"],
        productName: "Cloud Pak for Integration",
        numberOfComponents: 0
    },
    "automation--cloud-pak-ai-ops" : {
        businessUnit: businessUnits["automation"],
        productName: "Cloud Pak for \n Watson AI Ops",
        numberOfComponents: 16
    },
    "automation--content-designer" : {
        businessUnit: businessUnits["automation"],
        productName: "Content Designer",
        numberOfComponents: 10
    },
    "automation--api-connect" : {
        businessUnit: businessUnits["automation"],
        productName: "CP4I - API Connect",
        numberOfComponents: 4
    },
    "automation--api-connect-test" : {
        businessUnit: businessUnits["automation"],
        productName: "CP4I - API Connect \n Test and Monitor",
        numberOfComponents: 13
    },
    "automation--app-connect" : {
        businessUnit: businessUnits["automation"],
        productName: "CP4I - App Connect",
        numberOfComponents: 14
    },
    "automation--data-power" : {
        businessUnit: businessUnits["automation"],
        productName: "CP4I - DataPower",
        numberOfComponents: 11
    },
    "automation--event-streams" : {
        businessUnit: businessUnits["automation"],
        productName: "CP4I - Event Streams",
        numberOfComponents: 12
    },
    "automation--mq" : {
        businessUnit: businessUnits["automation"],
        productName: "CP4I - MQ",
        numberOfComponents: 11
    },
    "automation--decision-designer" : {
        businessUnit: businessUnits["automation"],
        productName: "Decision Designer",
        numberOfComponents: 3
    },
    "automation--edge-application" : {
        businessUnit: businessUnits["automation"],
        productName: "Edge Application Manager",
        numberOfComponents: 9
    },
    "automation--workflow-designer" : {
        businessUnit: businessUnits["automation"],
        productName: "Intelligent Workflow Designer",
        numberOfComponents: 9
    },
    "automation--mono2micro" : {
        businessUnit: businessUnits["automation"],
        productName: "Mono2Micro",
        numberOfComponents: 0
    },
    "automation--myinvenio" : {
        businessUnit: businessUnits["automation"],
        productName: "MyInvenio - \n Process mining",
        numberOfComponents: 13
    },
    "automation--no-investment" : {
        businessUnit: businessUnits["automation"],
        productName: "Business Performance Center",
        numberOfComponents: 8
    },
    "automation--platform-navigator" : {
        businessUnit: businessUnits["automation"],
        productName: "Platform Navigator",
        numberOfComponents: 1
    },
    "automation--robotic-process" : {
        businessUnit: businessUnits["automation"],
        productName: "Robotic Process Automation - Server",
        numberOfComponents: 13
    },
    "automation--turbonomic" : {
        businessUnit: businessUnits["automation"],
        productName: "Turbonomic",
        numberOfComponents: 2
    },
    "automation--websphere" : {
        businessUnit: businessUnits["automation"],
        productName: "Websphere Automation",
        numberOfComponents: 1
    },
    "automation--workstreams" : {
        businessUnit: businessUnits["automation"],
        productName: "Workstreams",
        numberOfComponents: 7
    },
    "ai--alert-insights" : {
        businessUnit: businessUnits["ai"],
        productName: "Alert Insight - \n Primary Monitoring",
        numberOfComponents: 3
    },
    "ai--cognos" : {
        businessUnit: businessUnits["ai"],
        productName: "Cognos Analytics",
        numberOfComponents: 15
    },
    "ai--commercial-payments" : {
        businessUnit: businessUnits["ai"],
        productName: "Commercial Payments",
        numberOfComponents: 1
    },
    "ai--due-dilligence" : {
        businessUnit: businessUnits["ai"],
        productName: "Due Dilligence",
        numberOfComponents: 3
    },
    "ai--insurance-claim-fraud" : {
        businessUnit: businessUnits["ai"],
        productName: "Insurance Claim Fraud",
        numberOfComponents: 5
    },
    "ai--investigative" : {
        businessUnit: businessUnits["ai"],
        productName: "Investigative UI",
        numberOfComponents: 1
    },
    "ai--open-pages" : {
        businessUnit: businessUnits["ai"],
        productName: "Open Pages",
        numberOfComponents: 14
    },
    "ai--planning-analytics" : {
        businessUnit: businessUnits["ai"],
        productName: "Planning Analytics",
        numberOfComponents: 18
    },
    "ai--safer-payments" : {
        businessUnit: businessUnits["ai"],
        productName: "Safer Payments",
        numberOfComponents: 1
    },
    "ai--surveillance" : {
        businessUnit: businessUnits["ai"],
        productName: "Surveillance Insight",
        numberOfComponents: 1
    },
    "ai--watson-assistant" : {
        businessUnit: businessUnits["ai"],
        productName: "Watson Assistant",
        numberOfComponents: 14
    },
    "ai--watson-discovery" : {
        businessUnit: businessUnits["ai"],
        productName: "Watson Discovery \n (Ninja Z)",
        numberOfComponents: 17
    },
    "public-cloud--platform" : {
        businessUnit: businessUnits["cloud"],
        productName: "Public Cloud Platform",
        numberOfComponents: 9
    },
    "information--cloud-pak" : {
        businessUnit: businessUnits["information"],
        productName: "Cloud Pak for Data",
        numberOfComponents: 20
    },
    "information--data-lineage" : {
        businessUnit: businessUnits["information"],
        productName: "Data Lineage",
        numberOfComponents: 9
    },
    "information--data-management-console" : {
        businessUnit: businessUnits["information"],
        productName: "Data Management Console",
        numberOfComponents: 12
    },
    "information--data-privacy" : {
        businessUnit: businessUnits["information"],
        productName: "Data Privacy",
        numberOfComponents: 15
    },
    "information--data-quality" : {
        businessUnit: businessUnits["information"],
        productName: "Data Quality",
        numberOfComponents: 6
    },
    "information--data-virtualization" : {
        businessUnit: businessUnits["information"],
        productName: "Data Virtualization",
        numberOfComponents: 17
    },
    "information--data-warehouse" : {
        businessUnit: businessUnits["information"],
        productName: "Data Warehouse on Cloud",
        numberOfComponents: 23
    },
    "information--data-stage" : {
        businessUnit: businessUnits["information"],
        productName: "Data Stage",
        numberOfComponents: 16
    },
    "information--db2-oncloud" : {
        businessUnit: businessUnits["information"],
        productName: "Db2 on Cloud",
        numberOfComponents: 15
    },
    "information--decision-optimization" : {
        businessUnit: businessUnits["information"],
        productName: "Decision Optimization",
        numberOfComponents: 16
    },
    "information--match-360" : {
        businessUnit: businessUnits["information"],
        productName: "Match 360 w/ Watson",
        numberOfComponents: 14
    },
    "information--spss" : {
        businessUnit: businessUnits["information"],
        productName: "SPSS Statistics",
        numberOfComponents: 1
    },
    "information--uniscan" : {
        businessUnit: businessUnits["information"],
        productName: "Uniscan",
        numberOfComponents: 14
    },
    "information--watson-knowledge" : {
        businessUnit: businessUnits["information"],
        productName: "Watson Knowledge Catalog",
        numberOfComponents: 16
    },
    "information--watson-machine-learning" : {
        businessUnit: businessUnits["information"],
        productName: "Watson Machine Learning",
        numberOfComponents: 16
    },
    "information--watson-openscale" : {
        businessUnit: businessUnits["information"],
        productName: "Watson OpenScale",
        numberOfComponents: 13
    },
    "information--watson-studio" : {
        businessUnit: businessUnits["information"],
        productName: "Watson Studio/Desktop",
        numberOfComponents: 18
    },
    "security--case-management" : {
        businessUnit: businessUnits["security"],
        productName: "Case Management",
        numberOfComponents: 9
    },
    "security--cp4s" : {
        businessUnit: businessUnits["security"],
        productName: "CP4S Platform",
        numberOfComponents: 19
    },
    "security--data-explorer" : {
        businessUnit: businessUnits["security"],
        productName: "Data Explorer",
        numberOfComponents: 13
    },
    "security--guardium" : {
        businessUnit: businessUnits["security"],
        productName: "Guardium Insights",
        numberOfComponents: 8
    },
    "security--qradar" : {
        businessUnit: businessUnits["security"],
        productName: "QRadar Analyst Workflow",
        numberOfComponents: 17
    },
    "security--risk-manager" : {
        businessUnit: businessUnits["security"],
        productName: "Risk Manager",
        numberOfComponents: 7
    },
    "security--soar" : {
        businessUnit: businessUnits["security"],
        productName: "SOAR: Playbook Designer",
        numberOfComponents: 9
    },
    "security--threat-investigator" : {
        businessUnit: businessUnits["security"],
        productName: "Threat Investigator",
        numberOfComponents: 9
    },
    "security--uba" : {
        businessUnit: businessUnits["security"],
        productName: "User Behavior Analytics",
        numberOfComponents: 7
    },
    "security--ucm" : {
        businessUnit: businessUnits["security"],
        productName: "Use Case Manager",
        numberOfComponents: 9
    },
    "security--verify" : {
        businessUnit: businessUnits["security"],
        productName: "Verify",
        numberOfComponents: 14
    },

}

export { data, businessUnits }