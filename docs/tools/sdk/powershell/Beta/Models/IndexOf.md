---
id: index-of
title: IndexOf
pagination_label: IndexOf
sidebar_label: IndexOf
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IndexOf'] 
slug: /tools/sdk/powershell/beta/models/index-of
tags: ['SDK', 'Software Development Kit', 'IndexOf']
---


# IndexOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Substring** |  **String** | A substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$IndexOf = Initialize-BetaIndexOf  -Substring admin_ `
 -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$IndexOf | ConvertTo-JSON
```


[[Back to top]](#) 
