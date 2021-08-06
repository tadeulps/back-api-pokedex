import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableSessions1628284985649 implements MigrationInterface {
    name = 'CreateTableSessions1628284985649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sessions" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "token" character varying NOT NULL, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sessions"`);
    }

}
