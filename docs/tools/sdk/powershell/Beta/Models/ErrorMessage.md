---
id: error-message
title: ErrorMessage
pagination_label: ErrorMessage
sidebar_label: ErrorMessage
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ErrorMessage'] 
slug: /tools/sdk/powershell/beta/models/error-message
tags: ['SDK', 'Software Development Kit', 'ErrorMessage']
---


# ErrorMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** |  Pointer to **String** | Locale is the current Locale | [optional] 
**LocaleOrigin** |  Pointer to **String** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**Text** |  Pointer to **String** | Text is the actual text of the error message | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorMessage = Initialize-BetaErrorMessage  -Locale en-US `
 -LocaleOrigin DEFAULT `
 -Text This is an error
```

- Convert the resource to JSON
```powershell
$ErrorMessage | ConvertTo-JSON
```


[[Back to top]](#) 
