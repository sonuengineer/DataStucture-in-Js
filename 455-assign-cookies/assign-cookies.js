function findContentChildren(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let contentChildren = 0;
    let childIndex = 0;

    for (const cookieSize of s) {
        if (childIndex < g.length && cookieSize >= g[childIndex]) {
            // Assign the cookie to the child
            contentChildren++;
            childIndex++;
        }
    }

    return contentChildren;
}


