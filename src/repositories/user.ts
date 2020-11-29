import { Model } from "mongoose";
import { UserDocument } from '../schemas/user.schema';
import { CreateUser } from "../dto/users.dto";

interface IFilter {
    filter: Record<string, unknown>,
    select: string,
    populate: string,
}

const userModel:Model<UserDocument>;

function create(user: CreateUser): Promise<UserDocument> {
    return new userModel(user).save();
}

function findOneByFilter(filter: IFilter): Promise<UserDocument> {
    return userModel.findOne(filter.filter).select(filter.select).populate(filter.populate);
}

function findManyByFilter(filter: IFilter): Promise<UserDocument> {
    return userModel.find(filter.filter).populate(filter.populate).select(filter.select);
}

class User {
    constructor(private readonly User: Model<UserDocument>){}

    create() {
        return new this.User()
    }
}




export default {
    create,
    findOneByFilter,
    findManyByFilter,
};
