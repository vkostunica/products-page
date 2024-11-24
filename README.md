# Products page

## Fleek deployment

```bash
# clone repo
git clone git@github.com:vkostunica/products-page.git

#install fleek cli
npm install -g @fleek-platform/cli
fleek version

# login to fleek cli
fleek login

# add @fleek-platform/next package
npm install @fleek-platform/next

# use npm instead of yarn and install packages
npm install

# build app
npx fleek-next build

# create function and select project
fleek functions create --name products-page-f1

# deploy and select products-page-f1 function
fleek functions deploy --bundle=false --path .fleek/dist/index.js --assets .fleek/static

```
