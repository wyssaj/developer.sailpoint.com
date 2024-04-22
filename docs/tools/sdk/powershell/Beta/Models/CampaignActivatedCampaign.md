---
id: campaign-activated-campaign
title: CampaignActivatedCampaign
pagination_label: CampaignActivatedCampaign
sidebar_label: CampaignActivatedCampaign
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CampaignActivatedCampaign'] 
slug: /tools/sdk/powershell/beta/models/campaign-activated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignActivatedCampaign']
---


# CampaignActivatedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Unique ID for the campaign. | 
**Name** |  **String** | The human friendly name of the campaign. | 
**Description** |  **String** | Extended description of the campaign. | 
**Created** |  **System.DateTime** | The date and time the campaign was created. | 
**Modified** |  Pointer to **System.DateTime** | The date and time the campaign was last modified. | [optional] 
**Deadline** |  **System.DateTime** | The date and time the campaign is due. | 
**Type** |   **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION" ] | The type of campaign. | 
**CampaignOwner** |  [**CampaignActivatedCampaignCampaignOwner**](campaign-activated-campaign-campaign-owner) |  | 
**Status** |   **Enum** [  "ACTIVE" ] | The current status of the campaign. | 

## Examples

- Prepare the resource
```powershell
$CampaignActivatedCampaign = Initialize-BetaCampaignActivatedCampaign  -Id 2c91808576f886190176f88cac5a0010 `
 -Name Manager Access Campaign `
 -Description Audit access for all employees. `
 -Created 2021-02-16T03:04:45.815Z `
 -Modified 2021-02-16T03:06:45.815Z `
 -Deadline 2021-03-16T03:04:45.815Z `
 -Type MANAGER `
 -CampaignOwner null `
 -Status ACTIVE
```

- Convert the resource to JSON
```powershell
$CampaignActivatedCampaign | ConvertTo-JSON
```


[[Back to top]](#) 
