## Description

[Favbet test task](https://github.com/sweetmnstr/favbet-test) repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# build
$ npm run build
```

```bash
# development
$ npm run start -bet 10 -betCondition EVEN

# watch mode
$ npm run start:dev -bet 10 -betCondition 1to12
```

```typescript
type BetConditions = BetConditionsEnum | NumberConditions;

enum BetConditionsEnum {
  '1to12' = '1to12',
  '13to24' = '13to24',
  '25to36' = '25to36',
  '1to18' = '1to18',
  '19to36' = '19to36',
  'EVEN' = 'EVEN',
  'ODD' = 'ODD',
  'RED' = 'RED',
  'BLACK' = 'BLACK',
}
// available conditions
type NumberConditions =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36;
```
