---
id: access-request-dynamic-approver-requested-items-inner
title: AccessRequestDynamicApproverRequestedItemsInner
pagination_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestDynamicApproverRequestedItemsInner'] 
slug: /tools/sdk/powershell/beta/models/access-request-dynamic-approver-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApproverRequestedItemsInner']
---


# AccessRequestDynamicApproverRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the access item. | 
**Name** |  **String** | Human friendly name of the access item. | 
**Description** |  Pointer to **String** | Extended description of the access item. | [optional] 
**Type** |   **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of access item being requested. | 
**Operation** |   **Enum** [  "Add",    "Remove" ] | Grant or revoke the access item | 
**Comment** |  Pointer to **String** | A comment from the requestor on why the access is needed. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestDynamicApproverRequestedItemsInner = Initialize-BetaAccessRequestDynamicApproverRequestedItemsInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
 -Name Engineering Access `
 -Description Engineering Access `
 -Type ACCESS_PROFILE `
 -Operation Add `
 -Comment William needs this access for his day to day job activities.
```

- Convert the resource to JSON
```powershell
$AccessRequestDynamicApproverRequestedItemsInner | ConvertTo-JSON
```


[[Back to top]](#) 
