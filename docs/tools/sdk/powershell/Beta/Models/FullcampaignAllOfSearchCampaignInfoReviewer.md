---
id: fullcampaign-all-of-search-campaign-info-reviewer
title: FullcampaignAllOfSearchCampaignInfoReviewer
pagination_label: FullcampaignAllOfSearchCampaignInfoReviewer
sidebar_label: FullcampaignAllOfSearchCampaignInfoReviewer
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FullcampaignAllOfSearchCampaignInfoReviewer'] 
slug: /tools/sdk/powershell/beta/models/fullcampaign-all-of-search-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSearchCampaignInfoReviewer']
---


# FullcampaignAllOfSearchCampaignInfoReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | The reviewer&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | The reviewer&#39;s ID. | [optional] 
**Name** |  Pointer to **String** | The reviewer&#39;s name. | [optional] 

## Examples

- Prepare the resource
```powershell
$FullcampaignAllOfSearchCampaignInfoReviewer = Initialize-BetaFullcampaignAllOfSearchCampaignInfoReviewer  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$FullcampaignAllOfSearchCampaignInfoReviewer | ConvertTo-JSON
```


[[Back to top]](#) 
