import {MigrationInterface, QueryRunner} from "typeorm";

export class AddForeingKeyToSessionsTable1628288084867 implements MigrationInterface {
    name = 'AddForeingKeyToSessionsTable1628288084867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "UQ_57de40bc620f456c7311aa3a1e6" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "UQ_57de40bc620f456c7311aa3a1e6"`);
    }

}
