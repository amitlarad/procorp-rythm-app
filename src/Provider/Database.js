class Database {
  constructor() {
    this.loggedInUser = 0;
    this.companyOnboarded = false;
    this.companyBusinessNature = "";
    this.companyBusinessIndustry = "";

    this.loggedInUserToken = "";
    this.companyUser = {
      first_name: "Sharath",
      last_name: "Chetty",
      full_name: "Sharath Chetty",
      email: "sharath@procorpsystems.co",
      password: "12345678",
      company_name: "Procorp Systems Inc.",
    };
    this.businessNatures = [
      "Partnership Firm",
      "Properitorship",
      "Pvt. Ltd.",
      "LLP",
    ];
    this.businessIndustries = [
      "Automobiles",
      "Banking",
      "Entertainment",
      "Finance",
      "Information Technology",
      "Retail",
    ];

    this.ConfigCards = [
      {
        label: "Business Nature",
        desc: 'Manage business nature of the company',
        icon: "folder",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Locations",
        desc: 'Manage locations company is operating',
        icon: "globe",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Qualifications",
        desc: 'Manage qualification master for employee form',
        icon: "certificate",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Industries",
        desc: 'Manage industries master for employee form',
        icon: "industry",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Skills",
        desc: 'Manage skills master for employee form',
        icon: "list-alt",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Team Strength",
        desc: 'Manage project team types for project categories',
        icon: "user-cog",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Award Types",
        desc: 'Manage award types for employees performance',
        icon: "award",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Awards",
        desc: 'Manage employee award rules for different award types',
        icon: "trophy",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Configure Salaries",
        desc: 'Manage salary types for various designations, industries etc...',
        icon: "file-invoice-dollar",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
    ];

    this.ProjectsCards = [
      {
        label: "Clients",
        desc: 'Manage company clients',
        icon: "id-card",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Project Categories",
        desc: 'Manage project categories',
        icon: "table",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Projects",
        desc: 'Manage company projects',
        icon: "project-diagram",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Milestones",
        desc: 'Manage ongoing project milestones',
        icon: "clipboard-list",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Tasks",
        desc: 'Manage ongoing tasks and progress',
        icon: "calendar-check",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Teams",
        desc: 'Manage project teams and review performance',
        icon: "users",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
    ];

    this.EmployeeCards = [
      {
        label: "Employees",
        desc: 'Manage company employees',
        icon: "users",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Leaves",
        desc: 'Manage employee leaves',
        icon: "user-alt-slash",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Attendence",
        desc: 'Manage employee attendences',
        icon: "user-clock",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Transfers",
        desc: 'Manage company employees transfers',
        icon: "exchange-alt",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
    ];

    this.CompanyCards = [
      {
        label: "Departments",
        desc: 'Manage company departments',
        icon: "table",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Offices",
        desc: 'Manage company offices',
        icon: "building",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Designations",
        desc: 'manage company designations',
        icon: "user-tag",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Leave Types",
        desc: 'Manage company leaves quotas',
        icon: "unlink",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Holidays",
        desc: 'Manage company holiday calendar',
        icon: "gifts",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
      {
        label: "Expenses Categories",
        desc: 'Manage company expenses categories',
        icon: "money-check-alt",
        iconFamily: "FontAwesome5",
        iconSize: 40,
        navigateTo: "",
      },
    ];
  }
}

export default Database;
