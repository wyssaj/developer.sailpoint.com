---
id: access-criteria-criteria-list-inner
title: AccessCriteriaCriteriaListInner
pagination_label: AccessCriteriaCriteriaListInner
sidebar_label: AccessCriteriaCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessCriteriaCriteriaListInner'] 
slug: /tools/sdk/powershell/beta/models/access-criteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'AccessCriteriaCriteriaListInner']
---


# AccessCriteriaCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ENTITLEMENT" ] | DTO type | [optional] 
**Id** |  Pointer to **String** | ID of the object to which this reference applies to | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies to | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessCriteriaCriteriaListInner = Initialize-BetaAccessCriteriaCriteriaListInner  -Type ENTITLEMENT `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Administrator
```

- Convert the resource to JSON
```powershell
$AccessCriteriaCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 
