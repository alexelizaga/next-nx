## MySQL

Conectarse

```
docker exec -it lms-db mysql -p
```

```
mysql> show databases
```

## Prisma

Inicializar

```
npx prisma init
```

Generar

```
npx prisma generate
```

Publicar

```
npx prisma db push
```

Ver base de datos

```
npx prisma studio
```

Borrar base de datos

```
npx prisma migrate dev
```

## Script

```
node scripts/seed.ts
```

## Stripe

In dev mode webhook simulator

```
stripe listen --forward-to localhost:3000/api/webhook
```

## NVM

```
nvm list
nvm use v18
```
