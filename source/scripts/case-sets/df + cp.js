const cases = {
    evenCases: [
        ["Left Headlights", "(1,0) / (2,-1) / (0,-3) / (3,0) / (-3,0) / (-2,4) /"],
        ["Right Headlights", "(1,0) / (3,0) / (3,-3) / (-1,2) / (1,-2) / (3,0) /"],
        ["Front Headlights", "(4,-3) / (-3,0) / (-1,2) / (1,-2) / (-3,3) / (-3,0) /"],
        ["Back Headlights", "(0,-1) / (4,-2) / (-3,0) / (0,3) / (0,-3) / (-1,2) /"],
        ["Opposite Corner Swap", "(1,0) / (-4,-3) / (-3,0) / (-3,-3) / (-3,0) / (-2,-3) /"],
        ["No Corner Swap", "(1,0) / (0,3) / (3,0) / (-1,-1) / (-2,1) / (0,-3) /"]
    ]
} // from https://www.youtube.com/watch?v=OLrFbXhIyj8 and https://www.sonyc-cuber.com/tutorials/PLL+1.html

export {cases};