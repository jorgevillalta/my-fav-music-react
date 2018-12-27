import { observable, computed, action } from 'mobx';

import AlbumOrderModel from '../models/AlbumOrderModel';

class AlbumStore {
  @observable albums = [];
  @observable sortOrder = AlbumOrderModel.byDate;

  @computed
  get sortedAlbums() {
    return this.albums.sort((a, b) => {
      const field = this.sortOrder;

      if (field === AlbumOrderModel.byDate) {
        return a[field].getTime() - b[field].getTime();
      }

      return a[field].localeCompare(b[field]);
    });
  }

  @action
  add(album) {
    this.albums.push(album);
  }

  @action
  editAlbum(item) {
    this.albums.map(album => {
      if (album.id === item.id) {
        album = { ...album, ...item };
      }

      return album;
    });
  }

  @action
  deleteAlbum(item) {
    this.albums = this.albums.filter(album => album.id === item.id);
  }
}

export default AlbumStore;
