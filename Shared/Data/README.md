


# User Statistics System

This system manages the user's statistics and keeps them synchronized between the application and `localStorage`.

## `DefaultStatistics`

`DefaultStatistics` contains the default values used when no user statistics have been saved yet. It also acts as a temporary container for new statistic changes before they are transferred to the user's actual statistics.

## `TemplateStatistics`

`TemplateStatistics` contains the user's current statistics while the application is running. It is the main object used by the application to read, display, and update the user's statistics.

## `Return_UserData()`

`Return_UserData()` transfers the new temporary statistic changes stored in `DefaultStatistics` into `TemplateStatistics`. After transferring the changes, it resets the temporary values in `DefaultStatistics` so they are not added again.


### `Statistics Update Condition`  

Inside `Return_UserData()`, the condition checks which properties of `DefaultStatistics` contain new values that need to be transferred to `TemplateStatistics`.

```js
if (
    DefaultStatistics[parameter] !== 0 &&
    parameter !== "lastVisit" &&
    parameter !== "CurrentStreek"
)
```

The condition works in three steps:

* **`DefaultStatistics[parameter] !== 0`**
  Only properties with a new/non-zero value are processed. A value of `0` means there is currently no new update to apply.

* **`parameter !== "lastVisit"`**
  `lastVisit` is excluded because it is not a cumulative statistic and should not be added to another value.

* **`parameter !== "CurrentStreek"`**
  `CurrentStreek` is excluded because the streak represents a current state rather than a value that should be accumulated through the generic update system.

If a property passes all three conditions, its value is added to the corresponding property in `TemplateStatistics`, and the temporary value in `DefaultStatistics` is then reset to `0`.

In short:

> **The condition identifies statistics that contain new cumulative data, while excluding values that should not be accumulated or handled by this generic update process.**










## `Register_UserData()`

`Register_UserData()` saves the current `TemplateStatistics` object into `localStorage`. This makes the user's statistics persistent so they are not lost when the page is refreshed or closed.

## `Get_UserData()`

`Get_UserData()` retrieves the user's previously saved statistics from `localStorage` and loads them into `TemplateStatistics`. If no saved statistics exist, it uses `DefaultStatistics` as the initial data.


## Data Flow

```text
DefaultStatistics
       │
       │ Return_UserData()
       ▼
TemplateStatistics
       │
       │ Register_UserData()
       ▼
localStorage
       │
       │ Get_UserData()
       ▼
TemplateStatistics
```

### In simple terms

* **`DefaultStatistics`** → Holds default values and temporary changes.
* **`Return_UserData()`** → Transfers temporary changes to the user's statistics.
* **`TemplateStatistics`** → Holds the user's current statistics.
* **`Register_UserData()`** → Saves the current statistics.
* **`Get_UserData()`** → Loads the saved statistics.
