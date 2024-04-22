---
id: attribute-definition
title: AttributeDefinition
pagination_label: AttributeDefinition
sidebar_label: AttributeDefinition
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AttributeDefinition'] 
slug: /tools/sdk/powershell/v3/models/attribute-definition
tags: ['SDK', 'Software Development Kit', 'AttributeDefinition']
---


# AttributeDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the attribute. | [optional] 
**Type** |  Pointer to [**AttributeDefinitionType**](attribute-definition-type) |  | [optional] 
**Schema** |  Pointer to [**AttributeDefinitionSchema**](attribute-definition-schema) |  | [optional] 
**Description** |  Pointer to **String** | A human-readable description of the attribute. | [optional] 
**IsMulti** |  Pointer to **Boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to $false]
**IsEntitlement** |  Pointer to **Boolean** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to $false]
**IsGroup** |  Pointer to **Boolean** | Flag indicating whether or not the attribute represents a group. This can only be &#x60;true&#x60; if &#x60;isEntitlement&#x60; is also &#x60;true&#x60; **and** there is a schema defined for the attribute..  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$AttributeDefinition = Initialize-AttributeDefinition  -Name sAMAccountName `
 -Type null `
 -Schema null `
 -Description SAM Account Name `
 -IsMulti false `
 -IsEntitlement false `
 -IsGroup false
```

- Convert the resource to JSON
```powershell
$AttributeDefinition | ConvertTo-JSON
```


[[Back to top]](#) 
