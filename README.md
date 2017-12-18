# iteam-iron-themekit
Provides the core front end theme kit for Iron projects.

## Layouts
Iron layouts are composed of 4 core elements:
- `header`
- `nav`
- `main`
- `footer`

These elements are arranged in different ways depending on the layout class(es).
### Layout Classes
#### Default
In the default layout, the header and nav may be `fixed`. Also, the nav may be
`fixed` to the bottom of the viewport.
```
-------------------------
| <header>              |
-------------------------
| <nav>                 |
-------------------------
| <main>                |
-------------------------
| <footer>              |
-------------------------
```
#### Split Header
In the split header layout, the header and nav may be `fixed`.
```
-------------------------
| <header>    | <nav>   |
-------------------------
| <main>                |
-------------------------
| <footer>              |
-------------------------
```
#### Sidebar
```
-------------------------
| <header>              |
-------------------------
| <nav> | <main>        |
-------------------------
| <footer>              |
-------------------------
```