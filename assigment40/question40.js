"use strict";
function q40() {
    function make_album(artist, tittle, numtracks) {
        const album = {
            artist: artist,
            tittle: tittle,
        };
        if (numtracks) {
            album.numtracks = numtracks;
        }
        return album;
    }
    const album1 = make_album("Artist1", "Album1");
    const album2 = make_album("Artist2", "Album2", 10);
    const album3 = make_album("Artist3", "Album3", 15);
    console.log(album1);
    console.log(album2);
    console.log(album3);
}
q40();
