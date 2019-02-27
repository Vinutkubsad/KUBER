 declare var baseUrl : any;

export class AppSettings{
    public static BASE_URL = baseUrl;
    public static LOGIN = '/charities/login';
    public static PAYMENT_REPORT='/v1/reports/getReports';
    public static SEARCH_REPORT='/v1/reports/searchReports';
}