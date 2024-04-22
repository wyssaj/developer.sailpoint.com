---
id: password-info-account
title: PasswordInfoAccount
pagination_label: PasswordInfoAccount
sidebar_label: PasswordInfoAccount
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PasswordInfoAccount'] 
slug: /tools/sdk/powershell/v3/models/password-info-account
tags: ['SDK', 'Software Development Kit', 'PasswordInfoAccount']
---


# PasswordInfoAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** |  Pointer to **String** | Account ID of the account. This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] 
**AccountName** |  Pointer to **String** | Display name of the account. This is specified per account schema in the source configuration. It is used to display name of the account. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-Name-for/ta-p/74008 | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordInfoAccount = Initialize-PasswordInfoAccount  -AccountId CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com `
 -AccountName Abby.Smith
```

- Convert the resource to JSON
```powershell
$PasswordInfoAccount | ConvertTo-JSON
```


[[Back to top]](#) 
