---
id: source-deleted
title: SourceDeleted
pagination_label: SourceDeleted
sidebar_label: SourceDeleted
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceDeleted'] 
slug: /tools/sdk/powershell/beta/models/source-deleted
tags: ['SDK', 'Software Development Kit', 'SourceDeleted']
---


# SourceDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the source. | 
**Name** |  **String** | Human friendly name of the source. | 
**Type** |  **String** | The connection type. | 
**Deleted** |  **System.DateTime** | The date and time the source was deleted. | 
**Connector** |  **String** | The connector type used to connect to the source. | 
**Actor** |  [**SourceDeletedActor**](source-deleted-actor) |  | 

## Examples

- Prepare the resource
```powershell
$SourceDeleted = Initialize-BetaSourceDeleted  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Test source `
 -Type DIRECT_CONNECT `
 -Deleted 2021-03-29T22:01:50.474Z `
 -Connector active-directory `
 -Actor null
```

- Convert the resource to JSON
```powershell
$SourceDeleted | ConvertTo-JSON
```


[[Back to top]](#) 
