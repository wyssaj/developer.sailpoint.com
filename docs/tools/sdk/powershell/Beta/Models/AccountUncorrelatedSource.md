---
id: account-uncorrelated-source
title: AccountUncorrelatedSource
pagination_label: AccountUncorrelatedSource
sidebar_label: AccountUncorrelatedSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountUncorrelatedSource'] 
slug: /tools/sdk/powershell/beta/models/account-uncorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelatedSource']
---


# AccountUncorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are uncorrelated from. | 
**Id** |  **String** | The ID of the source the accounts are uncorrelated from. | 
**Name** |  **String** | Display name of the source the accounts are uncorrelated from. | 

## Examples

- Prepare the resource
```powershell
$AccountUncorrelatedSource = Initialize-BetaAccountUncorrelatedSource  -Type SOURCE `
 -Id 2c6180835d191a86015d28455b4b231b `
 -Name Corporate Directory
```

- Convert the resource to JSON
```powershell
$AccountUncorrelatedSource | ConvertTo-JSON
```


[[Back to top]](#) 
