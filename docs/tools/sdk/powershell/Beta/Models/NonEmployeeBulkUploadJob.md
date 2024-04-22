---
id: non-employee-bulk-upload-job
title: NonEmployeeBulkUploadJob
pagination_label: NonEmployeeBulkUploadJob
sidebar_label: NonEmployeeBulkUploadJob
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeBulkUploadJob'] 
slug: /tools/sdk/powershell/beta/models/non-employee-bulk-upload-job
tags: ['SDK', 'Software Development Kit', 'NonEmployeeBulkUploadJob']
---


# NonEmployeeBulkUploadJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The bulk upload job&#39;s ID. (UUID) | [optional] 
**SourceId** |  Pointer to **String** | The ID of the source to bulk-upload non-employees to. (UUID) | [optional] 
**Created** |  Pointer to **System.DateTime** | The date-time the job was submitted. | [optional] 
**Modified** |  Pointer to **System.DateTime** | The date-time that the job was last updated. | [optional] 
**Status** |  Pointer to  **Enum** [  "PENDING",    "IN_PROGRESS",    "COMPLETED",    "ERROR" ] | Returns the following values indicating the progress or result of the bulk upload job. &quot;&quot;PENDING&quot;&quot; means the job is queued and waiting to be processed. &quot;&quot;IN_PROGRESS&quot;&quot; means the job is currently being processed. &quot;&quot;COMPLETED&quot;&quot; means the job has been completed without any errors. &quot;&quot;ERROR&quot;&quot; means the job failed to process with errors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeBulkUploadJob = Initialize-BetaNonEmployeeBulkUploadJob  -Id 2c91808568c529c60168cca6f90cffff `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Created 2019-08-23T18:52:59.162Z `
 -Modified 2019-08-23T18:52:59.162Z `
 -Status PENDING
```

- Convert the resource to JSON
```powershell
$NonEmployeeBulkUploadJob | ConvertTo-JSON
```


[[Back to top]](#) 
