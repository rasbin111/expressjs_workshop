# express_banking

On MacOS or Linux, run the app with this command:
```bash
DEBUG=express_banking:* npm start
```

On Windows Command Prompt, use this command:
```cmd
set DEBUG=express_banking:* & npm start
```

To map your data model to the database schema, you need to use the prisma migrate CLI commands:
```bash
npx prisma migrate dev --name init
```