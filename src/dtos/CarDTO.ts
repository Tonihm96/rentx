export interface CarDTO {
  about: string;
  accessories: Accessory[];
  brand: string;
  created_at: number;
  fuel_type: string;
  id: string;
  name: string;
  period: string;
  photos: Photo[];
  price: number;
  thumbnail: string;
  updated_at: number;
}

export interface Accessory {
  car_id: string;
  id: string;
  name: string;
  type: string;
}

export interface Photo {
  car_id: string;
  id: string;
  photo: string;
}
