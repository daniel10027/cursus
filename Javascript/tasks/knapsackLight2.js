function knapsackLight2(weight1, weight2, maxW) {
    if (weight1 + weight2 <= maxW) return "both";
    if (weight1 <= maxW && weight2 <= maxW) return "either";
    if (weight1 <= maxW) return "first";
    if (weight2 <= maxW) return "second";
    return "none";
}
//BugFix
function knapsackLight2(weight1, weight2, maxW) {
    if (weight1 + weight2 <= maxW) {
        return "both";
    }
    if (Math.min(weight1, weight2) > maxW) {
        return "none";
    }
    if (Math.max(weight1, weight2) <= maxW) {
        return "either";
    }
    if (weight1 <= maxW) {
        return "first";
    }
    return "second";
}