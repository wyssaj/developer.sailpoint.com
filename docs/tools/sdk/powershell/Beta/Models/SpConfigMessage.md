---
id: sp-config-message
title: SpConfigMessage
pagination_label: SpConfigMessage
sidebar_label: SpConfigMessage
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SpConfigMessage'] 
slug: /tools/sdk/powershell/beta/models/sp-config-message
tags: ['SDK', 'Software Development Kit', 'SpConfigMessage']
---


# SpConfigMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  **String** | Message key. | 
**Text** |  **String** | Message text. | 
**Details** |  [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Message details if any, in key:value pairs. | 

## Examples

- Prepare the resource
```powershell
$SpConfigMessage = Initialize-BetaSpConfigMessage  -Key UNKNOWN_REFERENCE_RESOLVER `
 -Text Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity] `
 -Details {details=message details}
```

- Convert the resource to JSON
```powershell
$SpConfigMessage | ConvertTo-JSON
```


[[Back to top]](#) 
