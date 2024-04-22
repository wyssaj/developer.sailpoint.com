---
id: managed-cluster-redis
title: ManagedClusterRedis
pagination_label: ManagedClusterRedis
sidebar_label: ManagedClusterRedis
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManagedClusterRedis'] 
slug: /tools/sdk/powershell/beta/models/managed-cluster-redis
tags: ['SDK', 'Software Development Kit', 'ManagedClusterRedis']
---


# ManagedClusterRedis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RedisHost** |  Pointer to **String** | ManagedCluster redisHost | [optional] 
**RedisPort** |  Pointer to **Int32** | ManagedCluster redisPort | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterRedis = Initialize-BetaManagedClusterRedis  -RedisHost megapod-useast1-shared-redis.cloud.sailpoint.com `
 -RedisPort 6379
```

- Convert the resource to JSON
```powershell
$ManagedClusterRedis | ConvertTo-JSON
```


[[Back to top]](#) 
