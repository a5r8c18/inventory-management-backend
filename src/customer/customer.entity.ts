import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
address: string;

@Column()
mobile: string;

@Column()
balance: number;
}