const cases = {
    evenCases: [
        ["Adj-Adj", "/ (3,0) / (-3,-3) / (0,3) /"],
        ["Adj-No", "/ (3,0) / (0,-3) / (3,0) / (-3,0) / (-3,3) /"],
        ["Adj-Opp", "/ (0,-3) / (0,3) / (0,-3) / (0,3) /"],
        ["No-Adj", "/ (3,-3) / (0,3) / (-3,0) / (3,0) / (-3,0) /"],
        ["Opp-Adj", "/ (-3,0) / (3,0) / (-3,0) / (3,0) /"],
        ["Opp-Opp", "/ (3,-3) / (-3,3) /"],
        ["Opp-No", "/ (3,3) / (3,0) / (3,3) / (3,0) / (3,3) /"],
        ["No-Opp", "/ (3,3) / (0,3) / (3,3) / (0,3) / (3,3) /"]
    ]
} // from http://brandonlin.com/cubing/eocp.html (mostly)

export {cases};