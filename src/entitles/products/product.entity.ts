import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'desc', type: 'varchar' })
  desc: string;

  @Column({ name: 'price_regular', type: 'int' })
  priceRegular: number;

  @Column({ name: 'price_discounted', type: 'int' })
  priceDiscounted: string;

  @Column({ name: 'image', type: 'varchar' })
  image: string;
}
