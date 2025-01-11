import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brands')
export class Brand {
@PrimaryGeneratedColumn()
id: number;

@Column()
bname: string;

@Column()
categoryid: number;

@Column()
status: string;
}