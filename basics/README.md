# basics

On MacOS or Linux, run the app with this command:
```bash
DEBUG=basics:* npm start
```

On Windows Command Prompt, use this command:
```cmd
set DEBUG=basics:* & npm start
```

To map your data model to the database schema, you need to use the prisma migrate CLI commands:
```bash
npx prisma migrate dev --name init
```

Generate prisma client
```bash
npx prisma generate
```