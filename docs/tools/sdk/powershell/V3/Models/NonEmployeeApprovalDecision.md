---
id: non-employee-approval-decision
title: NonEmployeeApprovalDecision
pagination_label: NonEmployeeApprovalDecision
sidebar_label: NonEmployeeApprovalDecision
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeApprovalDecision'] 
slug: /tools/sdk/powershell/v3/models/non-employee-approval-decision
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalDecision']
---


# NonEmployeeApprovalDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment on the approval item. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalDecision = Initialize-NonEmployeeApprovalDecision  -Comment Approved by manager
```

- Convert the resource to JSON
```powershell
$NonEmployeeApprovalDecision | ConvertTo-JSON
```


[[Back to top]](#) 
