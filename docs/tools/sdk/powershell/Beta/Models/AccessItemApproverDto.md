---
id: access-item-approver-dto
title: AccessItemApproverDto
pagination_label: AccessItemApproverDto
sidebar_label: AccessItemApproverDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessItemApproverDto'] 
slug: /tools/sdk/powershell/beta/models/access-item-approver-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemApproverDto']
---


# AccessItemApproverDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | DTO type of identity who approved the access item request. | [optional] 
**Id** |  Pointer to **String** | ID of identity who approved the access item request. | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity who approved the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemApproverDto = Initialize-BetaAccessItemApproverDto  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccessItemApproverDto | ConvertTo-JSON
```


[[Back to top]](#) 
