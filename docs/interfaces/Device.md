[seamapi](../README.md) / [Exports](../modules.md) / Device

# Interface: Device<Properties, Type\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Properties` | extends [`CommonDeviceProperties`](../modules.md#commondeviceproperties) |
| `Type` | [`DeviceType`](../modules.md#devicetype) |

## Table of contents

### Properties

- [capabilities\_supported](Device.md#capabilities_supported)
- [connected\_account\_id](Device.md#connected_account_id)
- [created\_at](Device.md#created_at)
- [device\_id](Device.md#device_id)
- [device\_type](Device.md#device_type)
- [errors](Device.md#errors)
- [is\_managed](Device.md#is_managed)
- [location](Device.md#location)
- [properties](Device.md#properties)
- [warnings](Device.md#warnings)
- [workspace\_id](Device.md#workspace_id)

## Properties

### capabilities\_supported

• **capabilities\_supported**: `unknown`[]

#### Defined in

[src/types/models.ts:215](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L215)

___

### connected\_account\_id

• **connected\_account\_id**: `string`

#### Defined in

[src/types/models.ts:214](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L214)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:218](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L218)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:209](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L209)

___

### device\_type

• **device\_type**: `Type`

#### Defined in

[src/types/models.ts:213](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L213)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md))[]

#### Defined in

[src/types/models.ts:216](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L216)

___

### is\_managed

• **is\_managed**: ``true``

#### Defined in

[src/types/models.ts:219](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L219)

___

### location

• `Optional` **location**: ``null`` \| [`DeviceLocation`](../modules.md#devicelocation)

#### Defined in

[src/types/models.ts:212](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L212)

___

### properties

• **properties**: `Properties`

#### Defined in

[src/types/models.ts:211](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L211)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:217](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L217)

___

### workspace\_id

• **workspace\_id**: `string`

#### Defined in

[src/types/models.ts:210](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L210)
