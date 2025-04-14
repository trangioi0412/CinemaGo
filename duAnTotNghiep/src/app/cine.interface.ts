export interface CineInterface    {
    id: string|number|undefined,
    id_brand: number,
    name: string,
    location: {
      city: number,
      detail: string
    }
  }