# Button directive

## How to use
You must import in your module \`ButtonDirective\`

In your view :

- Apply appButton directive
- Customize with `appButtonSize` and `appButtonType`

```html
    <button appButton appButtonSize="LARGE" appButtonType="HERO_RED">Button test</button>

    <a appButton appButtonSize="LARGE" appButtonType="HERO_RED" href="#test">Button test</a>

    <label appButton appButtonSize="LARGE" appButtonType="HERO_RED">Button test</label>
```

## Customize `appButtonSize` and `appButtonType`

Button Size values

- `LARGE`
- `MEDIUM`
- `SMALL`

Button Type values

- `HERO_RED`
- `HERO_BLUE`
- `HOLLOW`

⚠️Invalid value will throw an `Error`
