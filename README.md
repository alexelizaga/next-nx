# NextNx

## Create new next app

```
yarn nx g @nx/next:app apps/yupop
```

## Add Tailwind

```
yarn nx g @nx/next:setup-tailwind --project=apps/yupop
```

## @ paths

```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["apps/lms/*"]
    }
  }

}
```
