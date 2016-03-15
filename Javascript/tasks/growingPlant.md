# Description

Each day a plant is growing by `upSpeed` meters. Each night that plant's height decreases by `downSpeed` meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

## Example

```javascript
growingPlant(100, 10, 910) = 10
```

-   [input] integer `upSpeed`

     positive integer representing the daily growth

-   [input] integer `downSpeed`

     positive integer representing the nightly decline where `upSpeed > downSpeed`

-   [input] integer `desiredHeight`

     positive integer representing the threshold

-   [output] integer

     The number of days that it will take for the plant to reach/pass `desiredHeight` (including the last day in the total count)
