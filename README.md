## Starting

Install dependencies
```sh
npm i
```
Start project
```
npm start
```

## Technologies:
 * React
 * Redux

## Dependencies:
 * redux-saga
 * react-router-dom
 * react-color-palette

## Project structure

# Folders
* Modules - Root pages
* Components - Pieses for build modules
* Redux - Global state, contain `Sagas` for queries
* Utils - helpers folder, contain all stuf for project:
 1 - `assets` - contain project static images
 2 - `constants` - contain static info and data
 3 - `hooks` - project custom helpers hook
 4 - `functions`

# File imports structure 

* 1 - Lybrary
* 2 - Redux (actions/selectors)
* 3 - Utils (functions/constants/hooks)
* 4 - Components
* 5 - Assets
* 6 - Styles

# Components structure
* 1 - Hooks (useState)
* 2 - Another hooks (useDispatch, useSelector, useRef, ...)
* 3 - Custom hooks
* 4 - Functions (only if can't be in `utils/functions`)
* 5 - UseEffects
* 6 - Components

# Styling 
In a project, for styling, used only `styled-components`



## Github:
 - Branche master - live
 - Branche develop - dev 

  Work only through pull request
 Create new branch for any customizer, later create new pull request for `develop` branch
 after and testing change, deploy to `master` branch`


## About:
Folder `Modules` contain customizers, inside customizer
you can see  `CustomizerLayout` - Global wrapper for all customizers
contains:
- `PanelOptions` component - left sidebar
- `Confetti` - static images for customizers
- `{children}` - current customizer
- `Sidebar` (open state) 
- `TextEditor` - component for edit user text 

This components you can use for all customizers.

## Usage:
* `<PanelOptions/>` - takes a `setOpenSideBar` hook and `options` props, you can disable option,
just delete from array. Inside `PanelOptions` you can see
`findPanelOption` function, this function find enabled option,
and return option item. Item contain onClick with `selectOption`
function, this function contain hook with boolean state and title 
selected option, and when you click at option we change hook like this:
{state: true, title: selected option}, this state respond for `<SideBar/>` component inside `<CustomizerLayout/>`
and if state: true, Sidebar opened and call `drawOption` function, this function takes
title argument from `openSideBar` state, and return component from switch case.
Sidebar components coming soon

* `<Confetti/>` - takes 2 props, hook `selectConfetti`, inside component we iterate array 'ConfettiData',
return confetti with `handleSelectConfetti` onClick function, this function select current confetti
and set data in `setSelectConfetti` state, takes img and name. This hook transfer to `<Cube/>` - child
component `<CustomizerLayout/>` and then 'selectConfetti' hook transer to `<CubeSection/>` component,
and transfer to `<`CubeWrapper/>` styled-component and set a background confetti image

* `<TextEditor/>` - takes a hook openTextEditor,setOpenTextEditor from parrent `<Boomb/>` component,
this hook contain {flag: "", state: false.}. inside `<TextEditor/>` component yo can see 2 functions
- drawOption and selectOptions if, you not select any option - return `selectOptions` function
this function takes 2 arguments - setOpenTextEditor and setOption. Inside function we iterate array 'editOptions'
and return this option with 'selectOption` onclick function, and this function takes text setOpenTextEditor setOption
this function set current option in `setOpenTextEditor` hook and change boolean state, and clear old option ( if be )
inside `setOption` hook. Turn to our 2 function, now we have selected option, and now we return another function.
We return drawOption function with flag,option and setOption arguments, inside function we find component and return.
Inside returned component we change style written text, and set this in redux (boomb reducers, textStyles initial state)