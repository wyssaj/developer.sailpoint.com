---
id: workgroup-member-delete-item
title: WorkgroupMemberDeleteItem
pagination_label: WorkgroupMemberDeleteItem
sidebar_label: WorkgroupMemberDeleteItem
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkgroupMemberDeleteItem'] 
slug: /tools/sdk/powershell/beta/models/workgroup-member-delete-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupMemberDeleteItem']
---


# WorkgroupMemberDeleteItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Identifier of identity in bulk member add /remove request. | 
**Status** |  **String** |  The HTTP response status code returned for an individual  member that is requested for deletion during a bulk delete operation.  &gt; 204   - Identity is removed from Governance Group members list.  &gt; 404   - Identity is not member of Governance Group.  | 
**Description** |  Pointer to **String** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkgroupMemberDeleteItem = Initialize-BetaWorkgroupMemberDeleteItem  -Id 464ae7bf791e49fdb74606a2e4a89635 `
 -Status 204 `
 -Description 
> Identity deleted from Governance Group members list.

> Referenced Governance Group Member with Identity Id "bc3a744678534eb78a8002ee2085df64" was not found.

```

- Convert the resource to JSON
```powershell
$WorkgroupMemberDeleteItem | ConvertTo-JSON
```


[[Back to top]](#) 
