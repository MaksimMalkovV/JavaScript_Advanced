const musicCollection = {
    musicAlbums: [
        { title: 'Perfetto', artist: 'Eros Ramazzotti',  year: '2015'},
        { title: 'Tina!', artist: 'Tina Terner',  year: '2008'},
        { title: 'Per Sempre', artist: 'Adriano Celentano',  year: '2002'}
    ],
    [Symbol.iterator]() {
        this.index = 0;
        return this;
    },
    next() {
        return this.index < this.musicAlbums.length
            ? {done: false, value: this.musicAlbums[this.index++]}
            : {done: true};
    }
}

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}