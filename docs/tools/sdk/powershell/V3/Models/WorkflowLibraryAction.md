---
id: workflow-library-action
title: WorkflowLibraryAction
pagination_label: WorkflowLibraryAction
sidebar_label: WorkflowLibraryAction
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowLibraryAction'] 
slug: /tools/sdk/powershell/v3/models/workflow-library-action
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryAction']
---


# WorkflowLibraryAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Action ID. This is a static namespaced ID for the action | [optional] 
**Name** |  Pointer to **String** | Action Name | [optional] 
**Type** |  Pointer to **String** | Action type | [optional] 
**Description** |  Pointer to **String** | Action Description | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the action accepts | [optional] 
**IsDynamicSchema** |  Pointer to **Boolean** | Determines whether the dynamic output schema is returned in place of the action&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to $false]
**OutputSchema** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Defines the output schema, if any, that this action produces. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryAction = Initialize-WorkflowLibraryAction  -Id sp:create-campaign `
 -Name Create Certification Campaign `
 -Type ACTION `
 -Description Generates a certification campaign. `
 -FormFields null `
 -IsDynamicSchema false `
 -OutputSchema {definitions={}, properties={autoRevokeAllowed={$id=#sp:create-campaign/autoRevokeAllowed, default=true, examples=[false], title=autoRevokeAllowed, type=boolean}, deadline={$id=#sp:create-campaign/deadline, default=, examples=[2020-12-25T06:00:00.468Z], format=date-time, pattern=^.*$, title=deadline, type=string}, description={$id=#sp:create-campaign/description, default=, examples=[A review of everyone's access by their manager.], pattern=^.*$, title=description, type=string}, emailNotificationEnabled={$id=#sp:create-campaign/emailNotificationEnabled, default=true, examples=[false], title=emailNotificationEnabled, type=boolean}, filter={$id=#sp:create-campaign/filter, properties={id={$id=#sp:create-campaign/filter/id, default=, examples=[e0adaae69852e8fe8b8a3d48e5ce757c], pattern=^.*$, title=id, type=string}, type={$id=#sp:create-campaign/filter/type, default=, examples=[CAMPAIGN_FILTER], pattern=^.*$, title=type, type=string}}, title=filter, type=object}, id={$id=#sp:create-campaign/id, default=, examples=[2c918086719eec070171a7e3355a360a], pattern=^.*$, title=id, type=string}, name={$id=#sp:create-campaign/name, default=, examples=[Manager Review], pattern=^.*$, title=name, type=string}, recommendationsEnabled={$id=#sp:create-campaign/recommendationsEnabled, default=true, examples=[false], title=recommendationEnabled, type=boolean}, type={$id=#sp:create-campaign/type, default=, examples=[MANAGER], pattern=^.*$, title=type, type=string}}, title=sp:create-campaign, type=object}
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryAction | ConvertTo-JSON
```


[[Back to top]](#) 
