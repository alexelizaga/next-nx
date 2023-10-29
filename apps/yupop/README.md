# Yupop

Technologies:
- NX: Nx is a powerful open-source build system that provides tools and techniques for enhancing developer productivity, optimizing CI performance, and maintaining code quality.
- Next.js 13: The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
- Tailwind CSS: A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- Zustand: A small, fast, and scalable bearbones state management solution.

## Install

```
yarn
```

## Serve development

```
yarn nx run yupop:serve:development
```

```
npx nx serve yupop --dev
```

## Run Test

```
yarn nx test yupop
```

```
npx nx test yupop
```

```
yarn nx test yupop --coverage
```

```
npx nx test yupop --coverage
```

## Build Production

```
yarn nx run yupop:build --configuration=production
```

```
npx nx build yupop --prod
```
