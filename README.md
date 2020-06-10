<h1 align="center">Stylized React Component Lib</h1>

## Description
Library created for the purpose of personal improvement in the creation of stylized components and publication of libs in npm. The goal here is just learning, but if this lib is useful to you feel free to make suggestions and improve it so that it suits your problems and those of the community.

**To install:**

```npm install components-react-lib-styled```

## Techs
For this lib the **Styled Components** were used to create CSS styles in JavaScript files. The **Storybook** was used to visualize the components.

## Components present in Lib
This Lib has fully customizable components and new components may be added in the future. To view the components you can run the **Storybook** on your machine and select the components you want to see.


### Button
Standard buttons in 3 formats: *Default*, *Outline* and *Disable*. To use the *Outline* and *Disable* buttons just pass the respective properties: ```outline``` and ```disable```.

*To customize the component, you must pass the values ​​as a string for keywords ``backgroundColor``, ``borderRadius`` and ``color`` (font color).*

Check out how to customize the component:

```tsx
import { Button } from 'components-react-lib-styled'

/*
***Your code...
*/

    <Button
        backgroundColor="#007fff"
        borderRadius="50px"
        color="#fff"
    >
        Default
    </Button>
```

***You can only use components in their standard form without having to pass these settings**


### Button Gradient

*To customize the component, you must pass the values ​​as a string for keywords ``borderRadius``, ``gradientColor`` (pass the direction and colors to be used separated by a comma), ``shadowColor`` and ``color`` (font color).*

Check out how to customize the component:

```tsx
import { ButtonGradient } from 'components-react-lib-styled'

/*
***Your code...
*/

    <ButtonGradient
        borderRadius="20px"
        gradientColor="top, #000046, #1cb5e0"
        shadowColor="#000046"
        color="#fff"
    >
        Default
    </ButtonGradient>
```

***You can only use components in their standard form without having to pass these settings**

### Card

You must always pass a value for the ``title`` property in this component

*To customize the component, you must pass the values ​​as a string for keywords ``backgroundColor``, ``borderRadius`` and ``color`` (font color).*

Check out how to customize the component:

```tsx
import { Card } from 'components-react-lib-styled'

/*
***Your code...
*/

    <Card 
        title="Title of the card"
        backgroundColor="#2f2e35"
        borderRadius="10px"
        color="#ddd"
    >
        Card contents
    </Card>
```

***You can only use components in their standard form without having to pass these settings**

### Check Box

The ``name``, ``label`` and ``value`` are required attributes for this component.

There is the possibility to leave a checked value by default, just put the property ``defaultChecked={true}``

*To customize the component, you must pass the values ​​as a string for keywords ``markColor`` and ``color`` (font color).*

Check out how to customize the component:

```tsx
import { CheckBox } from 'components-react-lib-styled'

/*
***Your code...
*/

    <CheckBox
        color="#fff"
        markColor="#007fff"

        name="checkbox"
        label="label"
        value={/* Any types */}
        checked={/* Boolean value */}
        onChange={() => {}}
    />
```

***You can only use components in their standard form without having to pass these settings**

### Input

The ``name``, ``value`` and ``setValue`` are required attributes for this component.

This component can receive an icon from your favorite icon library through the ``icon`` property. In our example we are importing the icon ``MdSearch`` from the React-Icons/Material-Design library.

*To customize the component, you must pass the values ​​as a string for keywords ``backgroundColor``, ``borderRadius``, ``color`` (font color), ``inputColor``, ``placeholderColor`` and ``type`` (text by default).*

Check out how to customize the component:
*(See the example using React Hooks)*

```tsx
import React, { useState } from 'react'
import { Input } from 'components-react-lib-styled'
import { MdSearch } from 'react-icons/md'

/*
***Your code...
*/
const [inputValue, setInputValue] = useState('')
/*
***Your code...
*/

    <Input
        backgroundColor="#1c1b20"
        borderRadius="5px"
        color="#fff"
        inputColor="#007fff"
        placeholderColor="rgba(255, 255, 255, 0.2)"
        type="text"

        name="input"
        icon={<MdSearch />}
        placeholder="Type here..."
        value={inputValue}
        setValue={setInputValue}
    />
```

***You can only use components in their standard form without having to pass these settings**

### Modal

The ``title``, ``open`` and ``setOpen`` are required attributes for this component.

*To customize the component, you must pass the values ​​as a string for keywords ``backgroundColor``, ``borderRadius``, ``color`` (font color), ``colorTitle`` and ``closeColor`` (color of the icon that closes the modal).*

Check out how to customize the component:
*(See the example using React Hooks)*

```tsx
import React, { useState } from 'react'
import { Modal, Button } from 'components-react-lib-styled'

/*
***Your code...
*/
const [open, setOpen] = useState(false)
/*
***Your code...
*/

    <div>
        <Button onClick={() => setOpen(true)}>Open modal</Button>

        <Modal
            backgroundColor="#2f2e35"
            borderRadius="8px"
            color="#d5d5d5"
            colorTitle="#fff"
            closeColor="rgba(255, 255, 255, 0.3)"

            title="Modal Title" 
            open={open} 
            setOpen={setOpen}
        >
            Modal contents
        </Modal>
    </div>
```

***You can only use components in their standard form without having to pass these settings**

### Radio

The ``name``, ``label`` and ``value`` are required attributes for this component.

There is the possibility to leave a checked value by default, just put the property ``defaultChecked={true}``

*To customize the component, you must pass the values ​​as a string for keywords ``radioColor``, ``markColor`` and ``color`` (font color).*

Check out how to customize the component:

```tsx
import { Radio } from 'components-react-lib-styled'

/*
***Your code...
*/

    <Radio
        color="#fff"
        radioColor="#007fff"
        markColor="#fff"

        name="radio"
        label="label"
        value={/* Any types */}
        checked={/* Boolean value */}
        onChange={() => {}}
    />
```

***You can only use components in their standard form without having to pass these settings**

### Separator

*To customize the component, you must pass the value ​​as a string for keyword ``color`` (you must pass two or more colors separating them with a comma).*

Check out how to customize the component:

```tsx
import { Separator } from 'components-react-lib-styled'

/*
***Your code...
*/

    <Separator color = '#1a1a1f, #007fff, #1a1a1f' />
```

***You can only use components in their standard form without having to pass these settings**

### Title

*To customize the component, you must pass the values ​​as a string for keywords ``fontSize`` and ``color`` (font color, to work correctly put two or more colors separating them with a comma).*

Check out how to customize the component:

```tsx
import { Title } from 'components-react-lib-styled'

/*
***Your code...
*/

    <Title
        color = '#007fff, #33333399' 
        fontSize="30px"
    >
        Title
    </Title>
```

***You can only use components in their standard form without having to pass these settings**

## Running Storybook to view components
To run the **Storybook** use the command ```npm run storybook``` in the application's root directory.