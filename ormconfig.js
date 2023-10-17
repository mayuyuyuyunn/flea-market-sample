module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  // Entityを作成するごとにEntityをTypeORMの設定に追加するけどそれを省略
  autoLoadEntities: true,
  entities: ['dist/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  // cliによってファイルが作成される際の出力先  
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  }
}
