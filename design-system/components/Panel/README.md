The frosted plate every block of content sits on when it overlaps the WebGL canvas: `panel` fill, `panel-blur` backdrop blur, a 1px `line` border, square corners and `panel-pad` padding.

The consumer provides content only; keep a panel's text in `text2` and `mute`. Use `panel-strong` for small cards that need more separation. In the light theme the plate is paper at 74%, so keep text in `bone` and `text2`.

- Do: put long text in a panel. Only the hero and contact text may sit directly on the canvas.
- Don't: round the corners, add a shadow, or nest a panel in a panel.
