# NextNx

## Create new next app

```
yarn nx g @nx/next:app apps/yupop
```

## Add Tailwind

```
yarn nx g @nx/next:setup-tailwind --project=apps/yupop
```

## tsconfig.json

Add @ paths

```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["apps/lms/*"]
    }
  }

}
```

## project.json

Change references to

```
{
  "name": "yupop",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "apps/yupop",
  "projectType": "application",
  "targets": {
    "build": {
      "executor": "@nx/next:build",
      "outputs": ["{options.outputPath}"],
      "defaultConfiguration": "production",
      "options": {
        "outputPath": "dist/apps/yupop",
        "postcssConfig": "apps/yupop/postcss.config.js"
      },
      "configurations": {
        "development": {
          "outputPath": "apps/yupop"
        },
        "production": {}
      }
    },
    "serve": {
      "executor": "@nx/next:server",
      "defaultConfiguration": "development",
      "options": {
        "buildTarget": "yupop:build",
        "dev": true,
        "port": 3000
      },
      "configurations": {
        "development": {
          "buildTarget": "yupop:build:development",
          "dev": true
        },
        "production": {
          "buildTarget": "yupop:build:production",
          "dev": false
        }
      }
    },
    "export": {
      "executor": "@nx/next:export",
      "options": {
        "buildTarget": "yupop:build:production"
      }
    },
    "test": {
      "executor": "@nx/jest:jest",
      "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
      "options": {
        "jestConfig": "apps/yupop/jest.config.ts",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    },
    "lint": {
      "executor": "@nx/linter:eslint",
      "outputs": ["{options.outputFile}"],
      "options": {
        "lintFilePatterns": ["apps/yupop/**/*.{ts,tsx,js,jsx}"]
      }
    }
  },
  "tags": []
}
```
