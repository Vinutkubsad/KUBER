 declare var baseUrl : any;

export class AppSettings{
    public static BASE_URL = baseUrl;
    public static PAYMENT_REPORT='/v1/charityAdmin/getReports';
    public static CHARITY_REGISTER = '/v1/charities/addCharities';
    public static ADMIN_LOGIN = '/v1/authenticate/login?role=admin';
    public static CHARITY_ALL = '/v1/admin/charitiesList';
    public static APPROVE_CHARITY = '/v1/admin/approveCharity';
    public static CHARITY_LOGIN = '/v1/charities/login';
    public static SEARCH_REPORT='/v1/charityAdmin/searchReports';
    public static SEND_MESSAGE= '/v1/userDetails/adminhelp';
    public static PLEDGES_LIST='/v1/gift/pledgeDetails';
    public static BALANCE = '/v1/charityAdmin/connectedBalance';
    public static DATE_FILTER= '/v1/charityAdmin/dateFilter';
    public static REPORTS = '/v1/charityAdmin/getAllReports';
    public static GET_CHARITY_ID= '/v1/admin/getCharityById/'
    public static EDIT_CHARITY='/v1/admin/editCharity/';
    public static STIPE_ID='/v1/charityAdmin/authorize';
    public static PAYOUT='/v1/charityAdmin/payout';
}

