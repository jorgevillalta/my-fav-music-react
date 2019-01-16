import AlbumModel from '../models/AlbumModel';
import AlbumOrderModel from '../models/AlbumOrderModel';
import AlbumStore from './AlbumStore';

describe('Album Store', () => {
  test('Create store', () => {
    const albumStore = new AlbumStore();

    expect(albumStore.albums).toHaveLength(0);
  });

  test('Get from store', () => {
    const album = new AlbumModel('artistA', 'albumA');
    const albumStore = new AlbumStore();
    albumStore.add(album);

    const albumCopy = { ...album };
    expect(albumStore.albums).toContainEqual(albumCopy);
  });

  test('Get sorted from store (by artist)', () => {
    const albumA = new AlbumModel('aaaa', 'zzzz');
    const albumB = new AlbumModel('zzzz', 'aaaa');

    const ordered = [albumA, albumB];

    const albumStore = new AlbumStore();
    albumStore.add(albumA);
    albumStore.add(albumB);
    albumStore.sortOrder = AlbumOrderModel.byArtist;

    expect(albumStore.sortedAlbums).toEqual(ordered);
  });

  test('Get sorted from store (by Date)', () => {
    const albumA = new AlbumModel('aaaa', 'aaaa', new Date(2018, 1, 1));
    const albumB = new AlbumModel('zzzz', 'zzzz', new Date(2000, 1, 1));

    const ordered = [albumB, albumA];

    const albumStore = new AlbumStore();
    albumStore.add(albumA);
    albumStore.add(albumB);
    albumStore.sortOrder = AlbumOrderModel.byDate;

    expect(albumStore.sortedAlbums).toEqual(ordered);
  });

  test('Insert into store', () => {
    const albumStore = new AlbumStore();
    const album = new AlbumModel('artist', 'album');

    albumStore.add(album);

    expect(albumStore.albums).toHaveLength(1);
    expect(albumStore.albums).toContain(album);
  });

  test('Edit existing from store', () => {
    const albumStore = new AlbumStore();
    const album = new AlbumModel('artist', 'album');

    albumStore.add(album);

    let albumEdit = { ...album, artist: 'artist 1', name: 'band 1' };
    albumStore.editAlbum(albumEdit);

    expect(albumStore.albums).toContainEqual(albumEdit);
  });

  test('Edit none existing from store', () => {
    const albumStore = new AlbumStore();
    const album = new AlbumModel('artist', 'album');

    albumStore.add(album);

    let albumEdit = { ...album, id: 2 };
    albumStore.editAlbum(albumEdit);

    expect(albumStore.albums).not.toContainEqual(albumEdit);
  });

  test('Delete from store', () => {
    const albumStore = new AlbumStore();
    const album = new AlbumModel('artist', 'album');

    albumStore.deleteAlbum(album);
    expect(albumStore.sortedAlbums).toHaveLength(0);
  });
});
