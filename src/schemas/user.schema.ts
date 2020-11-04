import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required: true, trim: true, default: "", min: 3 })
    name: string;

    @Prop({required: true, default: "", index: true, trim: true })
    emali: string;

    @Prop({required: true, default: "", min: 6})
    password: string;

    @Prop({default: false })
    del: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);