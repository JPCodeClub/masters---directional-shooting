controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(assets.image`HeroUp`)
    heroDirection = "UP"
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (heroDirection == "UP") {
        arrow = sprites.createProjectileFromSprite(assets.image`ArrowUp`, hero, 0, -150)
    } else if (heroDirection == "DOWN") {
        arrow = sprites.createProjectileFromSprite(assets.image`ArrowDown`, hero, 0, 150)
    } else if (heroDirection == "LEFT") {
        arrow = sprites.createProjectileFromSprite(assets.image`ArrowLeft`, hero, -150, 0)
    } else if (heroDirection == "RIGHT") {
        arrow = sprites.createProjectileFromSprite(assets.image`ArrowRight`, hero, 150, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(assets.image`HeroLeft`)
    heroDirection = "LEFT"
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(assets.image`HeroRight`)
    heroDirection = "RIGHT"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(assets.image`HeroDown`)
    heroDirection = "DOWN"
})
let arrow: Sprite = null
let heroDirection = ""
let hero: Sprite = null
hero = sprites.create(assets.image`HeroDown`, SpriteKind.Player)
scene.setBackgroundColor(7)
controller.moveSprite(hero, 65, 65)
heroDirection = "DOWN"
forever(function () {
    hero.say(heroDirection)
})
