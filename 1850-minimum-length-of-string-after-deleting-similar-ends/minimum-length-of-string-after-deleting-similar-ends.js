const minimumLength = s => {
    let i = 0, j = s.length-1;
    while ( i < j ) {
        if ( s[i] != s[j] ) return j-i+1;
        while ( s[i] == s[++i] );
        while ( s[j] == s[--j] );
    }
    return j == i;
};