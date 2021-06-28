const app = {};
app.getArtist = (artist) => $.ajeax({
    url: 'https://api.spotify.com/v1/search',
    method: 'GET',
    dataType:'json',
    data:{
        type:'artist',
        q: artist
    }
});

app.getArtistAlbums = (id) => $.ajax({
    url: 'https://api.spotify.com/v1/artists/$(id)/albums',
    method: 'GET',
    dataType: 'json',
    data: {
        album_type: 'album',
    }
});