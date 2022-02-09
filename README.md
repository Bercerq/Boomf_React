## Starting

Install dependencies
```sh
npm i
```
Start project
```
npm start
```

### Project structure

# Folders
* Modules - Root pages
* Components - Pieses for build modules
* Redux - Global state, contain `Sagas` for queries
* Utils - helpers folder, contain all stuf for project, 
- `assets` - contain project static images
- `constants` - contain static info and data
- `functions` - don`t need explain

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
* 3 - Functions (only if can't be in `utils/functions`)
* 4 - UseEffects
* 5 - Components

# Styling 
In a project, for styling, used only `styled-components`


