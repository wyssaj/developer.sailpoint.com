---
id: test-external-execute-workflow-request
title: TestExternalExecuteWorkflowRequest
pagination_label: TestExternalExecuteWorkflowRequest
sidebar_label: TestExternalExecuteWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TestExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/powershell/beta/models/test-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflowRequest']
---


# TestExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | The test input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflowRequest = Initialize-BetaTestExternalExecuteWorkflowRequest  -VarInput {test=hello world}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 
