---
id: provisioning-completed-account-requests-inner-attribute-requests-inner
title: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-account-requests-inner-attribute-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner']
---


# ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** |  **String** | The name of the attribute being provisioned. | 
**AttributeValue** |  Pointer to **String** | The value of the attribute being provisioned. | [optional] 
**Operation** |   **Enum** [  "Add",    "Set",    "Remove" ] | The operation to handle the attribute. | 

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner = Initialize-BetaProvisioningCompletedAccountRequestsInnerAttributeRequestsInner  -AttributeName memberOf `
 -AttributeValue CN=jedi,DC=starwars,DC=com `
 -Operation Add
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner | ConvertTo-JSON
```


[[Back to top]](#) 
