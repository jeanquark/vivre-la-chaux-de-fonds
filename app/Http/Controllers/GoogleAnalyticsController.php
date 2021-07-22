<?php

namespace App\Http\Controllers;
use Spatie\Analytics\Period;
use Spatie\Analytics\Analytics;
use Spatie\Analytics\AnalyticsFacade;

class GoogleAnalyticsController extends Controller
{
    // https://developers.google.com/analytics/devguides/config/mgmt/v3/quickstart/service-php
    public function getData()
    {
        // $abc = 'abc';
        // return array($abc);

        // $analyticsData = AnalyticsFacade::fetchVisitorsAndPageViews(Period::days(7));
        // $allViews = AnalyticsFacade::fetchMostVisitedPages(Period::days(7));
        // $totalViews = AnalyticsFacade::performQuery(
        //     Period::years(1),
        //     'ga:sessions',
        //     [
        //         'metrics' => 'ga:sessions, ga:pageviews',
        //         'dimensions' => 'ga:yearMonth'
        //     ]
        // );
     
        // return array($analyticsData, $allViews, $totalViews);

        $lastWeek = AnalyticsFacade::performQuery(
            Period::days(7),
            'ga:sessions',
            [
                'metrics' => 'ga:sessions, ga:pageViews, ga:sessionDuration',
                'dimensions' => 'ga:date'
            ]
        );
        $lastMonth = AnalyticsFacade::performQuery(
            Period::months(1),
            'ga:sessions',
            [
                'metrics' => 'ga:sessions, ga:pageViews',
                'dimensions' => 'ga:yearWeek'
            ]
        );
        $lastYear = AnalyticsFacade::performQuery(
            Period::years(1),
            'ga:sessions',
            [
                'metrics' => 'ga:sessions, ga:pageViews',
                'dimensions' => 'ga:yearMonth'
            ]
        );

        $country = AnalyticsFacade::performQuery(
            Period::months(6),
            'ga:sessions',
            [
                'metrics' => 'ga:sessions, ga:pageViews',
                'dimensions' => 'ga:country',
                'sort' => '-ga:sessions'
            ]
        );
        return array($lastWeek, $lastMonth, $lastYear, $country);

        // $analytics = $this->initializeAnalytics();
        // $response = $this->getReport($analytics);
        // $results = $this->printResults($response);
        // return response()->json($analytics, 200);
        // return response()->json($response->reports[0]['data'], 200);
        // return response()->json($response, 200);
        // return response()->json($results, 200);
    }

    public function initializeAnalytics()
    {

        // Use the developers console and download your service account
        // credentials in JSON format. Place them in this directory or
        // change the key file location if necessary.
        $KEY_FILE_LOCATION = base_path() . '/service-account-credentials.json';

        // Create and configure a new client object.
        $client = new \Google_Client();
        $client->setApplicationName("Hello Analytics Reporting");
        $client->setAuthConfig($KEY_FILE_LOCATION);
        $client->setScopes(['https://www.googleapis.com/auth/analytics.readonly']);
        $analytics = new \Google_Service_AnalyticsReporting($client);

        return $analytics;
    }

