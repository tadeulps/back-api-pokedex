import { Entity, PrimaryGeneratedColumn, Column, OneToOne,JoinColumn} from "typeorm";
import User from "./User";

@Entity("sessions")
export default class Session{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  token: string;
  
  @OneToOne(()=>User)
  @JoinColumn()
  user:User
}