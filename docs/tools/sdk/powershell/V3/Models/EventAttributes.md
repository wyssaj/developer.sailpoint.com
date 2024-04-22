---
id: event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EventAttributes'] 
slug: /tools/sdk/powershell/v3/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes']
---


# EventAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the trigger | 
**VarFilter** |  Pointer to **String** | JSON path expression that will limit which events the trigger will fire on | [optional] 

## Examples

- Prepare the resource
```powershell
$EventAttributes = Initialize-EventAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute == 'manager')]
```

- Convert the resource to JSON
```powershell
$EventAttributes | ConvertTo-JSON
```


[[Back to top]](#) 
