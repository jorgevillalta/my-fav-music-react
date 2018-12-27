class AlbumModel {
  constructor(artist, name, dateAdded = new Date()) {
    this.id = AlbumModel.generateId();
    this.artist = artist;
    this.name = name;
    this.dateAdded = dateAdded;
  }

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }
}

export default AlbumModel;
