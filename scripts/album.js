var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21' },
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15' }
    ]
};

var albumHamilton = {
    title: 'Hamilton',
    artist: 'Original Broadway Cast',
    label: 'Broadway',
    year: '2015',
    albumArtUrl: 'assets/images/album_covers/02.png',
    songs: [
        { title: 'Alexander Hamilton', duration: '3:57' },
        { title: 'Aaron Burr, Sir', duration: '2:37' },
        { title: 'My Shot', duration: '5:33' },
        { title: 'The Story of Tonight', duration: '1:32' },
        { title: 'The Schuyler Sisters', duration: '3:07' }
    ]
};

var albumCover = document.getElementsByClassName('album-cover-art')[0];

var createSongRow = function (songNumber, songName, songLength) {
    var template =
        '<tr class ="album-view-song-item">'
    +   '   <td class="song-item-number">' + songNumber + '</td>'
    +   '   <td class="song-item-title">' + songName + '</td>'
    +   '   <td class="song-item-duration">' + songLength + '</td>'
    +   '</tr>'
    ;
    
    return template;
};

var setCurrentAlbum = function(album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';

    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
};

albumCover.addEventListener("click", function() {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    if ( albumTitle.firstChild.nodeValue == 'The Colors' ) {
        setCurrentAlbum(albumMarconi);
    }
    else if ( albumTitle.firstChild.nodeValue == 'The Telephone' ) {
        setCurrentAlbum(albumHamilton);
    }
    else if ( albumTitle.firstChild.nodeValue == 'Hamilton' ) {
        setCurrentAlbum(albumPicasso);
    }
});


