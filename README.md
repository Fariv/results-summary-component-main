# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content (it is also done here :) )
- also additionally, a loader is added. it is completely done from my own volition

### Screenshot

![](./ss1.jpg)
![](./ss2.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned Styled component.
Very convenient and intuitive, easier for those persons who came from sass background.

```js
const RowReaction = styled(RowStyled)`
    background-color: hsla(0, 100%, 67%, 0.1);
`;
const RowMemory = styled(RowStyled)`
    background-color: hsla(39, 100%, 56%, 0.1);
`;
const RowVerbal = styled(RowStyled)`
    background-color: hsla(166, 100%, 37%, 0.1);
`;
const RowVisual = styled(RowStyled)`
    background-color: hsla(234, 85%, 45%, 0.1);
`;

const Row = ({rowtype, children}) => {

    let rowComp = (<RowStyled></RowStyled>);

    if (rowtype === "Reaction") {

        rowComp = <RowReaction>{children}</RowReaction>
    } else if (rowtype === "Memory") {

        rowComp = <RowMemory>{children}</RowMemory>
    } else if (rowtype === "Verbal") {

        rowComp = <RowVerbal>{children}</RowVerbal>
    } else if (rowtype === "Visual") {

        rowComp = <RowVisual>{children}</RowVisual>
    }

    return rowComp;
}
```

### Useful resources

- [Styled Component Doc - Animation](https://styled-components.com/docs/basics#animations) - This helped me tweak a css for loader animation

## Author

- Frontend Mentor - [@Fariv](https://www.frontendmentor.io/profile/Fariv)
- Twitter - [Ashraful Ferdous](https://www.linkedin.com/in/ashraful-ferdous-190652119/)
