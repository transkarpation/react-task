import axios from 'axios'

class Googleapi {
  public http;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://www.googleapis.com/books/v1/volumes'
    })
  }

  searchByTitle(searchText: string) {
    return this.http.get(`?q=intitle:${searchText}`)
  }
}

export default new Googleapi()