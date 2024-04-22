---
id: list-campaign-filters200-response
title: ListCampaignFilters200Response
pagination_label: ListCampaignFilters200Response
sidebar_label: ListCampaignFilters200Response
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ListCampaignFilters200Response'] 
slug: /tools/sdk/powershell/v3/models/list-campaign-filters200-response
tags: ['SDK', 'Software Development Kit', 'ListCampaignFilters200Response']
---


# ListCampaignFilters200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** |  Pointer to [**[]CampaignFilterDetails**](campaign-filter-details) | The list of campaign filters | [optional] 
**Count** |  Pointer to **Int32** | The number of filters returned | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCampaignFilters200Response = Initialize-ListCampaignFilters200Response  -Items null `
 -Count 2
```

- Convert the resource to JSON
```powershell
$ListCampaignFilters200Response | ConvertTo-JSON
```


[[Back to top]](#) 
