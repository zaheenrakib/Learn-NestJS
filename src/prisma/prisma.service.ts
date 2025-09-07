import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';



@Injectable()
export class PrismaService extends PrismaClient{
    constructor(prisma: PrismaService){
        super({
            datasources:{
                db:{
                    url: 'postgresql://postgres:123@localhost:5434/nest'
                }
            }
        });
        prisma.user.findMany();
    }

}
