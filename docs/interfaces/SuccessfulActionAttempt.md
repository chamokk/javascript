[seamapi](../README.md) / [Exports](../modules.md) / SuccessfulActionAttempt

# Interface: SuccessfulActionAttempt<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](../modules.md#actiontype) |

## Hierarchy

- `ActionAttemptBase`<`T`\>

  ↳ **`SuccessfulActionAttempt`**

## Table of contents

### Properties

- [action\_attempt\_id](SuccessfulActionAttempt.md#action_attempt_id)
- [action\_type](SuccessfulActionAttempt.md#action_type)
- [error](SuccessfulActionAttempt.md#error)
- [result](SuccessfulActionAttempt.md#result)
- [status](SuccessfulActionAttempt.md#status)

## Properties

### action\_attempt\_id

• **action\_attempt\_id**: `string`

#### Inherited from

ActionAttemptBase.action\_attempt\_id

#### Defined in

[src/types/models.ts:350](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L350)

___

### action\_type

• **action\_type**: `T`

#### Inherited from

ActionAttemptBase.action\_type

#### Defined in

[src/types/models.ts:351](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L351)

___

### error

• **error**: ``null``

#### Overrides

ActionAttemptBase.error

#### Defined in

[src/types/models.ts:383](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L383)

___

### result

• **result**: [`ActionAttemptResultTypeMap`](ActionAttemptResultTypeMap.md)[`T`]

#### Overrides

ActionAttemptBase.result

#### Defined in

[src/types/models.ts:384](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L384)

___

### status

• **status**: ``"success"``

#### Overrides

ActionAttemptBase.status

#### Defined in

[src/types/models.ts:382](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L382)
