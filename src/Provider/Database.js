class Database {
    constructor() {
        this.loggedInUser = 0;
        this.companyOnboarded = false;
        this.companyBusinessNature = '';
        this.companyBusinessIndustry = '';

        this.loggedInUserToken = '';
        this.companyUser = {
            'first_name': 'Sharath',
            'last_name': 'Chetty',
            'full_name': 'Sharath Chetty',
            'email': 'sharath@procorpsystems.co',
            'password': '12345678',
            'company_name': 'Procorp Systems Inc.',
        };
        this.businessNatures = ['Partnership Firm', 'Properitorship', 'Pvt. Ltd.', 'LLP'];
        this.businessIndustries = ['Automobiles', 'Banking', 'Entertainment', 'Finance', 'Information Technology', 'Retail'];
    }

}

export default Database;