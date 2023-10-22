import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMissingColumnsToItem1697955352575 implements MigrationInterface {
    name = 'AddMissingColumnsToItem1697955352575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "createdAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "updatedAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "name"`);
    }

}
