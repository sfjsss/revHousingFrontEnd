import { User } from './User';

export class Post {
  post_id: number;
  title: string;
  rent: string;
  address: string;
  zipcode: string;
  description: string;
  image_link_one: string;
  image_link_two: string;
  image_link_three: string;
  latitude: string;
  longitude: string;
  interestedCustomers: User[];
}
