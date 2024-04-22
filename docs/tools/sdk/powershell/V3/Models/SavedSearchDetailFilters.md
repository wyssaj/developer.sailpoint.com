---
id: saved-search-detail-filters
title: SavedSearchDetailFilters
pagination_label: SavedSearchDetailFilters
sidebar_label: SavedSearchDetailFilters
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SavedSearchDetailFilters'] 
slug: /tools/sdk/powershell/v3/models/saved-search-detail-filters
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetailFilters']
---


# SavedSearchDetailFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**FilterType**](filter-type) |  | [optional] 
**Range** |  Pointer to [**Range**](range) |  | [optional] 
**Terms** |  Pointer to **[]String** | The terms to be filtered. | [optional] 
**Exclude** |  Pointer to **Boolean** | Indicates if the filter excludes results. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SavedSearchDetailFilters = Initialize-SavedSearchDetailFilters  -Type null `
 -Range null `
 -Terms null `
 -Exclude false
```

- Convert the resource to JSON
```powershell
$SavedSearchDetailFilters | ConvertTo-JSON
```


[[Back to top]](#) 
