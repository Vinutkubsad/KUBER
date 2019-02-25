 declare var baseUrl : any;

export class AppSettings{
    public static BASE_URL = baseUrl;
    public static PAYMENT_REPORT='/v1/reports/getReports';
    public static CHARITY_URL = '/charities/addCharities';
    public static ADMIN_LOGIN = '/v1/authenticate/login?role=admin';
    public static CHARITY_ALL = '/v1/admin/charitiesList';
    public static APPROVE_CHARITY = '/v1/admin/approveCharity';
    public static CHARITY_LOGIN = '/charities/login';
}
// /5c6d0e9d677a4e2a2140b966?page&limit
