import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('all_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  fill({
    name,
    id,
  }) {
    this.name = name;
    this.id = id;

    return this;
  }
}
