import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
@PrimaryGeneratedColumn()
id: number;

@Column({ nullable: false })
name: string;

@Column({ default: 'active' })
status: string;
}
