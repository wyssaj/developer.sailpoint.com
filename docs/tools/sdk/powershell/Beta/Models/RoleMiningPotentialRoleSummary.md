---
id: role-mining-potential-role-summary
title: RoleMiningPotentialRoleSummary
pagination_label: RoleMiningPotentialRoleSummary
sidebar_label: RoleMiningPotentialRoleSummary
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningPotentialRoleSummary'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-summary
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSummary']
---


# RoleMiningPotentialRoleSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the potential role | [optional] 
**Name** |  Pointer to **String** | Name of the potential role | [optional] 
**PotentialRoleRef** |  Pointer to [**RoleMiningPotentialRoleRef**](role-mining-potential-role-ref) |  | [optional] 
**IdentityCount** |  Pointer to **Int32** | The number of identities in a potential role. | [optional] 
**EntitlementCount** |  Pointer to **Int32** | The number of entitlements in a potential role. | [optional] 
**IdentityGroupStatus** |  Pointer to **String** | The status for this identity group which can be &quot;&quot;REQUESTED&quot;&quot; or &quot;&quot;OBTAINED&quot;&quot; | [optional] 
**ProvisionState** |  Pointer to [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**RoleId** |  Pointer to **String** | ID of the provisioned role in IIQ or IDN.  Null if this potential role has not been provisioned. | [optional] 
**Density** |  Pointer to **Int32** | The density metric (0-100) of this potential role. Higher density values indicate higher similarity amongst the identities. | [optional] 
**Freshness** |  Pointer to **Int32** | The freshness metric (0-100) of this potential role. Higher freshness values indicate this potential role is more distinctive compared to existing roles. | [optional] 
**Quality** |  Pointer to **Int32** | The quality metric (0-100) of this potential role. Higher quality values indicate this potential role has high density and freshness. | [optional] 
**Type** |  Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**Session** |  Pointer to [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleSummary = Initialize-BetaRoleMiningPotentialRoleSummary  -Id e0cc5d7d-bf7f-4f81-b2af-8885b09d9923 `
 -Name Potential Role - e0cc5d `
 -PotentialRoleRef null `
 -IdentityCount 25 `
 -EntitlementCount 15 `
 -IdentityGroupStatus OBTAINED `
 -ProvisionState null `
 -RoleId 2a4be6fbcf3c4e66b95a0c15ffd591 `
 -Density 90 `
 -Freshness 70 `
 -Quality 80 `
 -Type null `
 -Session null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleSummary | ConvertTo-JSON
```


[[Back to top]](#) 
