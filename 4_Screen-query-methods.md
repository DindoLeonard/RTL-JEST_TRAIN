# `screen` Query Methods

- `command[All]ByQueryType`
- example: queryAllByRole

- command

  - get: expect element to be in the DOM
  - query: expect element not to be in DOM
  - find: expect element to appear async

- `[All]`

  - (excluse) expect only one match
  - (include) expect more than one match

- QueryType
  - Role (most preferred)
  - AltText (images)
  - Text (display elements)
  - Form elements
    - PlaceholderText
    - LabelText
    - DisplayValue
