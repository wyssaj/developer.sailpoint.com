---
id: workgroup-dto-owner
title: WorkgroupDtoOwner
pagination_label: WorkgroupDtoOwner
sidebar_label: WorkgroupDtoOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkgroupDtoOwner'] 
slug: /tools/sdk/powershell/beta/models/workgroup-dto-owner
tags: ['SDK', 'Software Development Kit', 'WorkgroupDtoOwner']
---


# WorkgroupDtoOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Owner&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Owner&#39;s identity ID. | [optional] 
**Name** |  Pointer to **String** | Owner&#39;s name. | [optional] 
**DisplayName** |  Pointer to **String** | The display name of the identity | [optional] [readonly] 
**EmailAddress** |  Pointer to **String** | The primary email address of the identity | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$WorkgroupDtoOwner = Initialize-BetaWorkgroupDtoOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support `
 -DisplayName Support `
 -EmailAddress support@sailpoint.com
```

- Convert the resource to JSON
```powershell
$WorkgroupDtoOwner | ConvertTo-JSON
```


[[Back to top]](#) 
