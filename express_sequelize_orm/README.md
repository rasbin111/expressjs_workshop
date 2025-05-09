### Install Dependencies
```bash
npm install sequelize pg pg-hstore
```

### Initialize Sequelize
```bash
npx sequelize-cli init
```
This generates `config/config.json`, and folders for models, migrations and seeders.

### Create a Model
```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string
```

### Run migration
```bash
npx sequelize-cli db:create       # Creates DB (if not already)
npx sequelize-cli db:migrate      # Runs migration to create tables
```