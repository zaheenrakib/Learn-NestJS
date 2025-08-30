import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){

    }

    signup(dto: AuthDto) {
        // generate the password hash

        // save the new user in the db

        // return the saved user
        return {msg: "I have signed up"}

    }

    signin() {
        return {msg: "I have signed in"}
    }
}