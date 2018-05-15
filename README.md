# Welcome
This is a simple demo to explore [NextJS v6](https://nextjs.org).

My initial goal is to start with a clean slate and see how new features and functionality in [NextJS v6](https://nextjs.org) can be incorporated.

Ultimately, I would like to see this project have parity with my previous NextJS 5 demos - [demo-nextjs-v5-without-typescript](https://github.com/TheRobBrennan/demo-nextjs-v5-without-typescript) and [demo-nextjs-v5](https://github.com/TheRobBrennan/demo-nextjs-v5). 

# Getting started
## Initial setup and installation
To get started with [NextJS v6](https://nextjs.org), all you need to do is clone this repo and run the install script:

    $ git clone git@github.com:TheRobBrennan/demo-nextjs-v6.git
    $ cd demo-nextjs-v6
    $ npm install

## Start your local development server
Once you have cloned the repo and installed the required dependencies, you can start NextJS by running:

    $ npm run dev

Once you see `> Ready on http://localhost:3000`, you can view your app at [http://localhost:3000](http://localhost:3000)

TIP: If you would like to run your application on a port other than the default `3000`, you can run:

    $ npm run dev -- -p <your port here>

Your development server will constantly reload as changes are made to your app.

# Key features
There are a few key things that I wanted to achieve with this demo:

+ Incorporate a back-end [ExpressJS](http://expressjs.com) server for handling custom server routes

## ExpressJS server
This demo uses a lightweight ExpressJS server - `server.js` - to demonstrate how to:

+ Create an endpoint (for an API, as an example) that does not use NextJS
+ Server-side render (SSR) NextJS pages
+ Server side render (SSR) custom route/paths with NextJS

### Endpoint that does not use NextJS
#### /test
This example path is a route that our NextJS app knows absolutely nothing about. It is purely handled by our Express server. You can ping this route to verify that the server is available.

### Server side rendering (SSR) for NextJS pages
#### /ping
This is simple server side rendering (SSR) for the `ping.jsx` page

### Server side rendering (SSR) for custom routes
This example uses the `ping.jsx` as the page we want to render when handling custom routes.

#### Client configuration
In `layout/App.jsx` notice that we have the following code block:

```sh
      <Link as={`/people`} href={`/ping`}><a>People</a></Link>&nbsp;
      <Link as={`/people/developers`} href={`/ping?slug=developers`}><a>Developers</a></Link>&nbsp;
      <Link as={`/people/developers/rob`} href={`/ping?slug=developers&name=rob`}><a>Rob</a></Link>&nbsp;
```

This tells NextJS that these links will render the `ping.jsx` page, but that we want the URLs to appear as `/people/...` and not just a link to `/ping?slug=developers&name=rob`.

This setup will work fine on the client side...until they try to access the `/people/...` route directly or refresh the web page. To get that to work, we need to modify our lightweight server to explicitly handle those routes.

#### Server configuration
Notice that in our `./server/server.js` file we have the following block of code:

```sh
    server.get('/people', (req, res) => {
      const actualPage = '/ping'
      const queryParams = { }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/people/:slug', (req, res) => {
      const actualPage = '/ping'
      const queryParams = { slug: req.params.slug, name: req.params.name }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/people/:slug/:name', (req, res) => {
      const actualPage = '/ping'
      const queryParams = { slug: req.params.slug, name: req.params.name }
      app.render(req, res, actualPage, queryParams)
    })
```

All three of these custom routes render the `ping.jsx` page with the appropriate parameters passed in. This means the user will be able to navigate to the following example URLs in their browser OR by forcing a hard refresh on the server:

+ /people
+ /people/developers
+ /people/developers/rob

# Deployment
One goal of this project will be to explore the cloud hosting service provided by Zeit - the creators of NextJS.

## Zeit Now
If you have not signed up for a free account at [Zeit Now](https://zeit.co/), please do so before continuing on with this guide.

To deploy this application to Zeit Now, you can run:

    $ npm run deploy:now

You should see output similar to:
```
> Deploying ~/repos/demo-nextjs-v6 under therobbrennan
> Using Node.js 8.11.1 (default)
> https://demo-nextjs-v6-omwahwlyce.now.sh [in clipboard] (sfo1) [2s]
> Synced 2 files (2.49KB) [2s]
> Building…
> ▲ npm install
> ✓ Using "package-lock.json"
> ⧗ Installing 3 main dependencies…
> ✓ Installed 749 modules [7s]
> ▲ npm run build
> 
> demo-nextjs-v6@0.1.0 build /home/nowuser/src
> next build
> 
> ▲ Snapshotting deployment
> ▲ Saving deployment image (10.8M)
> Build completed
> Verifying instantiation in sfo1
> [0] 
> [0] demo-nextjs-v6@0.1.0 start /home/nowuser/src
> [0] next start
> [0] 
> ✔ Scaled 1 instance in sfo1 [13s]
> Success! Deployment ready
```

Zeit Now will give each deployment its own URL. In the above example, we can visit our application at [https://demo-nextjs-v6-omwahwlyce.now.sh](https://demo-nextjs-v6-omwahwlyce.now.sh)

For more information, please see the [Five Minute Guide](https://zeit.co/docs) for an overview on deploying to [Zeit Now](https://zeit.co/dashboard).

# Third party services
## Docker
As of this writing, you do not have to download or use Docker to run this project. However, if you have [Docker](https://www.docker.com) installed and configured on your development machine, you can spin up the project by running:

    $ npm run docker:up

TIP: If you want to explicitly force a clean build of the Docker images and containers for this project, you can run:

    $ npm run docker:up:clean

To verify the server is running, you should be able to see a response from [http://localhost:3000](http://localhost:3000) to verify the application is running.

Once you have finished with your work - or if you would like to stop the project from running:

    $ npm run docker:down

### BONUS: Docker scripts
I've included additional scripts that have been useful when working with Docker in previous projects.

You can run these with:

    $ npm run <script>

+ docker:nuke
    - This is the nuclear weapon. This command will delete **ALL** of your containers and images GLOBALLY. 
    
    **If you are using Docker with other projects on your machine, this command will nuke those, too!**
