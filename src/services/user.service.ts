import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    getUsers() {
        return [{
            "_id" : {"$oid":"5c32521948892124cc199460"},
            "name" : "Thrihnukagigur",
            "email" : "thrihnukagigur@mail.com",
            "password" : "",
            "invitationCodeOwn" : "fad1623b-c09b-4547-876c-d31089c5d1d3",
            "invitationCodeUsed" : "",
            "attachedWorkspaces": [],
            "attachedRooms": [],
            "avatarColor" : "#8A2BE2",
            "avatarImage" : {"$oid":"5dbc090893fc571c1662f422"},
            "aboutMe" : "",
            "del" : false,
            "createdAt" : null,
            "updatedAt" : null,
            "deletedAt" : null
        },
        {
            "_id" : {"$oid":"5c32521948892124cc199461"},
            "name" : "Name2",
            "email" : "theistareykjarbunga@mail.com",
            "password" : "",
            "invitationCodeOwn" : "aad1623b-c09b-4547-876c-d31089c5d1d4",
            "invitationCodeUsed" : "",
            "attachedWorkspaces": [],
            "attachedRooms": [],
            "avatarColor" : "#8A2BE2",
            "avatarImage" : {"$oid":"5dbc090893fc571c1662f423"},
            "aboutMe" : "",
            "del" : false,
            "createdAt" : null,
            "updatedAt" : null,
            "deletedAt" : null
        }];
    }

    newUser(): boolean {
        return true;
    }
}