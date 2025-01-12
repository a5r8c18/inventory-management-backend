import { Category } from 'src/category/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

@ManyToOne(() => Category, category => category.brands) categories: Category;
}