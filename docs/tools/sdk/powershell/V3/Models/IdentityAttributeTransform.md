---
id: identity-attribute-transform
title: IdentityAttributeTransform
pagination_label: IdentityAttributeTransform
sidebar_label: IdentityAttributeTransform
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributeTransform'] 
slug: /tools/sdk/powershell/v3/models/identity-attribute-transform
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeTransform']
---


# IdentityAttributeTransform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeName** |  Pointer to **String** | Name of the identity attribute. | [optional] 
**TransformDefinition** |  Pointer to [**TransformDefinition**](transform-definition) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeTransform = Initialize-IdentityAttributeTransform  -IdentityAttributeName email `
 -TransformDefinition null
```

- Convert the resource to JSON
```powershell
$IdentityAttributeTransform | ConvertTo-JSON
```


[[Back to top]](#) 
