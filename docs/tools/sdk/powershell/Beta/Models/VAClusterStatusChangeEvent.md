---
id: va-cluster-status-change-event
title: VAClusterStatusChangeEvent
pagination_label: VAClusterStatusChangeEvent
sidebar_label: VAClusterStatusChangeEvent
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'VAClusterStatusChangeEvent'] 
slug: /tools/sdk/powershell/beta/models/va-cluster-status-change-event
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEvent']
---


# VAClusterStatusChangeEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** |  **System.DateTime** | The date and time the status change occurred. | 
**Type** |   **Enum** [  "SOURCE",    "CLUSTER" ] | The type of the object that initiated this event. | 
**Application** |  [**VAClusterStatusChangeEventApplication**](va-cluster-status-change-event-application) |  | 
**HealthCheckResult** |  [**VAClusterStatusChangeEventHealthCheckResult**](va-cluster-status-change-event-health-check-result) |  | 
**PreviousHealthCheckResult** |  [**VAClusterStatusChangeEventPreviousHealthCheckResult**](va-cluster-status-change-event-previous-health-check-result) |  | 

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEvent = Initialize-BetaVAClusterStatusChangeEvent  -Created 2020-06-29T22:01:50.474Z `
 -Type CLUSTER `
 -Application null `
 -HealthCheckResult null `
 -PreviousHealthCheckResult null
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEvent | ConvertTo-JSON
```


[[Back to top]](#) 