    public function getReport($analytics)
    {

        // Replace with your view ID, for example XXXX.
        // $VIEW_ID = "2130670580"; // Vivre La Chaux-de-Fonds
        $VIEW_ID = "232130649"; // Vivre La Chaux-de-Fonds 2
        // $VIEW_ID = "199421687"; // KB-Avocats

        // Create the DateRange object.
        $dateRange1 = new \Google_Service_AnalyticsReporting_DateRange();
        $dateRange1->setStartDate("9DaysAgo");
        $dateRange1->setEndDate("today");

        $dateRange2 = new \Google_Service_AnalyticsReporting_DateRange();
        $dateRange2->setStartDate("19DaysAgo");
        $dateRange2->setEndDate("10DaysAgo");

        $dateRange3 = new \Google_Service_AnalyticsReporting_DateRange();
        $dateRange3->setStartDate("30DaysAgo");
        $dateRange3->setEndDate("today");

        // Create the Metrics object.
        $metric1 = new \Google_Service_AnalyticsReporting_Metric();
        // $sessions->setExpression("ga:sessions");
        $metric1->setExpression("ga:sessions");
        $metric1->setAlias("sessions");
        // $sessions->setExpression("ga:pageviews");
        // $sessions->setAlias("sessions");
        // $sessions->setAlias("sessions,country");

        $metric2 = new \Google_Service_AnalyticsReporting_Metric();
        $metric2->setExpression("ga:pageviews");
        $metric2->setAlias("pageviews");

        $metric3 = new \Google_Service_AnalyticsReporting_Metric();
        $metric3->setExpression("ga:newUsers");
        $metric3->setAlias("newUsers");

        $metric4 = new \Google_Service_AnalyticsReporting_Metric();
        $metric4->setExpression("ga:bounceRate");
        $metric4->setAlias("bounceRate");

        // $country = new \Google_Service_AnalyticsReporting_Dimension();
        // $country->setName("ga:country");

        $city = new \Google_Service_AnalyticsReporting_Dimension();
        $city->setName("ga:city");

        $date = new \Google_Service_AnalyticsReporting_Dimension();
        $date->setName("ga:date");

        // $ordering = new Google_Service_AnalyticsReporting_OrderBy();
        // // $ordering->setOrderType("HISTOGRAM_BUCKET");
        // $ordering->setFieldName("ga:date");

        // Create the ReportRequest object.
        $request1 = new \Google_Service_AnalyticsReporting_ReportRequest();
        $request1->setViewId($VIEW_ID);
        $request1->setMetrics(array($metric1, $metric2, $metric3, $metric4));
        $request1->setDateRanges(array($dateRange1, $dateRange2));
        $request1->setDimensions(array($date));
        $request1->setIncludeEmptyRows(true);

        $ordering = new \Google_Service_AnalyticsReporting_OrderBy();
        $ordering->setFieldName("ga:sessions");
        $ordering->setOrderType("VALUE");
        $ordering->setSortOrder("DESCENDING");

        $request2 = new \Google_Service_AnalyticsReporting_ReportRequest();
        $request2->setViewId($VIEW_ID);
        $request2->setDateRanges($dateRange3);
        $request2->setDimensions(array($city));
        $request2->setMetrics(array($metric1));
        $request2->setOrderBys($ordering);
        $request2->setPageSize(10);
        $request2->setIncludeEmptyRows(true);
        

        $body1 = new \Google_Service_AnalyticsReporting_GetReportsRequest();
        $body1->setReportRequests(array($request1));

        $body2 = new \Google_Service_AnalyticsReporting_GetReportsRequest();
        $body2->setReportRequests(array($request2));

        // return $analytics->reports->batchGet($body);
        return array($analytics->reports->batchGet($body1), $analytics->reports->batchGet($body2));
    }

    public function printResults($reports)
    {
        $abc;
        for ($reportIndex = 0; $reportIndex < count($reports); $reportIndex++) {
            $report = $reports[$reportIndex];
            $header = $report->getColumnHeader();
            $dimensionHeaders = $header->getDimensions();
            $metricHeaders = $header->getMetricHeader()->getMetricHeaderEntries();
            $rows = $report->getData()->getRows();

            for ($rowIndex = 0; $rowIndex < count($rows); $rowIndex++) {
                $row = $rows[$rowIndex];
                $dimensions = $row->getDimensions();
                $metrics = $row->getMetrics();
                for ($i = 0; $i < count($dimensionHeaders) && $i < count($dimensions); $i++) {
                    print($dimensionHeaders[$i] . ": " . $dimensions[$i] . "\n");
                    // $abc($dimensionHeaders[$i] . ": " . $dimensions[$i] . "\n")
                }

                for ($j = 0; $j < count($metrics); $j++) {
                    $values = $metrics[$j]->getValues();
                    for ($k = 0; $k < count($values); $k++) {
                        $entry = $metricHeaders[$k];
                        print($entry->getName() . ": " . $values[$k] . "\n");
                    }
                }
            }
        }
    }

}
