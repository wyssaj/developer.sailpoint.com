---
id: kba-auth-response
title: KbaAuthResponse
pagination_label: KbaAuthResponse
sidebar_label: KbaAuthResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'KbaAuthResponse'] 
slug: /tools/sdk/powershell/beta/models/kba-auth-response
tags: ['SDK', 'Software Development Kit', 'KbaAuthResponse']
---


# KbaAuthResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KbaAuthResponseItems** |  Pointer to [**[]KbaAuthResponseItem**](kba-auth-response-item) |  | [optional] 
**Status** |  Pointer to  **Enum** [  "PENDING",    "SUCCESS",    "FAILED",    "LOCKOUT",    "NOT_ENOUGH_DATA" ] | MFA Authentication status | [optional] 

## Examples

- Prepare the resource
```powershell
$KbaAuthResponse = Initialize-BetaKbaAuthResponse  -KbaAuthResponseItems [{questionId=089899f13a8f4da7824996191587bab9, isVerified=false}] `
 -Status PENDING
```

- Convert the resource to JSON
```powershell
$KbaAuthResponse | ConvertTo-JSON
```


[[Back to top]](#) 
