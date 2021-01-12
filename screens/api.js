const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=01af95f04c43d75589ddc6090c6552a9'

function getMusicData() {
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artista)
    .then(artists => artists.map(artista => {
        return {
            id: artista.mbid,
            name: artista.name,
            image: artista.image[3]['#text']
        }
    }))
}

export {getMusicData}