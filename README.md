# carousal-hub

An easy to use responsive react bootstrap carousal component. Basically turns everything it wraps into Carousal items, it's that 'Easy'



## Installation
```javascript
npm i carousal-hub
```

## Dependancies

The component if built with bootstrap and react-icons you should install them along with the package if they are not already installed in your project.

1. Bootstrap
```javascript
npm i bootstrap
```
2. React-Icons
```javascript
npm i react-icons
```



# Usage

## props

Takes two optional props to show hints/text, 'hint'will take a string of text show show a normal hint/text, 'boldHint' will also take a string of text and will output a <bold>bold</bold> hint/text.

```javascript
<EasyCarousal hint='Nornal text' boldHint='Bold text'>{children}</EasyCarousal>
```

### import package and wrap carousel items between EasyCarousal tags
```javascript
import EasyCarousal from 'carousal-hub';
// Anything wrapped bellow will be a carousal item eg images and divs and everything else

  <EasyCarousal hint='What are you' boldHint='here to do?'>
    <div className="items full-width text-center">
        <h1 className="product">1</h1>      
    </div>

    <div className="items full-width text-center">
        <h1 className="product">2</h1>      
    </div>

    <div className="items full-width text-center">
        <h1 className="product">3</h1>      
    </div>

    <div className="items full-width text-center">
        <h1 className="product">4</h1>      
    </div>

    <div className="items full-width text-center">
        <h1 className="product">5</h1>      
    </div>
  </EasyCarousal>

```

# Preview

![Alt text](https://i.imgur.com/MF3u2mS.png)
