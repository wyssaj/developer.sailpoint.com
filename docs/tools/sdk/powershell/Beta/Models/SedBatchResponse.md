---
id: sed-batch-response
title: SedBatchResponse
pagination_label: SedBatchResponse
sidebar_label: SedBatchResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SedBatchResponse'] 
slug: /tools/sdk/powershell/beta/models/sed-batch-response
tags: ['SDK', 'Software Development Kit', 'SedBatchResponse']
---


# SedBatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** |  Pointer to **String** | BatchId that groups all the ids together | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchResponse = Initialize-BetaSedBatchResponse  -BatchId 016629d1-1d25-463f-97f3-0c6686846650
```

- Convert the resource to JSON
```powershell
$SedBatchResponse | ConvertTo-JSON
```


[[Back to top]](#) 
