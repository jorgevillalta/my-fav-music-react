import { decorate, observable, computed, action } from 'mobx';

import AlbumOrderModel from '../models/AlbumOrderModel';

class AlbumStore {
  albums = [];
  sortOrder = AlbumOrderModel.byDate;

  get sortedAlbums() {
    return this.albums.slice().sort((a, b) => {
      const field = this.sortOrder;

      if (field === AlbumOrderModel.byDate) {
        return a[field].getTime() - b[field].getTime();
      }

      return a[field].localeCompare(b[field]);
    });
  }

  add(album) {
    this.albums.push(album);
  }

  editAlbum(item) {
    this.albums.map(album => {
      if (album.id === item.id) {
        album = { ...album, ...item };
      }

      return album;
    });
  }

  deleteAlbum(item) {
    this.albums = this.albums.filter(album => album.id === item.id);
  }
}

decorate(AlbumStore, {
  albums: observable,
  sortOrder: observable,
  sortedAlbums: computed,
  add: action,
  editAlbum: action,
  deleteAlbum: action
});

export default AlbumStore;
