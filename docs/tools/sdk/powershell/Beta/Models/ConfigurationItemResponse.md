---
id: configuration-item-response
title: ConfigurationItemResponse
pagination_label: ConfigurationItemResponse
sidebar_label: ConfigurationItemResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ConfigurationItemResponse'] 
slug: /tools/sdk/powershell/beta/models/configuration-item-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationItemResponse']
---


# ConfigurationItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  Pointer to [**Identity1**](identity1) |  | [optional] 
**ConfigDetails** |  Pointer to [**[]ConfigurationDetailsResponse**](configuration-details-response) | Details of how work should be reassigned for an Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigurationItemResponse = Initialize-BetaConfigurationItemResponse  -Identity null `
 -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$ConfigurationItemResponse | ConvertTo-JSON
```


[[Back to top]](#) 
