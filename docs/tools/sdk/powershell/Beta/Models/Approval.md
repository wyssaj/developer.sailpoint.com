---
id: approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Approval'] 
slug: /tools/sdk/powershell/beta/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval']
---


# Approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalId** |  Pointer to **String** | The Approval ID | [optional] 
**Approvers** |  Pointer to [**[]ApprovalIdentity**](approval-identity) | Object representation of an approver of an approval | [optional] 
**CreatedDate** |  Pointer to **String** | Date the approval was created | [optional] 
**Type** |  Pointer to **String** | Type of approval | [optional] 
**Name** |  Pointer to [**[]ApprovalName**](approval-name) | The name of the approval for a given locale | [optional] 
**BatchRequest** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | The name of the approval for a given locale | [optional] 
**Description** |  Pointer to [**[]ApprovalDescription**](approval-description) | The description of the approval for a given locale | [optional] 
**Priority** |  Pointer to  **Enum** [  "HIGH",    "MEDIUM",    "LOW" ] | The priority of the approval | [optional] 
**Requester** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Object representation of the requester of the approval | [optional] 
**Comments** |  Pointer to [**[]ApprovalComment**](approval-comment) | Object representation of a comment on the approval | [optional] 
**ApprovedBy** |  Pointer to [**[]ApprovalIdentity**](approval-identity) | Array of approvers who have approved the approval | [optional] 
**RejectedBy** |  Pointer to [**[]ApprovalIdentity**](approval-identity) | Array of approvers who have rejected the approval | [optional] 
**CompletedDate** |  Pointer to **String** | Date the approval was completed | [optional] 
**ApprovalCriteria** |  Pointer to  **Enum** [  "SINGLE",    "DOUBLE",    "TRIPLE",    "QUARTER",    "HALF",    "ALL" ] | Criteria that needs to be met for an approval to be marked as approved | [optional] 
**Status** |  Pointer to  **Enum** [  "PENDING",    "APPROVED",    "REJECTED" ] | The current status of the approval | [optional] 
**AdditionalAttributes** |  Pointer to **String** | Json string representing additional attributes known about the object to be approved. | [optional] 
**ReferenceData** |  Pointer to [**[]ApprovalReference**](approval-reference) | Reference data related to the approval | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval = Initialize-BetaApproval  -ApprovalId 38453251-6be2-5f8f-df93-5ce19e295837 `
 -Approvers null `
 -CreatedDate 2023-04-12T23:20:50.52Z `
 -Type ENTITLEMENT_DESCRIPTIONS `
 -Name null `
 -BatchRequest {batchId=38453251-6be2-5f8f-df93-5ce19e295837, batchSize=100} `
 -Description null `
 -Priority HIGH `
 -Requester {id=85d173e7d57e496569df763231d6deb6a, type=IDENTITY, name=John Doe} `
 -Comments null `
 -ApprovedBy null `
 -RejectedBy null `
 -CompletedDate 2023-04-12T23:20:50.52Z `
 -ApprovalCriteria SINGLE `
 -Status PENDING `
 -AdditionalAttributes { "llm_description": "generated description" } `
 -ReferenceData null
```

- Convert the resource to JSON
```powershell
$Approval | ConvertTo-JSON
```


[[Back to top]](#) 
