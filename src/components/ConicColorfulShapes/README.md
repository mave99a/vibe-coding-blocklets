# Conic Colorful Shapes Component

A React component that creates beautiful and configurable colorful conic gradient shapes using CSS-doodle.

## Features

- Configurable grid layout (rows and columns)
- Customizable container size
- Adjustable number of gradient effects
- Configurable color palette
- Customizable background colors
- Click-to-update animation

## Usage

This component requires the CSS-doodle library, which is loaded dynamically.

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| gridRows | number | 8 | Number of rows in the grid |
| gridColumns | number | 1 | Number of columns in the grid |
| containerSize | string | '70vmin' | Size of the container (CSS value) |
| multiCount | number | 50 | Number of gradient overlays |
| colors | array | [...] | Array of color objects with colorHex property |
| backgroundColor | string | '#f9a8d4' | Page background color |
| containerBackgroundColor | string | '#000000' | Container background color |

### Example

```jsx
import ConicColorfulShapes from './ConicColorfulShapes';

function App() {
  return (
    <ConicColorfulShapes 
      gridRows={10}
      gridColumns={1}
      containerSize="80vmin"
      multiCount={60}
      colors={[
        { colorHex: '#ff0000' },
        { colorHex: '#00ff00' },
        { colorHex: '#0000ff' }
      ]}
      backgroundColor="#f0f0f0"
      containerBackgroundColor="#333333"
    />
  );
}
```

## Credits

This component is based on the [CSS-doodle](https://css-doodle.com/) library and was inspired by the CodePen project [Conic Colorful Shapes](https://codepen.io/sparklingman/pen/XJWaowj) by sparklingman.

## License

MIT 