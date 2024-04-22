---
id: list-access-profiles429-response
title: ListAccessProfiles429Response
pagination_label: ListAccessProfiles429Response
sidebar_label: ListAccessProfiles429Response
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ListAccessProfiles429Response'] 
slug: /tools/sdk/powershell/beta/models/list-access-profiles429-response
tags: ['SDK', 'Software Development Kit', 'ListAccessProfiles429Response']
---


# ListAccessProfiles429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccessProfiles429Response = Initialize-BetaListAccessProfiles429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListAccessProfiles429Response | ConvertTo-JSON
```


[[Back to top]](#) 
