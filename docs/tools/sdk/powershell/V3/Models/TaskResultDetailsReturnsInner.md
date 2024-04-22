---
id: task-result-details-returns-inner
title: TaskResultDetailsReturnsInner
pagination_label: TaskResultDetailsReturnsInner
sidebar_label: TaskResultDetailsReturnsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TaskResultDetailsReturnsInner'] 
slug: /tools/sdk/powershell/v3/models/task-result-details-returns-inner
tags: ['SDK', 'Software Development Kit', 'TaskResultDetailsReturnsInner']
---


# TaskResultDetailsReturnsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayLabel** |  Pointer to **String** | Attribute description. | [optional] 
**AttributeName** |  Pointer to **String** | System or database attribute name. | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultDetailsReturnsInner = Initialize-TaskResultDetailsReturnsInner  -DisplayLabel   `
 -AttributeName  
```

- Convert the resource to JSON
```powershell
$TaskResultDetailsReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 
